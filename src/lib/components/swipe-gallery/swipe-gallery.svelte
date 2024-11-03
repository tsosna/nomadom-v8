<script lang="ts">
	import { spring } from 'svelte/motion'
	import { Image } from '@/components/image'
	import { dev } from '$app/environment'
	import { Timer } from '@/utils.svelte'
	import { onDestroy, onMount } from 'svelte'
	import { Button } from '@/components/ui/button'
	import { CirclePlay, ChevronLeft, ChevronRight, CircleStop } from 'lucide-svelte'

	const images = [
		'n_M_CLARO_elewacja_prawa_84330413ae.webp',
		'n_M_CLARO_elewacja_frontowa_lewa_ebf368c46b.webp',
		'n_M_CLARO_elewacja_frontowa_prawa_4ec1a4c970.webp',
		'n_M_CLARO_elewacja_tylna_lewa_f9b84111fb.webp',
		'n_M_CLARO_elewacja_frontowa_616e365307.webp',
		'n_M_CLARO_elewacja_tylna_2708952937.webp'
	]

	let innerWidth = $state(0)

	const timer = new Timer()
	const timerAutoSwipe = new Timer()

	const DEVICE_WIDTH = $derived(innerWidth)
	const HALF_WIDTH = $derived(DEVICE_WIDTH / 2.5)
	const DRAGGING_SPEED = 1.2
	const MAX_BLUR = 8
	let currentImageIndex = $state(0)
	let coordX: number

	let currentImage = $derived(images[currentImageIndex])
	let previousImageIndex = $derived((currentImageIndex - 1 + images.length) % images.length)
	let previousImage = $derived(images[previousImageIndex])
	let nextImageIndex = $derived((currentImageIndex + 1) % images.length)
	let nextImage = $derived(images[nextImageIndex])
	let autoSwipe = $state(true)
	let timerCount = 0

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
	let animating = $state(false)
	let cursorStartX: number = $state(0)
	let cursorCurrentX: number = $state(0)
	const coords = spring({ x: 0 })

	// after data
	const startDrag = (e: MouseEvent | TouchEvent) => {
		if (animating) return
		if (autoSwipe) {
			timer.stop()
			timer.reset()
		}
		dragging = true

		cursorStartX = getCursorX(e)
		cursorCurrentX = cursorStartX

		coordX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.stiffness = coords.damping = 1
		coords.set({ x: 0 })
	}

	const drag = (e: MouseEvent | TouchEvent) => {
		if (!dragging) {
			// avoid updating if not dragging
			return
		}

		const dx = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) - coordX
		coordX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.update(($coords) => ({ x: $coords.x - dx }))

		cursorCurrentX = getCursorX(e)
	}

	const stopDrag = (e: MouseEvent | TouchEvent) => {
		let animationProps = createReleaseAnimation()
		if (autoSwipe) {
			timer.increment(8)
		}
		dragging = false

		coordX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
		coords.stiffness = 0.15
		coords.damping = 0.2

		coords.set({ x: animationProps })
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
			if (autoSwipe) {
				const position = DEVICE_WIDTH - timerAutoSwipe.count * DRAGGING_SPEED
				return clampPosition(position)
			}
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

	function preventDefault(fn: (event: MouseEvent | TouchEvent) => void) {
		return function (this: unknown, event: MouseEvent | TouchEvent) {
			event.preventDefault() // Prevent the default action
			fn.call(this, event) // Call the original handler
		}
	}


	onMount(() => {
		if (autoSwipe) {
			timer.increment(8)
		}
		return () => {
			window.removeEventListener('mousemove', drag)
			window.removeEventListener('touchmove', drag)
			window.removeEventListener('mouseup', stopDrag)
			window.removeEventListener('touchend', stopDrag)
			window.removeEventListener('mouseup', startDrag)
			window.removeEventListener('touchend', startDrag)
		}
	})
	
	onDestroy(() => {
		timer.stop()
		timerAutoSwipe.stop()
	})

	$effect(() => {
		if (autoSwipe && timerAutoSwipe.count === innerWidth) {
			timerAutoSwipe.stop()
			timerAutoSwipe.reset()
			currentImageIndex = nextImageIndex
		}

		if (timer.count > timerCount) {
			timerCount = timer.count
			timerAutoSwipe.increment(0)
		}
	})
</script>

<svelte:window bind:innerWidth />

<button
	onmousemove={drag}
	ontouchmove={drag}
	onmouseup={stopDrag}
	ontouchend={stopDrag}
	class="flex h-screen w-full cursor-auto items-center justify-center"
	aria-label="Swipe Gallery"
>
	<div class="mobile-container relative cursor-pointer overflow-hidden">
		<!--  image below   -->

		<ChevronLeft
			size="32"
			class="absolute bottom-4 right-20 z-30 opacity-50"
			onclick={() => {
				currentImageIndex = nextImageIndex
				timer.stop
				timer.reset()
				autoSwipe = false
			}}
		/>
		{#if autoSwipe}
			<CircleStop
				size="32"
				class="absolute bottom-4 right-12 z-30 opacity-50"
				onclick={() => {
					timer.stop
					timer.reset()
					autoSwipe = false
				}}
			/>
		{:else}
			<CirclePlay
				size="32"
				class="absolute bottom-4 right-12 z-30 opacity-50"
				onclick={() => {
					timer.increment(8)
					autoSwipe = true
				}}
			/>
		{/if}

		<ChevronRight
			size="32"
			class="absolute bottom-4 right-4 z-30 opacity-50"
			onclick={() => {
				currentImageIndex = previousImageIndex
				timer.stop
				timer.reset()
				autoSwipe = false
			}}
		/>
		<Image size="lg" src={previousImage} class="absolute z-0 h-full" style={prevImageStyle} />

		<!--  interactive image   -->
		<div>
			<Image
				onmousedown={preventDefault(startDrag)}
				ontouchstart={startDrag}
				size="lg"
				src={currentImage}
				class="absolute z-10 h-full "
				style={currentImageStyle}
			/>
		</div>

		<!--  image above   -->
		<Image size="lg" src={nextImage} class="absolute z-20 h-full" style={nextImageStyle} />
		{#if dev}
			<pre
				class="pointer-events-none fixed bottom-0 left-0 z-50 bg-gray-800 p-3 text-left text-white opacity-75">
				<br />diffX: {diffX}<br />swipingLeft: {swipingLeft}<br />nextImageStyle: {nextImageStyle}<br
				/>dragging: {dragging}<br />animating: {animating}<br
				/>imagesIndexes: {previousImageIndex} {currentImageIndex} {nextImageIndex}<br
				/>cursorStartX: {cursorStartX}<br />cursorCurrentX: {cursorCurrentX}<br
				/>nextImagePosition(): {nextImagePosition} <br />$coords.x: {$coords.x} <br
				/>currentImagePosition(): {currentImagePosition}<br
				/>currentImageIndex:{currentImageIndex} </pre>
		{/if}
	</div>
</button>

<style>
	.mobile-container {
		width: 1024px;
		height: 568px;
	}
</style>
