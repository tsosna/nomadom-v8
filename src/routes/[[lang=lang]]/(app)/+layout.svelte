<script lang="ts">
	import type { Snippet } from 'svelte'
	import { page } from '$app/stores'

	import { AppShell } from '@/components/ui/app-shell'
	import { Footer } from '@/components/footer'
	import { Navbar } from '@/components/navbar'

	let {
		children
	}: {
		children: Snippet
	} = $props()

	const breadcrumbs = $page.url.pathname
		.split('/')
		.filter((p) => p !== '')
		.map((p, i, arr) => (i === arr.length - 1 ? p : p + '/'))
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<!-- <meta name="description" content={about_this_app()} /> -->
</svelte:head>

<div class="hidden md:flex md:gap-1 md:text-sm">
	{@render breadcrumb({ href: '/', text: 'home/' })}
	{#each breadcrumbs as text, i}
		{@const href = '/' + breadcrumbs.slice(1, i + 1).join('')}
		{@render breadcrumb({ href, text })}
	{/each}
</div>

{#snippet breadcrumb({ href, text })}
	<a {href}>{text}</a>
{/snippet}

{#snippet header()}
	<Navbar />
{/snippet}
{#snippet pageHeader()}
	<h1 class="text-center text-xl font-extrabold text-blue-500">Layout Header</h1>
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
