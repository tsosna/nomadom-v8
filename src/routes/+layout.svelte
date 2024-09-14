<script lang="ts">
	import '../app.css'

	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import { setToastState } from '@/components/ui/toast/toast-state.svelte'
	import type { Snippet } from 'svelte'
	import Toaster from '@/components/ui/toast/toaster.svelte'


	let {
		children
	}: {
		children: Snippet
	} = $props()

	setToastState()
</script>

<ParaglideJS {i18n}>
	<Toaster />

	{@render children()}
</ParaglideJS>
