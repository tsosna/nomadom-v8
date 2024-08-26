<script lang="ts">
	import { page } from '$app/stores'

	import type { Snippet } from 'svelte'
	import { currentLanguageTag } from '@/paraglide/messages'

	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js'
	import { i18n } from '$lib/i18n.js'
	import { Language } from '@/components/ui/language'

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

{@render children()}

<h1>APP Layout</h1>
<h2>
	{currentLanguageTag({ languageTag: languageTag() })}
</h2>

{languageTag()}

{#each availableLanguageTags as lang}
	<!-- the hreflang attribute decides which language the link points to -->
	<a
		href={i18n.route($page.url.pathname)}
		hreflang={lang}
		aria-current={lang === languageTag() ? 'page' : undefined}
	>
		{lang} |
	</a>
{/each}

<Language />