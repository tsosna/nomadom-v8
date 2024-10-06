<script lang="ts">
	import type { Component, Snippet } from 'svelte'

	type propsT = {
		icon?: Component | undefined
		callToAction?:
			| {
					label: string
					href?: string | undefined
					onClick?: () => void | undefined
			  }
			| undefined
		label?: string | Snippet | undefined
		variant?: 'gray' | 'warning' | 'error' | 'success'
	}
	let {
		icon = undefined,
		callToAction = undefined,
		label = undefined,
		variant = 'gray'
	}: propsT = $props()

	const variantAsideObj = {
		gray: `text-kui-light-gray-900 dark:text-kui-dark-gray-900 bg-kui-light-gray-100 
		dark:bg-kui-dark-gray-100 border-kui-light-gray-400 dark:border-kui-dark-gray-400`,
		warning: `text-warning-background font-jetbrains tracking-wider font-normal `,
		error: `text-kui-light-red-900 dark:text-kui-dark-red-900 bg-kui-light-red-100 
		dark:bg-kui-dark-red-100 border-kui-light-red-400 dark:border-kui-dark-red-400`,
		success: `text-kui-light-blue-900 dark:text-kui-dark-blue-900 bg-kui-light-blue-100 
		dark:bg-kui-dark-blue-100 border-kui-light-blue-400 dark:border-kui-dark-blue-400`
	}

	const variantCallToActionObj = {
		gray: `hover:text-kui-light-gray-900 dark:hover:text-kui-dark-gray-900 
		hover:decoration-kui-light-gray-500 dark:hover:decoration-kui-dark-gray-500 
		decoration-kui-light-gray-500 dark:decoration-kui-dark-gray-500 text-kui-light-gray-1000 
		dark:text-kui-dark-gray-1000`,
		warning: `hover:text-warning text-primary underline underline-offset-2 decoration-warning`,
		error: `hover:text-kui-light-red-900 dark:hover:text-kui-dark-red-900 
		hover:decoration-kui-light-red-500 dark:hover:decoration-kui-dark-red-500 
		decoration-kui-light-red-400 dark:decoration-kui-dark-red-400 text-kui-light-red-1000 
		dark:text-kui-dark-red-1000`,
		success: `hover:text-kui-light-blue-900 dark:hover:text-kui-dark-blue-900 
		hover:decoration-kui-light-blue-500 dark:hover:decoration-kui-dark-blue-500 
		decoration-kui-light-blue-400 dark:decoration-kui-dark-blue-400 text-kui-light-blue-1000 
		dark:text-kui-dark-blue-1000`
	}

	const variantLabelObj = {
		gray: `text-kui-light-gray-900 dark:text-kui-dark-gray-900`,
		warning: `text-warning-background font-jetbrains tracking-wider font-normal`,
		error: `text-kui-light-red-900 dark:text-kui-dark-red-900`,
		success: `text-kui-light-blue-900 dark:text-kui-dark-blue-900`
	}

	let asideClass = $derived.by(() => {
		return `${variantAsideObj[variant]}`
	})

	let callToActionClass = $derived.by(() => {
		return `${variantCallToActionObj[variant]}`
	})

	let labelClass = $derived.by(() => {
		return `${variantLabelObj[variant]}`
	})
</script>

<!--Label snippet-->
{#snippet labelSnip()}
	{#if label}
		{#if typeof label === 'string'}
			<p class="text-sm {labelClass}">
				{label}
			</p>
		{:else if typeof label === 'function'}
			<p class="text-sm {labelClass}">
				{@render label()}
			</p>
		{/if}
	{/if}
{/snippet}

<!--Call to action snippet-->
{#snippet callToActionSnip()}
	{#if callToAction}
		{#if callToAction.href}
			<div class="ml-6 md:ml-0">
				<a
					href={callToAction.href}
					class="rounded-xs my-[-1px] h-6 cursor-pointer border-none bg-transparent px-0 py-1 font-medium capitalize underline underline-offset-[5px] outline-none {callToActionClass}"
				>
					{callToAction.label}
				</a>
			</div>
		{:else if callToAction.onClick}
			<div class="ml-6 md:ml-0">
				<button
					onclick={callToAction.onClick}
					class="rounded-xs my-[-1px] h-6 cursor-pointer border-none bg-transparent px-0 py-1 font-medium capitalize underline underline-offset-[5px] outline-none {callToActionClass}"
				>
					{callToAction.label}
				</button>
			</div>
		{/if}
	{/if}
{/snippet}

<div class="w-full">
	<aside
		class=" z-30 flex min-h-[40px] w-full translate-y-[-1px] items-center justify-center gap-x-2 border-b border-t py-2 text-[14px] leading-5 {asideClass} "
	>
		<div class="flex w-full flex-col gap-2 px-6 md:flex-row md:items-center md:justify-center">
			<div class="flex items-center gap-2">
				{#if icon}
					{@const Icon = icon}
					<div class="shrink-0">
						<div class="h-4 w-4">
							<div class="h-4 w-4">
								<Icon />
							</div>
						</div>
					</div>
				{/if}
				{@render labelSnip()}
			</div>
			{@render callToActionSnip()}
		</div>
	</aside>
</div>
