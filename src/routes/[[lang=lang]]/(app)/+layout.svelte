<script lang="ts">
	import * as m from '$paraglide/messages'
	
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
	<meta name="description" content={m.aboutThisApp()} />
</svelte:head>


{@render children()}
