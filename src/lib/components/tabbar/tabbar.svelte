<script lang="ts">
	import { goto } from '$app/navigation'
	import { i18n } from '$lib/i18n'
	import { base } from '$app/paths'
	import Button from '../ui/button/button.svelte'

	type Props = {
		icon: (item: string) => any
		text?: string
		src: string[]
	}

	let { icon, text, src }: Props = $props()
</script>

<section class="flex items-center justify-between">
	{#each src as item}
		<Button variant="nomadom" onclick={() => goto(i18n.resolveRoute(base + '/'))} size="icon">
			{@render icon(item)} {text}
		</Button>
	{/each}
</section>
