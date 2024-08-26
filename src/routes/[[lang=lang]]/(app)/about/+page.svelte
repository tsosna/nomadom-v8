<script lang="ts">
	import en from './en.svelte'
	import de from './de.svelte'
	import pl from './pl.svelte'
	import fr from './fr.svelte'
	import { about } from '$paraglide/messages.js'
	import { languageTag, type AvailableLanguageTag } from '$paraglide/runtime'
  import { goto } from '$app/navigation'
  import { i18n } from '$lib/i18n'
  import {home} from '@/paraglide/messages'
	import { base } from '$app/paths'

	const lang: Record<AvailableLanguageTag, any> = { en, de, pl, fr }
</script>

<svelte:head>
	<title>{about()}</title>
</svelte:head>

<svelte:component this={lang[languageTag()]} />

<h1>
  About Page
</h1>

<button onclick={() => goto(i18n.resolveRoute(base + '/'))}>{home()}</button>
