<script lang="ts">
	import '../app.css'

	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import { setToastState } from '@/components/ui/toast/toast-state.svelte'
	import type { Snippet } from 'svelte'
	import Toaster from '@/components/ui/toast/toaster.svelte'
	import { setOpenNavSideState } from '@/components/ui/app-shell/app-shell.state.svelte'

	let {
		children
	}: {
		children: Snippet
	} = $props()

	setToastState()
	setOpenNavSideState()
</script>

<ParaglideJS {i18n}>
	<Toaster />

	{@render children()}
</ParaglideJS>
