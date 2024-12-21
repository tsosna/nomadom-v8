<script lang="ts">
	import '../app.css'

	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import { setToastState } from '@/components/ui/toast/toast-state.svelte'
	import type { Snippet } from 'svelte'
	import Toaster from '@/components/ui/toast/toaster.svelte'
	import { setOpenNavSideState } from '@/state/app-shell.svelte'
	import { getCheckDisplayState, setCheckDisplayState } from '@/state/layout.svelte'

	let {
		children
	}: {
		children: Snippet
	} = $props()

	let innerWidth = $state(0)
	let displayState = $state({isMobile:false, isPortrait:false})

	setToastState()
	setOpenNavSideState()
	$effect(() => {
		setCheckDisplayState().checkIfMobile(innerWidth)
		displayState = getCheckDisplayState()
	})

	
	 
</script>
<svelte:window bind:innerWidth />
<ParaglideJS {i18n}>
	<Toaster />

	{@render children()}
</ParaglideJS>

{displayState.isPortrait}
{displayState.isMobile}