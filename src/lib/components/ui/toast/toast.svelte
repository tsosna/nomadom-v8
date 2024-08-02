<script lang="ts">
	import { X } from '@/components/ui/icon'
	import type { Toast } from './types'
	import { Button } from '@/components/ui/button'
	import { getToastState } from './toast-state.svelte'

	type Props = {
		toast: Toast
		width?: string
		padding?: string
		spacing?: string
		rounded?: string
		shadow?: string
	}

	let {
		toast,
		width = 'max-w-[640px]',
		padding = 'p-4',
		spacing = 'space-x-4',
		rounded = 'rounded-container-filled',
		shadow = 'shadow-lg'
	}: Props = $props()
	const toastState = getToastState()

	const cToast = 'flex justify-between items-center pointer-events-auto'
	const cToastActions = 'flex items-center space-x-2'

	let classesToast = $derived(
		`${cToast} ${width} ${padding} ${spacing} ${rounded} ${shadow}`
	)
</script>

<!-- 
@component
@name Toast
## Props
- toast: Toast
- width: string = 'max-w-[640px]'
- padding: string = 'p-4'
- spacing: string = 'space-x-4'
- rounded: string = 'rounded-container-filled'
- shadow: string = 'shadow-lg'
-->

<div class="{classesToast} {toast.background} {toast.classes}" role="alert" aria-live="polite">
	<div class="flex-1">
		<p class="font-inter text-lg font-semibold">{@html toast.title}</p>
		<p class="font-inter text-base">{@html toast.message}</p>
	</div>
	<div class={cToastActions}>

		
		<Button variant="default" size="sm" onclick={() => toastState.remove(toast.id)}>
			<X/>
		</Button>
	</div>
</div>
