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
	class=
		'sticky left-1/2 top-0 z-10 lg:hidden flex max-w-min -translate-x-1/2 items-center justify-center rounded-b-lg border border-nomadom px-2  ' 
>

<button onclick={() => goto(i18n.resolveRoute(base + children()))} class={cn('hover:text-nomadom text-primary decoration-nomadom underline underline-offset-1 capitalize',
  CLASS
)}>
  {@render children()}</button
>

</div>
