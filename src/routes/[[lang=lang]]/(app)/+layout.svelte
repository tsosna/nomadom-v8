<script lang="ts">
	import type { PageData } from './$types'
	import type { Snippet } from 'svelte'
	import { AppShell } from '@/components/ui/app-shell'
	import { Footer } from '@/components/footer'
	import { NavBar } from '@/components/navbar'
	import { disable, useCookies } from '$paraglide/messages'
	import { getCookie, setCookie } from '@/utils'
	import { onMount } from 'svelte'
	import { Banner } from '@/components/ui/banner'
	import { Cookie } from '@/components/ui/icon'
	import { fly } from 'svelte/transition'
	import { getOpenNavSideState } from '@/state/app-shell.svelte'

	const openNavSide = getOpenNavSideState()


	let {
		data,
		children
	}: {
		data: PageData
		children: Snippet
	} = $props()

	let cookieConsent: string | null = $state(data.cookieConsent)

	onMount(() => {
		if (typeof document !== 'undefined') {
			cookieConsent = getCookie('cookieConsent')
		}
	})

</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>nomadoM</title>
	<meta name="application" content="nomadoM" />
	<!-- <meta name="description" content={about_this_app()} /> -->
</svelte:head>

{#snippet header()}
	<NavBar />
{/snippet}
{#snippet pageHeader()}
	<!-- TODO: this area can be used to display a banner, e.g. with information on cookies -->

	{#if cookieConsent === 'false'}
		<div transition:fly={{ duration: 500, y: -100, opacity: 15 }} class="w-full">
			<Banner
				icon={Cookie}
				callToAction={{
					label: disable(),
					onClick: () => {
						setCookie('cookieConsent', 'true')
						cookieConsent = 'true'
					}
				}}
				label={useCookies()}
				variant="warning"
			/>
		</div>
	{/if}
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
	classHeader="sticky top-0 pl-0.5 md:px-0 bg-nomadom text-nomadom-foreground z-50"
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classSidebarRight="flex flex-col pr-2  "
	classFooter="hidden md:flex"
	openNavSide={openNavSide.openNavSide}
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
