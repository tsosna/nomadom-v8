<script lang="ts">
	import type { Snippet } from 'svelte'
	import { AppShell } from '@/components/ui/app-shell'
	import { Footer } from '@/components/footer'
	import { Navbar } from '@/components/navbar'
	import { useCookies } from '$paraglide/messages'

	let {
		children
	}: {
		children: Snippet
	} = $props()
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<!-- <meta name="description" content={about_this_app()} /> -->
</svelte:head>

{#snippet header()}
	<Navbar />
{/snippet}
{#snippet pageHeader()}
	<!-- TODO: this area can be used to display a banner, e.g. with information on cookies -->
	<h6 class="text-center font-semibold text-blue-500">{useCookies()}</h6>
{/snippet}
{#snippet pageContent()}
	{@render children()}
{/snippet}
{#snippet sidebarRight()}
	<div></div>
{/snippet}

{#snippet footer()}
	<Footer />
{/snippet}

<AppShell
	{header}
	{pageHeader}
	{pageContent}
	{sidebarRight}
	{footer}
	class="md:container md:mx-auto"
	classPageContent="px-0.5 md:px-0"
	classHeader="sticky top-0 pl-0.5 md:px-0 bg-nomadom text-nomadom-foreground"
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classSidebarRight="flex flex-col pr-2  "
	classFooter="hidden md:flex"
	openNavSide={false}
/>

<style lang="postcss">
	/* @keyframes fly-in {
		from {
			opacity: 0%;
			transform: translateY(-50%);
		}
	}

	.collapsible {
		@apply hidden animate-[fly-in];
		animation: fly-in 300ms ease-in-out;
	}

	header:has(input:checked) .collapsible {
		@apply flex flex-col items-start gap-2;
	} */
</style>
