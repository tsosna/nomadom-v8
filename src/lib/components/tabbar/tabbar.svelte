<script lang="ts">
	import { goto } from '$app/navigation'
	import { i18n } from '$lib/i18n'
	import { base } from '$app/paths'
	import Button from '../ui/button/button.svelte'

	let { icon, text, src } = $props()

</script>

<section class="flex items-center justify-between">
	{#each src as item}
		<Button variant="nomadom" onclick={() => goto(i18n.resolveRoute(base + '/'))} size="icon">
			{@render icon(item)}
		</Button>
	{/each}
</section>
