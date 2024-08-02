<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

	import '../app.css'
	import { setToastState } from '@/components/ui/toast/toast-state.svelte'
	import type { Snippet } from 'svelte'
	import AppShell from '$lib/components/ui/app-shell/app-shell.svelte'
	import Toaster from '@/components/ui/toast/toaster.svelte'

	let {
		children
	}: {
		children: Snippet
	} = $props()

	setToastState()
</script>
<ParaglideJS {i18n}>


<svelte:head>
	<link rel="icon" href="./favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<!-- <meta name="description" content={about_this_app()} /> -->
</svelte:head>


<Toaster />
{@render children()}

<slot/>
</ParaglideJS>