<script lang="ts">
	import type { PageData } from './$types'
	import { dev } from '$app/environment'
	import { CldImage } from 'svelte-cloudinary'
	import { projects as projectsLang, currentLanguageTag } from '$paraglide/messages'
	import { Image } from '@/components/image'
	import { Logo, LogoName, LogoTitle } from '@/components/ui/icon'
	import { languageTag } from '$paraglide/runtime'
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import * as renderLangMessages from '@/messages'
	import { SphereViewer } from '@/components/sphere-viewer'
	import { SwipeGallery } from '@/components/swipe-gallery'
	import type { Project,Image as ImageType } from '@/schemas/generated'

	type Props = { data: PageData}

	type ExtendedProject = Project & { images: Array<ImageType> }

		let { data }: Props = $props()
	
		const { projects } = data;
	// console.log({projects});
	
	const highlightedImages = projects.flatMap((project: ExtendedProject) => 
		project.highlighted && project.images.filter((image: { highlighted: boolean }) => image.highlighted)
	);

// 	{
//   "message": "Ups! Something went wrong. Internal error in hooks. \nInvalid `prisma.project.findMany()` invocation:\n\n\nError occurred during query execution:\nConnectorError(ConnectorError { user_facing_error: None, kind: QueryError(PostgresError { code: \"42P05\", message: \"prepared statement \\\"s9\\\" already exists\", severity: \"ERROR\", detail: None, column: None, hint: None }), transient: false })",
//   "errorId": "undefined"
// }

let innerWidth = $state(0)
</script>

<svelte:window bind:innerWidth />
<svelte:head>
	<title>{projectsLang()}</title>
</svelte:head>
<Breadcrumb />

<h1>{projectsLang()} Page</h1>

<Logo size="48" color="#34A836" />

<LogoTitle size="48" strokeWidth="4" color="#34A836" colorAccent="" />

<LogoName size="24" strokeWidth="4" class="text-primary" />

{currentLanguageTag({ languageTag: languageTag() })}

<!-- {#if dev}
	<pre>
		{JSON.stringify(highlightedImages, null, 2)}
	</pre>
{/if} -->

<h2>Swipe</h2>

	<SwipeGallery images={highlightedImages}/>

<h2>Spher-Viever</h2>

<div class=" w-full">
	<SphereViewer />
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
<!-- {#if dev}
	<pre>
		{JSON.stringify(images, null, 2)}
	</pre>  
{/if} -->
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
