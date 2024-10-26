<script lang="ts">
	import type { PageData } from './$types'
	import { CldImage } from 'svelte-cloudinary'
	import { projects as projectsLang, homes, currentLanguageTag } from '$paraglide/messages'
	import { Image } from '@/components/image'
	import { Logo, LogoName, LogoTitle } from '@/components/ui/icon'
	import { languageTag } from '$paraglide/runtime'
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import * as renderLangMessages from '@/messages'
	import { SphereViewer } from '@/components/sphere-viewer'
	import 'reveal.js/dist/reveal.css'

	import { Presentation, Slide } from '@/components/animation'

	export let data: PageData
	const { projects } = data
</script>

<svelte:head>
	<title>{projectsLang()}</title>
</svelte:head>
<Breadcrumb />

<h1>{projectsLang()} Page</h1>

<Logo size="48" color="#34A836" />

<LogoTitle size="48" strokeWidth="4" color="blue" colorAccent="" />

<LogoName size="48" strokeWidth="4" class="text-primary" />

{currentLanguageTag({ languageTag: languageTag() })}

<!-- <pre>
  {JSON.stringify(data, null, 2)}
</pre> -->

<h2>Animation</h2>

<div class="h-[900px]">

	<Presentation>
		<Slide >
			<div class="threlte">
				<SphereViewer />
			</div>
		</Slide>
		<Slide class="h-full place-content-center place-items-center">Slide 2</Slide>
	</Presentation>
</div>
	
<CldImage
	src="n_M_CLARO_elewacja_tylna_prawa_7790090327"
	alt="Paraglide logo"
	width="200"
	height="200"
	crop="fill"
	quality="auto"
	fetchpriority="high"
	loading="lazy"
	class="rounded-full"
/>

{#each projects as { name, images }}
	<h1>{name}</h1>
	<!-- <pre>
	{JSON.stringify(images, null, 2)}
</pre> -->

	{#each images as { title, alt, caption, hash, imageType }}
		<p>
			HASH: {hash}
		</p>
		<Image size="xl" src={hash} />
		<p>
			{#if title && renderLangMessages.renderLang[title]}
				{renderLangMessages.renderLang[title]()}
			{:else}
				{alt}
			{/if}
		</p>
		<hr />
	{/each}
{/each}

<style>
	.threlte {
		width: 100vw;
		height: 50vh;
		background: rgb(13, 19, 32);
		background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
	}
</style>
