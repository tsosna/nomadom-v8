<script lang="ts">
	import type { Snippet } from 'svelte'
	import { cn } from '@/utils'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { i18n } from '@/i18n'
	type Props = {
		class?: string
		children: Snippet
	}

	let { class: CLASS, children }: Props = $props()
</script>

<div
	class="sticky left-1/2 top-0 z-10 flex max-w-min -translate-x-1/2 items-center justify-center rounded-b-lg border border-nomadom px-2 md:hidden"
>
	<button
		onclick={() => goto(i18n.resolveRoute(base + '/about'))}
		class={cn(
			'capitalize text-primary underline decoration-nomadom underline-offset-1 hover:text-nomadom',
			CLASS
		)}
	>
		{@render children()}</button
	>
</div>
