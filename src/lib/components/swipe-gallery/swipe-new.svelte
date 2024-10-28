<script lang="ts">
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import {  onMount } from 'svelte'
	const images = [
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684546/wotw-013/nature-1.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684546/wotw-013/nature-2.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684526/wotw-013/nature-3.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684544/wotw-013/nature-4.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684520/wotw-013/nature-5.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684527/wotw-013/nature-6.jpg'
	]

	const DEVICE_WIDTH = 320
	const HALF_WIDTH = DEVICE_WIDTH / 2
	const DRAGGING_SPEED = 1.2
	const MAX_BLUR = 8

	const getCursorX = (event: MouseEvent | TouchEvent) => {
		if (event instanceof TouchEvent && event.touches && event.touches.length) {
			// touch
			return event.touches[0].pageX
		}

		if (event instanceof MouseEvent && event.pageX && event.pageY) {
			// mouse
			return event.pageX
		}

		return 0
	}

	const clampPosition = (position: number) => {
		// constrain image to be between 0 and device width
		return Math.max(Math.min(position, DEVICE_WIDTH), 0)
	}

	const calculateBlur = (position: number) => {
		return MAX_BLUR * (1 - position / DEVICE_WIDTH)
	}



	let dragging = $state(false)
	let animating = $state(false)
	let cursorStartX = $state(0)
	let cursorCurrentX = $state(0)
	let currentImageIndex = $state(0)
	let currentImageAnimatedX = tweened(0, { duration: 200, easing: cubicOut })
	let nextImageAnimatedX = tweened(DEVICE_WIDTH, { duration: 200, easing: cubicOut })

	const startDrag = (e: MouseEvent | TouchEvent) => {
		if (animating) return
		dragging = true
		cursorStartX = getCursorX(e)
		cursorCurrentX = cursorStartX
		// clearInterval(intervalId); // Clear the interval when dragging starts
	}
	
	const drag = (e: MouseEvent | TouchEvent) => {
		if (!dragging) return
		cursorCurrentX = getCursorX(e)
		// clearInterval(intervalId); // Clear the interval when dragging starts
	}

	const stopDrag = () => {
		const animationProps = createReleaseAnimation()
		dragging = false
		animating = true
		currentImageAnimatedX.set(animationProps.currentImageAnimatedX ?? 0, {
			duration: 200,
			easing: cubicOut
		})
		nextImageAnimatedX.set(animationProps.nextImageAnimatedX ?? DEVICE_WIDTH, {
			duration: 200,
			easing: cubicOut
		})
		setTimeout(() => (animating = false), 200)
		// startInterval(); // Restart the interval when dragging stops
	}

	const createReleaseAnimation = () => {
		if (swipingLeft) {
			if (nextImagePosition > HALF_WIDTH) {
				nextImageAnimatedX.set(nextImagePosition)
				return { nextImageAnimatedX: DEVICE_WIDTH }
			}
			currentImageAnimatedX.set(nextImagePosition)
			nextImageAnimatedX.set(DEVICE_WIDTH)
			currentImageIndex = nextImageIndex
			return { currentImageAnimatedX: 0 }
		}
		if (currentImagePosition < HALF_WIDTH) {
			currentImageAnimatedX.set(currentImagePosition)
			return { currentImageAnimatedX: 0 }
		}
		nextImageAnimatedX.set(currentImagePosition)
		currentImageAnimatedX.set(0)
		currentImageIndex = previousImageIndex
		return { nextImageAnimatedX: DEVICE_WIDTH }
	}

	let diffX = $derived(cursorStartX - cursorCurrentX)

	let currentImage = $derived(images[currentImageIndex])
	let previousImageIndex = $derived((currentImageIndex - 1 + images.length) % images.length)
	let previousImage = $derived(images[previousImageIndex])
	let nextImageIndex = $derived((currentImageIndex + 1) % images.length)
	let nextImage = $derived(images[nextImageIndex])
	let swipingLeft = $derived(diffX >= 0)
	let currentImagePosition = $derived(
		animating
			? $currentImageAnimatedX
			: !dragging || swipingLeft
				? 0
				: clampPosition(diffX * -DRAGGING_SPEED)
	)
	let prevImageStyle = $derived(`filter: blur(${calculateBlur(currentImagePosition)}px)`)
	let nextImagePosition = $derived(
		animating
			? $nextImageAnimatedX
			: !dragging || !swipingLeft
				? DEVICE_WIDTH
				: clampPosition(DEVICE_WIDTH - diffX * DRAGGING_SPEED)
	)
	let currentImageStyle = $derived(
		`left: ${currentImagePosition}px; filter: blur(${calculateBlur(nextImagePosition)}px)`
	)
	let nextImageStyle = $derived(`left: ${nextImagePosition}px`)

	let intervalId: ReturnType<typeof setInterval>;

	const moveToNextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
};
const startInterval = () => {
  intervalId = setInterval(moveToNextImage, 10000); // Move to the next image every 5 seconds
};

	onMount(() => {
        // startInterval(); // Start the interval when the component mounts
        window.addEventListener('mousemove', drag);
        window.addEventListener('touchmove', drag);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchend', stopDrag);
        window.addEventListener('mouseup', startDrag);
        window.addEventListener('touchend', startDrag);
        return () => {
            // clearInterval(intervalId); // Clear the interval when the component is destroyed
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('touchmove', drag);
            window.removeEventListener('mouseup', stopDrag);
            window.removeEventListener('touchend', stopDrag);
            window.removeEventListener('mouseup', startDrag);
            window.removeEventListener('touchend', startDrag);
        };
    });

function preventDefault(fn: (event: MouseEvent | TouchEvent) => void) {
  return function (this: unknown, event: MouseEvent | TouchEvent) {
	event.preventDefault(); // Prevent the default action
	fn.call(this, event); // Call the original handler
  };
}

</script>

<div
	id="app"
	class="flex h-screen w-screen items-center justify-center "
	role="application"
	tabindex="0"
	onmousemove={drag}
	onmouseup={stopDrag}
	ontouchmove={drag}
	ontouchend={stopDrag}
>
	<div class="mobile-container relative overflow-hidden cursor-move">
		<img class="absolute z-0 h-full" style={prevImageStyle} src={previousImage} alt="" />
		<button
			class="absolute z-10 h-full"
			onmousedown={preventDefault(startDrag)}
			ontouchstart={startDrag}
			style={currentImageStyle}
			tabindex="0"
		>
			<img
				class="h-full"
				src={currentImage}
				alt=""
			/>
		</button>
		<img class="absolute z-20 h-full" style={nextImageStyle} src={nextImage} alt="" />

		<pre
			class="pointer-events-none fixed bottom-0 left-0 z-50 bg-gray-800 p-3 text-white opacity-75">
dragging: {dragging}
animating: {animating}
imagesIndexes: [{previousImageIndex}] [{currentImageIndex}] [{nextImageIndex}]
cursorStartX: {cursorStartX}
cursorCurrentX: {cursorCurrentX}
diffX: {diffX}
currentImagePosition: {currentImagePosition}
nextImagePosition: {nextImagePosition}
animationProps.currentImageAnimatedX: {currentImageAnimatedX}
</pre>
	</div>
</div>

<style>
	.mobile-container {
		width: 320px;
		height: 568px;
	}
</style>
