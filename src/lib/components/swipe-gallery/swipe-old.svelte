<script lang="ts">
	import { onMount } from 'svelte'
	import { spring } from 'svelte/motion'

	const images = [
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684546/wotw-013/nature-1.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684546/wotw-013/nature-2.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684526/wotw-013/nature-3.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684544/wotw-013/nature-4.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684520/wotw-013/nature-5.jpg',
		'https://res.cloudinary.com/ederchrono/image/upload/v1556684527/wotw-013/nature-6.jpg'
	]

	const DEVICE_WIDTH = 320
	const HALF_WIDTH = DEVICE_WIDTH / 2.5
	const DRAGGING_SPEED = 1.2
	const MAX_BLUR = 8
	let currentImageIndex = $state(0)
	let x: number

	let currentImage = $derived(images[currentImageIndex])
	let previousImageIndex = $derived((currentImageIndex - 1 + images.length) % images.length)
	let previousImage = $derived(images[previousImageIndex])
	let nextImageIndex = $derived((currentImageIndex + 1) % images.length)
	let nextImage = $derived(images[nextImageIndex])

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

	let dragging: boolean = $state(false)
	let cursorStartX: number = $state(0)
	let cursorCurrentX: number = $state(0)

	const coords = spring({ x: 0 })

	// after data
	const startDrag = (e: MouseEvent | TouchEvent) => {
		dragging = true

		cursorStartX = getCursorX(e)
		cursorCurrentX = cursorStartX

		x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.stiffness = coords.damping = 1
		coords.set({ x: 0 })
	}

	const drag = (e: MouseEvent | TouchEvent) => {
		if (!dragging) {
			// avoid updating if not dragging
			return
		}

		const dx = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) - x
		x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.update(($coords) => ({ x: $coords.x - dx }))

		cursorCurrentX = getCursorX(e)
	}

	const stopDrag = (e: MouseEvent | TouchEvent) => {
		let animation = createReleaseAnimation()

		dragging = false

		x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.stiffness = 0.15
		coords.damping = 0.2

		coords.set({ x: animation })
	}

	// inside computed
	let diffX = $derived(cursorStartX - cursorCurrentX)
	let swipingLeft = $derived(diffX >= 0 ? true : false)

	const clampPosition = (position: number) => {
		// constrain image to be between 0 and device width
		return Math.max(Math.min(position, DEVICE_WIDTH), 0)
	}

	let nextImagePosition = $derived.by(() => {
		const swipingRight = !swipingLeft
		if (!dragging || swipingRight) {
			return DEVICE_WIDTH
		}
		const position = DEVICE_WIDTH - $coords.x * DRAGGING_SPEED
		return clampPosition(position)
	})

	let nextImageStyle = $derived(`left: ${nextImagePosition}px`)

	// inside computed
	let currentImagePosition = $derived.by(() => {
		if (!dragging || swipingLeft) {
			return 0
		}
		const position = diffX * -DRAGGING_SPEED
		return clampPosition(position)
	})

	const calculateBlur = (position: number) => {
		return MAX_BLUR * (1 - position / DEVICE_WIDTH)
	}

	let currentImageStyle = $derived.by(() => {
		const blur = calculateBlur(nextImagePosition)
		return `left: ${currentImagePosition}px; filter: blur(${blur}px)`
	})

	let prevImageStyle = $derived.by(() => {
		const blur = calculateBlur(currentImagePosition)
		return `filter: blur(${blur}px)`
	})

	const createReleaseAnimation = () => {
		if (swipingLeft) {
			if (nextImagePosition > HALF_WIDTH) {
				return DEVICE_WIDTH
			}
			// setTimeout(() => (currentImageIndex = nextImageIndex), 400);
			currentImageIndex = nextImageIndex
			return 0
		}
		if (currentImagePosition < HALF_WIDTH) {
			return 0
		}
		// setTimeout(() => (currentImageIndex = previousImageIndex), 400);
		currentImageIndex = previousImageIndex
		return DEVICE_WIDTH
	}

	onMount(() => {
		window.addEventListener('mousemove', drag)
		window.addEventListener('touchmove', drag)
		window.addEventListener('mouseup', stopDrag)
		window.addEventListener('touchend', stopDrag)
		return () => {
			window.removeEventListener('mousemove', drag)
			window.removeEventListener('touchmove', drag)
			window.removeEventListener('mouseup', stopDrag)
			window.removeEventListener('touchend', stopDrag)
		}
	})

	function preventDefault(fn: (event: MouseEvent | TouchEvent) => void) {
		return function (this: unknown, event: MouseEvent | TouchEvent) {
			event.preventDefault() // Prevent the default action
			fn.call(this, event) // Call the original handler
		}
	}
</script>

<button
	onmousemove={drag}
	ontouchmove={drag}
	onmouseup={stopDrag}
	ontouchend={stopDrag}
	class="flex h-screen w-screen cursor-auto items-center justify-center"
	aria-label="Swipe Gallery"
>
	<div class="mobile-container relative cursor-pointer overflow-hidden" role="button">
		<!--  image below   -->
		<img class="absolute z-0 h-full" src={previousImage} style={prevImageStyle} alt="" />

		<!--  interactive image   -->
		<img
			onmousedown={preventDefault(startDrag)}
			ontouchstart={startDrag}
			class="absolute z-10 h-full"
			src={currentImage}
			style={currentImageStyle}
			alt=""
			aria-label="Swipe Current image"
		/>

		<!--  image above   -->
		<img class="absolute z-20 h-full" style={nextImageStyle} src={nextImage} alt="" />

		<pre
			class="pointer-events-none fixed bottom-0 left-0 z-50 bg-gray-800 p-3 text-white opacity-75">
			diffX: {diffX}<br />swipingLeft: {swipingLeft}<br />nextImageStyle: {nextImageStyle}<br
			/>dragging: {dragging}<br
			/>imagesIndexes: {previousImageIndex} {currentImageIndex} {nextImageIndex}<br
			/>cursorStartX: {cursorStartX}<br />cursorCurrentX: {cursorCurrentX}<br
			/>nextImagePosition(): {nextImagePosition} <br />$coords.x: {$coords.x} <br
			/>currentImagePosition(): {currentImagePosition}  </pre>
	</div>
</button>

<style>
	.mobile-container {
		width: 320px;
		height: 568px;
	}
</style>
