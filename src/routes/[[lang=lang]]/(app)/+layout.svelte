<script lang="ts">
	import {aboutThisApp} from '$paraglide/messages.js'
	
	import type { Snippet } from 'svelte'


	let {
		children
	}: {
		children: Snippet
	} = $props()
</script>

<svelte:head>
	<link rel="icon" href="./favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<meta name="description" content={aboutThisApp()} />
</svelte:head>


{@render children()}
