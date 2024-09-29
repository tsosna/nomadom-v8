<script lang="ts">
	import type { VariantProps } from 'tailwind-variants'

	import { Button, type buttonVariants } from '@/components/ui/button'
	import { Command, Group, Item } from '@/components/ui/command'
	import { Content, Popover, Trigger } from '@/components/ui/popover'
	import { Sun, Moon } from '@/components/ui/icon'
	import { themeState } from './theme-state.svelte'
	import { setCookie } from '@/utils'


	type Variant = VariantProps<typeof buttonVariants>['variant']
	type Props = {
		variant?: Variant
		label?: boolean
	}
	let { variant = 'ghost', label = false }: Props = $props()
	let open = $state(false)

	const Icon = { Sun, Moon }

	$effect(() => {
		setCookie('theme', themeState.preferTheme.tag, 7)
	})

</script>

<Popover bind:open>
	<Trigger asChild let:builder>
		<!-- TODO: do poprawy inicializacja ikony - teraz przy ciemnym motywie ikona 
		 jest biała -->
		<Button {variant} builders={[builder]} role="combobox" type="button" class="gap-x-1">
			<svelte:component this={themeState.preferTheme.icon} />
			{#if label}
				{themeState.preferTheme.tag}
			{/if}</Button
		></Trigger
	>
	<Content class="p-0.5 w-12">
		<Command>
			<Group>
				{#each themeState.availableThemesTags as themeTag}
					<!-- FIXME: linie w onSelect brzytko wyglądają i są 
							do przeniesienia do osobnej funkcji	-->
					<Item
						value={themeTag}
						onSelect={() => {
							themeState.preferTheme.icon = Icon[themeTag]
							themeState.preferTheme.tag = themeTag
							document.documentElement.setAttribute('class', themeState.preferTheme.tag)
							localStorage.setItem('theme', themeState.preferTheme.tag)
							open = false
						}}
						disabled={themeState.preferTheme.icon === Icon[themeTag] ? true : false}
						class="cursor-pointer "
					>
						<svelte:component this={Icon[themeTag]} />
					</Item>
				{/each}
			</Group>
		</Command>
	</Content>
</Popover>
