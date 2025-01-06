<script lang="ts">
	import { Notchbar } from '@/components/notchbar'
	import type { LayoutData } from './$types'
	import { Tabbar } from '@/components/tabbar'
	import { AppShell } from '@/components/ui/app-shell'
	import type { Snippet } from 'svelte'

	let {
		data,
		children
	}: {
		data: LayoutData
		children: Snippet
	} = $props()

	let src = ['Visualization', 'Plan', 'Interior', 'Elevation', 'Implementation']

	const { slug } = data
</script>

<Notchbar>
	{slug}
</Notchbar>


<AppShell
	class=""
	classPageHeader="text-blue-500 font-extrabold text-xl text-center"
	classPageFooter={`z-10 fixed bottom-0 left-0 w-full     `}
>
	{#snippet pageHeader()}Page Header
	{/snippet}

	{#snippet pageContent()}
		{@render children()}
	{/snippet}
	{#snippet pageFooter()}
		<div class="md:container md:mx-auto">
			<Tabbar {src}>
				{#snippet icon(icon)}
					<img src={`/${icon}.svg`} alt="Visualization icon" />
				{/snippet}
			</Tabbar>
		</div>
	{/snippet}
</AppShell>
