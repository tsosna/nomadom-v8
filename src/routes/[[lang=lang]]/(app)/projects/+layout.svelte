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

	let src = [
		 'Visualization' ,
		 'Plan' ,
		 'Interior' ,
		 'Elevation',
		 "Implementation"
	]
</script>

<AppShell
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classPageFooter="md:hidden "
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