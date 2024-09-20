<script lang="ts">
	import type { Snippet } from 'svelte'

	import { AppShell } from '@/components/ui/app-shell'
	import { Theme } from '@/components/ui/theme'
	import { Language } from '@/components/ui/language'

	import Footer from '@/components/footer/footer.svelte'
	import { NavSide } from '@/components/navside'
	import { Burger } from '@/components/ui/icon'
	import defaultAttributes from '@/components/ui/icon/defaultAttributes'
	import Mail from '@/components/ui/icon/Mail.svelte'

	defaultAttributes.viewBox = '0 0 100 100'

	let {
		children
	}: {
		children: Snippet
	} = $props()

	let open = $state(true)
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<!-- <meta name="description" content={about_this_app()} /> -->
</svelte:head>

{#snippet header()}
	<section class="flex items-center justify-between font-accent text-4xl ">
		
		
		nomadoM
		
		<!-- <Theme /> -->
		<!-- <Language /> -->
		<div class="flex-non 2xl:hidden">
			<Burger bind:open viewBox = {'0 0 100 100'}  strokeWidth={6} />
		</div>
		
	</section>
	<NavSide {open}/>
	
<Mail>dsfgs</Mail>

	
{/snippet}
{#snippet pageHeader()}Page Header{/snippet}
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
	classHeader="sticky top-0 bg-nomadom text-nomadom-foreground"
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classSidebarRight="flex flex-col pr-2  "
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
