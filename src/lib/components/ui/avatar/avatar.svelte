<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui'
	import { cn } from '$lib/utils.js'
	import type { Snippet } from 'svelte'

	type Props = {
		class?: AvatarPrimitive.Props['class']
		delayMs?: AvatarPrimitive.Props['delayMs']
		children?: Snippet
	}

	let { class: className, delayMs, children, ...restProps }: Props = $props()
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</AvatarPrimitive.Root>
