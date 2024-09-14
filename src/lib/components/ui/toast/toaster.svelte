<script lang="ts">
	import { fly } from 'svelte/transition'
	import { flip } from 'svelte/animate'

	import { getToastState } from './toast-state.svelte'
	import Toast  from './toast.svelte'

	type ToastPosition = {
		position?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'
		duration?: number
	}

	let { position = 'b', duration = 150 }: ToastPosition = $props()

	const cWrapper = 'flex fixed top-0 left-0 right-0 bottom-0 z-[888] pointer-events-none'
	const cSnackbar = 'flex flex-col space-y-2'
	let cPosition = ''
	let cAlign = ''
	let animAxis = $state({ x: 0, y: 0 })

	let CLASSWrapper = $derived(`${cWrapper} ${cPosition} `)
	let CLASSSnackbar = $derived(`${cSnackbar} ${cAlign} `)

	switch (position) {
		case 't':
			cPosition = 'justify-center items-start'
			cAlign = 'items-center'
			animAxis = { x: 0, y: -100 }
			break
		case 'b':
			cPosition = 'justify-center items-end'
			cAlign = 'items-center'
			animAxis = { x: 0, y: 100 }
			break
		case 'l':
			cPosition = 'justify-start items-center'
			cAlign = 'items-start'
			animAxis = { x: -100, y: 0 }
			break
		case 'r':
			cPosition = 'justify-end items-center'
			cAlign = 'items-end'
			animAxis = { x: 100, y: 0 }
			break
		case 'tl':
			cPosition = 'justify-start items-start'
			cAlign = 'items-start'
			animAxis = { x: -100, y: 0 }
			break
		case 'tr':
			cPosition = 'justify-end items-start'
			cAlign = 'items-end'
			animAxis = { x: 100, y: 0 }
			break
		case 'bl':
			cPosition = 'justify-start items-end'
			cAlign = 'items-start'
			animAxis = { x: -100, y: 0 }
			break
		case 'br':
			cPosition = 'justify-end items-end'
			cAlign = 'items-end'
			animAxis = { x: 100, y: 0 }
			break
	}

	const toastState = getToastState()
</script>

<!-- 
@component
@name Toaster
## Props
- position: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br' = 'b'
- duration: number = 150


-->
<div class="{CLASSWrapper} ">
	<div class={CLASSSnackbar} transition:fly={{ x: animAxis.x, y: animAxis.y, duration }}>
		{#each toastState.toasts as toast, i (toast)}
			<div animate:flip={{ duration }}>
				<Toast {toast} />
			</div>
		{/each}
	</div>
</div>
