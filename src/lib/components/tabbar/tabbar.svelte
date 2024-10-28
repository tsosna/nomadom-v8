<script lang="ts">
	import { goto } from '$app/navigation'
	import { i18n } from '$lib/i18n'
	import { base } from '$app/paths'
	import Button from '../ui/button/button.svelte'
	import type { Snippet } from 'svelte'

	type Props = {
		icon: (item: string) => any
		src: string[]
	}

	let { icon, src }: Props = $props()
</script>

<section class="flex items-center justify-between bg-nomadom md:container md:mx-auto lg:hidden">
	{#each src as item}
		<Button
			variant="nomadom"
			onclick={() => goto(i18n.resolveRoute(base + '/'))}
			size="icon"
			class="p-0.5 "
		>
			{@render icon(item)}
		</Button>
	{/each}
</section>
