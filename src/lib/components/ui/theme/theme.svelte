<script lang="ts">
	import { page } from '$app/stores'

	import type { VariantProps } from 'tailwind-variants'

	import { Button, type buttonVariants } from '@/components/ui/button'
	import { Command, Group, Item } from '@/components/ui/command'
	import { Content, Popover, Trigger } from '@/components/ui/popover'
	import { Sun, Moon } from '$lib/components/ui/icon'


	type Variant = VariantProps<typeof buttonVariants>['variant']
	type Props = {
		variant?: Variant
		label?: boolean
	}
	let { variant = 'ghost', label = false }: Props = $props()
	let open = $state(false)

	const Icon: {
		[key: string]: __sveltets_2_IsomorphicComponent<
			Record<string, unknown>,
			{ [evt: string]: CustomEvent<any> },
			{},
			{},
			''
		>
	} = { Sun, Moon }
	const availableThemesTags = ['Sun', 'Moon']
	let preferTheme = $state({
		icon: Icon[$page.data.theme as keyof typeof Icon],
		tag: $page.data.theme
	})
	$effect(() => {
		localStorage.setItem('theme', preferTheme.tag)
		document.documentElement.setAttribute('class', preferTheme.tag)
	})
</script>

{preferTheme.tag}

<Popover bind:open>
	<Trigger asChild let:builder>
		<Button {variant} builders={[builder]} class="gap-x-1">
			<svelte:component this={preferTheme.icon} />
			{#if label}
				{preferTheme.tag}
			{/if}</Button
		></Trigger
	>
	<Content>
		<Command>
			<Group>
				{#each availableThemesTags as themeTag}
					<Item
						value={themeTag}
						onSelect={() => {
							preferTheme.icon = Icon[themeTag]
							preferTheme.tag = themeTag
							open = false
						}}
						disabled={preferTheme.icon === Icon[themeTag] ? true : false}
						class="cursor-pointer"
					>
						<svelte:component this={Icon[themeTag]} />
					</Item>
				{/each}
			</Group>
		</Command>
	</Content>
</Popover>
