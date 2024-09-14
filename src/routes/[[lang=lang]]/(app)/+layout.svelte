<script lang="ts">
	import type { Snippet } from 'svelte'
	import { AppShell } from '@/components/ui/app-shell'
	import { Theme } from '@/components/ui/theme'
	import { Language } from '@/components/ui/language'
	import { Burger, Logo } from '@/components/ui/icon'

	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { i18n } from '@/i18n'
	import { about, projects } from '@/paraglide/messages'
	import Footer from '@/components/footer/footer.svelte'
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

<Logo viewBox="0 0 106 106" class='p-1.5 rounded-sm bg-[#36a834] text-white'/>

<section class="hidden">
	<button onclick={() => goto(i18n.resolveRoute(base + '/about'))}> {about()}</button>
	<button onclick={() => goto(i18n.resolveRoute(base + '/projects'))}> {projects()}</button>
</section>

Header

<Theme />
<Language />
<div class="flex flex-col justify-center">
	<Burger viewBox={"0 0 100 100"} class='h-12 w-12 xl:hidden' strokeWidth={6} />
	<button onclick={() => goto(i18n.resolveRoute(base + '/about'))} class='text-left collapsible' > {about()}</button>
	<button onclick={() => goto(i18n.resolveRoute(base + '/projects'))} class='text-left collapsible'> {projects()}</button>
</div>

{/snippet}
{#snippet pageHeader()}Page Header{/snippet}
{#snippet pageContent()}
{@render children()}
{/snippet}
{#snippet sidebarRight()}
<div>
	
</div>
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
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classHeader="sticky top-0 flex justify-between items-center"
	classSidebarRight="flex flex-col pr-2  " 
/>

<style lang="postcss">
.collapsible {
	display: none;
}

div:has(input:checked) .collapsible {
	display: block;
}
</style>