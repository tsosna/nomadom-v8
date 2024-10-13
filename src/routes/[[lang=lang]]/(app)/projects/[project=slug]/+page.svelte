<script lang="ts">
	import type { PageData } from './$types'
	import { page } from '$app/stores'
	import { CldImage } from 'svelte-cloudinary'
	import * as renderLangMessages from '@/messages'
	import {
		projects,
		homes,
		currentLanguageTag,
	} from '$paraglide/messages'

	// import { projects as pro } from '@/api/project'
	import { Image } from '@/components/image'
	import { Logo, LogoName, LogoTitle } from '@/components/ui/icon'
	import { languageTag } from '$paraglide/runtime'
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import { onMount } from 'svelte'
	import { visualization } from '@/api/visulization'

	// export let data: PageData

	type Props = { data: PageData; isMobile: boolean }

	let { data }: Props = $props()
	const { slug, isMobile: mobile } = data

	let innerWidth = $state(0)
	let isPortrait = $state(false)
	let isMobile = $state(false)

	function checkOrientation() {
		isPortrait = window.matchMedia('(orientation: portrait)').matches
	}

	function checkIfMobile() {
		isMobile = innerWidth <= 768
	}

	onMount(() => {
		checkIfMobile()
		checkOrientation()
		window.addEventListener('resize', checkOrientation)
		return () => window.removeEventListener('resize', checkOrientation)
	})

	// const renderLang: {
	// 	[key: string]: (
	// 		params?: {},
	// 		options?: { languageTag?: 'en' | 'pl' | 'de' | 'fr' | undefined }
	// 	) => string
	// } = {
	// 	n_M_CLARO_elewacja_frontowa_lewa_ebf368c46b: n_M_CLARO_elewacja_frontowa_lewa_ebf368c46b,
	// 	n_M_CLARO_elewacja_frontowa_prawa_4ec1a4c970: n_M_CLARO_elewacja_frontowa_prawa_4ec1a4c970
	// 	// Add other functions as needed
	// }
</script>

<svelte:window bind:innerWidth />

<Breadcrumb />

<h1>{projects()} Page {slug}</h1>

{#each visualization as { hash, alt }}
	<p>
		{#if renderLangMessages.renderLang[hash]}
			{renderLangMessages.renderLang[hash]()}
		{:else}
			{alt}
		{/if}
	</p>
{/each}

<Logo size="48" color="#34A836" />

<LogoTitle size="48" strokeWidth="4" color="blue" colorAccent="" />

<LogoName size="48" strokeWidth="4" class="text-primary" />

{currentLanguageTag({ languageTag: languageTag() })}

<pre>
  {JSON.stringify($page, null, 2)}
</pre>

<!-- {#each pro as { name, icon, href, alt }}
	{@html homes({
		name: `<h2>${name}</h2>`,
		title: `<h3>${icon}</h3>`,
		subtitle: `<p>${href}</p>`,
		alt: `<p>${alt}</p>`
	})}
{/each} -->

<div class={isPortrait && isMobile ? 'portrait' : 'landscape'}>
	<CldImage
		src="n_M_TECHO_domy_modulowe_projekt_domu_z_elewacja_z_cegly_prosty_i_funkcjonalny_dom_z_wanna_w_tarasie_drewnianym_febdc07c19"
		alt="Paraglide logo"
		width="200"
		height="200"
		crop="mpad"
		quality="auto"
		fetchpriority="high"
		loading="lazy"
		class="rounded-full"
	/>
</div>
<Image
	size="xl"
	src="n_M_TECHO_domy_modulowe_projekt_domu_z_elewacja_z_cegly_prosty_i_funkcjonalny_dom_z_wanna_w_tarasie_drewnianym_febdc07c19"
/>
<Image
	size="xl"
	src="n_M_TECHO_domy_modulowe_projekt_domu_z_elewacja_z_cegly_prosty_i_funkcjonalny_dom_z_wanna_w_tarasie_drewnianym_febdc07c19"
/>

<style>
	.portrait {
		background-color: lightblue;
	}

	.landscape {
		background-color: lightgreen;
	}

	/* Add this to your CSS file or within a <style> tag in your Svelte component */

	/* Styles for portrait orientation */
	@media only screen and (orientation: portrait) {
		.mobile-portrait {
			/* Your styles for mobile portrait orientation */
			background-color: lightblue;
		}
	}

	/* Styles for landscape orientation */
	@media only screen and (orientation: landscape) {
		.mobile-landscape {
			/* Your styles for mobile landscape orientation */
			background-color: lightgreen;
		}
	}
</style>
