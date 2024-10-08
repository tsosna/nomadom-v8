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
		gray: `text-muted-foreground`,
		warning: `text-warning-background`,
		error: `text-destructive`,
		success: `text-success`
	}

	const variantCallToActionObj = {
		gray: `hover:text-muted-foreground text-primary decoration-muted-foreground`,
		warning: `hover:text-warning text-primary decoration-warning`,
		error: `hover:text-destructive text-primary decoration-destructive`,
		success: `hover:text-success text-primary decoration-success`
	}

	const variantLabelObj = {
		gray: `text-muted-foreground`,
		warning: `text-warning-background `,
		error: `text-destructive`,
		success: `text-success`
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
			<p class="text-sm font-jetbrains font-normal {labelClass}">
				{label}
			</p>
		{:else if typeof label === 'function'}
			<p class="text-sm font-jetbrains font-normal text-gra {labelClass}">
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
					class="rounded-xs my-[-1px] h-6 cursor-pointer border-none bg-transparent px-0 py-1 font-medium capitalize underline underline-offset-[2px] outline-none {callToActionClass}"
				>
					{callToAction.label}
				</button>
			</div>
		{/if}
	{/if}
{/snippet}

<div class="w-full">
	<aside
		class=" z-30 flex min-h-[40px] w-full translate-y-[-1px] items-center justify-center gap-x-2 border-b border-t py-2 text-[14px] leading-5 font-jetbrains {asideClass} "
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
