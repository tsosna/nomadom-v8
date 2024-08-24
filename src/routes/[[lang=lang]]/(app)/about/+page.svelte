<script lang="ts">
	import en from './en.svelte'
	import de from './de.svelte'
	import pl from './pl.svelte'
	import fr from './fr.svelte'
	import { about } from '$paraglide/messages.js'
	import { languageTag, type AvailableLanguageTag } from '$paraglide/runtime'

	const lang: Record<AvailableLanguageTag, any> = { en, de, pl, fr }
</script>

<svelte:head>
	<title>{about()}</title>
</svelte:head>

<svelte:component this={lang[languageTag()]} />
