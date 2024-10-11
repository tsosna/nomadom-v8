<script lang="ts">
	import { Tabbar } from '@/components/tabbar'
	import { AppShell } from '@/components/ui/app-shell'
	import type { Snippet } from 'svelte'

	// import type { LayoutData } from './$types';

	// export let data: LayoutData;

	let {
		children
	}: {
		children: Snippet
	} = $props()

	let src = ['Visualization', 'Plan', 'Interior', 'Elevation', 'Implementation']
</script>

<AppShell
	class=""
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classPageFooter="z-10  fixed bottom-0 w-full px-1 md:px-0"
>
	{#snippet pageHeader()}Page Header
	{/snippet}

	{#snippet pageContent()}
		{@render children()}
	{/snippet}
	{#snippet pageFooter()}
		<Tabbar {src}>
			{#snippet icon(icon)}
				<img src={`/${icon}.svg`} alt="Visualization icon" />
			{/snippet}
		</Tabbar>
	{/snippet}
</AppShell>
