<script lang="ts">
	import type { PageData } from './$types'
	import { page } from '$app/stores'
	import { CldImage } from 'svelte-cloudinary'
	import * as renderLangMessages from '@/messages'
	import { projects, currentLanguageTag } from '$paraglide/messages'

	// import { projects as pro } from '@/api/project'
	import { Image } from '@/components/image'
	import { Logo, LogoName, LogoTitle } from '@/components/ui/icon'
	import { languageTag } from '$paraglide/runtime'
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import { onMount } from 'svelte'
	import { images } from '@/api/image'

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
</script>

<svelte:window bind:innerWidth />

<Breadcrumb />

<h1>{projects()} Page {slug}</h1>

{#each images as { title, alt }}
	<p>
		{#if title && renderLangMessages.renderLang[title]}
			{renderLangMessages.renderLang[title]()}
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
