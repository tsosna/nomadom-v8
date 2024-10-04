<script lang="ts">
	import type { VariantProps } from 'tailwind-variants'
	import { page } from '$app/stores'

	import { Button, type buttonVariants } from '@/components/ui/button'
	import { Command, Group, Item } from '@/components/ui/command'
	import { Content, Popover, Trigger } from '@/components/ui/popover'
	import { themeState } from './theme-state.svelte'
	import { setCookie } from '@/utils'

	type Variant = VariantProps<typeof buttonVariants>['variant']
	type Props = {
		variant?: Variant
		label?: boolean
	}
	let { variant = 'ghost', label = false }: Props = $props()
	let open = $state(false)
	let theme: keyof typeof themeState.Icon = $state($page.data.theme)

	$effect(() => {
		setCookie('theme', themeState.preferTheme.tag)
		theme = themeState.preferTheme.tag
	})
</script>

<Popover bind:open>
	<Trigger asChild let:builder>
		<Button {variant} builders={[builder]} role="combobox" type="button" class="gap-x-1">
			<svelte:component this={themeState.Icon[theme]} />
			{#if label}
				<span class="w-16">
					{themeState.preferTheme.tag}
				</span>
			{/if}
		</Button>
	</Trigger>
	<Content class="flex w-min p-0.5">
		<Command>
			<Group>
				{#each themeState.availableThemesTags as themeTag}
					<!-- TODO: lines in onSelect look ugly and are to be moved to a separate function	-->
					<Item
						value={themeTag}
						onSelect={() => {
							themeState.preferTheme.icon = themeState.Icon[themeTag]
							themeState.preferTheme.tag = themeTag
							document.documentElement.setAttribute('class', themeState.preferTheme.tag)
							localStorage.setItem('theme', themeState.preferTheme.tag)
							open = false
						}}
						disabled={themeState.preferTheme.icon === themeState.Icon[themeTag] ? true : false}
						class="cursor-pointer"
					>
						<div class="flex w-max gap-2">
							<svelte:component this={themeState.Icon[themeTag]} />
							{#if label}
								{themeTag}
							{/if}
						</div>
					</Item>
				{/each}
			</Group>
		</Command>
	</Content>
</Popover>
