<script lang="ts">
	import { page } from '$app/stores'
	import type { VariantProps } from 'tailwind-variants'
	import { Button, buttonVariants } from '$lib/components/ui/button'
	import { Popover, Trigger, Content } from '$lib/components/ui/popover'
	import { Command, Group, Item } from '$lib/components/ui/command'
	import { availableLanguageTags, languageTag } from '$paraglide/runtime'
	import { i18n } from '$lib/i18n'
	import { tick } from 'svelte'
	import { Languages } from '$lib/components/ui/icon'
	import {
		languageNamesDe,
		languageNamesEn,
		languageNamesFr,
		languageNamesPl
	} from '$paraglide/messages'

	type Variant = VariantProps<typeof buttonVariants>['variant']
	type Props = {
		variant?: Variant
		label?: boolean
		class?: string | undefined | null
	}

	let { variant = 'ghost', label = false, class: CLASS }: Props = $props()
	let open = $state(false)

	//TODO: prznieść closeAndFocusTrigger do pliku z funkcjami pomocniczymi
	function closeAndFocusTrigger(triggerId: string) {
		open = false
		tick().then(() => {
			document.getElementById(triggerId)?.focus()
		})
	}

	// FIXME: languageNames wywołany z i18n nie zmienia języka na stronie
	const languageNames: Record<(typeof availableLanguageTags)[number], string> = {
		de: languageNamesDe(),
		en: languageNamesEn(),
		fr: languageNamesFr(),
		pl: languageNamesPl()
	}
	const languageFlags: Record<(typeof availableLanguageTags)[number], string> = {
		de: 'flag-germany.webp',
		en: 'flag-united-kingdom.webp',
		fr: 'flag-france.webp',
		pl: 'flag-poland.webp'
	}

	// FIXME: languages też nie zmieniają języka na stronie
	const languages = availableLanguageTags.map((tag) => ({
		value: tag,
		label: languageNames[tag],
		flag: languageFlags[tag]
	}))
</script>

<Popover bind:open>
	<Trigger asChild let:builder>
		<Button builders={[builder]} {variant} role="combobox" type="button" class="gap-x-1">
			<Languages />
			{#if label}
				{languageNames[languageTag()]} {$page.url.pathname}
			{/if}
		</Button>
	</Trigger>
	<Content class="w-min p-0">
		<Command>
			<Group>
				{#each languages as language}
					<Item
						disabled={languageTag() === `${language.value}` ? true : false}
						value={language.value}
						onSelect={() => {
							open = false
						}}
					>
						<Button
							{variant}
							href={i18n.route($page.url.pathname)}
							hreflang={language.value}
							class="mr-3 flex items-center justify-between gap-2 pl-0"
						>
							<img src="/{language.flag}" alt={language.label} class="h-6 w-6" />
							{language.label}
						</Button>
					</Item>
				{/each}
			</Group>
		</Command>
	</Content>
</Popover>
