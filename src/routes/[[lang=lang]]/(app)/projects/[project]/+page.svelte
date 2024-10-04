<script lang="ts">
	import type { PageData } from './$types'
	import { page } from '$app/stores'
	import { CldImage } from 'svelte-cloudinary'

	import { projects, homes, currentLanguageTag } from '$paraglide/messages'
	import { projects as pro } from '@/api/project'
	import { Image } from '@/components/image'
	import { Logo, LogoName, LogoTitle } from '@/components/ui/icon'
	import { languageTag } from '$paraglide/runtime'
	import { Breadcrumb } from '@/components/ui/breadcrumb'

	export let data: PageData
</script>

<Breadcrumb />

<h1>{projects()} Page</h1>

<Logo size="48" color="#34A836" />

<LogoTitle size="48" strokeWidth="4" color="blue" colorAccent="" />

<LogoName size="48" strokeWidth="4" class="text-primary" />

{currentLanguageTag({ languageTag: languageTag() })}

<pre>
  {JSON.stringify(data, null, 2)}
</pre>

{#each pro as { name, icon, href, alt }}
	{@html homes({
		name: `<h2>${name}</h2>`,
		title: `<h3>${icon}</h3>`,
		subtitle: `<p>${href}</p>`,
		alt: `<p>${alt}</p>`
	})}
{/each}

<CldImage
	src="n_M_TECHO_domy_modulowe_projekt_domu_z_elewacja_z_cegly_prosty_i_funkcjonalny_dom_z_wanna_w_tarasie_drewnianym_febdc07c19"
	alt="Paraglide logo"
	width="200"
	height="200"
	crop="fill"
	quality="auto"
	fetchpriority="high"
	loading="lazy"
	class="rounded-full"
/>

<Image
	size="xl"
	src="n_M_TECHO_domy_modulowe_projekt_domu_z_elewacja_z_cegly_prosty_i_funkcjonalny_dom_z_wanna_w_tarasie_drewnianym_febdc07c19"
/>
