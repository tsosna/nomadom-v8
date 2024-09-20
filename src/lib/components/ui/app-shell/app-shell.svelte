<script lang="ts">
	import type { UIEventHandler } from 'svelte/elements'
	import { cn } from '$lib/utils'

	type Props = {
		header?: any
		sidebarLeft?: any
		pageHeader?: any
		pageContent: any
		pageFooter?: any
		sidebarRight?: any
		footer?: any

		class?: string
		regionPage?: string
		classHeader?: string
		classSidebarLeft?: string
		classSidebarRight?: string
		classPageHeader?: string
		classPageContent?: string
		classPageFooter?: string
		classFooter?: string

		onscroll?: UIEventHandler<HTMLDivElement>

	}

	let {
		header,
		sidebarLeft,
		pageHeader,
		pageContent,
		pageFooter,
		sidebarRight,
		footer,

		class:CLASS,
		regionPage,
		classHeader,
		classSidebarLeft = 'w-auto',
		classSidebarRight = 'w-auto',
		classPageHeader,
		classPageContent,
		classPageFooter,
		classFooter,

		onscroll
	}: Props = $props()

	const cBaseAppShell = 'w-full h-full flex flex-col overflow-hidden'
	const cContentArea = 'w-full h-full flex overflow-hidden'
	const cPage = 'flex-1 overflow-x-hidden overflow-y-auto flex flex-col'
	const cSidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto'
	const cSidebarRight = 'flex-none overflow-x-hidden overflow-y-auto'
	let CLASSSidebarLeft = $state(`${cSidebarLeft} ${classSidebarLeft}`)
	let CLASSSidebarRight = $state(`${cSidebarRight} ${classSidebarRight}`)
</script>

<!-- 
@component
@name AppShell
### @render
 - children: Snippet - the main content of the page
 - header: Snippet - the header of the page
 - sidebarLeft: Snippet - the left sidebar of the page
 - pageHeader: Snippet - the header of the main content of the page
 - pageFooter: Snippet - the footer of the main content of the page
 - sidebarRight: Snippet - the right sidebar of the page
 - footer: Snippet - the footer of the page
### Props
 - header: Snippet
 - sidebarLeft: Snippet
 - pageHeader: Snippet
 - pageFooter: Snippet
 - sidebarRight: Snippet
 - footer: Snippet
 - regionPage: string (tailwindcss format) -  can be extended with additional CLASS the main space of the page, 
 			to which the following CLASS are rigidly assigned: 'flex-1 overflow-x-hidden overflow-y-auto flex flex-col'
 - classHeader: string (tailwindcss format) - You can extend or substitute with additional CLASS the header of the page, 
 			to which the following CLASS are rigidly assigned: 'z-10 flex-none'
 - classSidebarLeft: string (tailwindcss format) - You can extend or substitute with additional CLASS the left sidebar of the page,
	 		to which the following CLASS are rigidly assigned: 'flex-none overflow-x-hidden overflow-y-auto'
 - classSidebarRight: string (tailwindcss format) - You can extend or substitute with additional CLASS the right sidebar of the page,
	 		to which the following CLASS are rigidly assigned: 'flex-none overflow-x-hidden overflow-y-auto'
	- classPageHeader: string (tailwindcss format) - You can extend or substitute with additional CLASS the header of the page, 
	 		to which the following CLASS are rigidly assigned: 'flex-none'
	- classPageContent: string (tailwindcss format) - You can extend or substitute with additional CLASS the content of the page, 
	 		to which the following CLASS are rigidly assigned: 'flex-auto'
	- classPageFooter: string (tailwindcss format) - You can extend or substitute with additional CLASS the footer of the page, 
	 		to which the following CLASS are rigidly assigned: 'flex-none'
	- classFooter: string (tailwindcss format) - You can extend or substitute with additional CLASS the footer of the page, 
	 		to which the following CLASS are rigidly assigned: 'flex-none'
 - CLASS: string (tailwindcss format e.g. text-blue-500)
 - children: Snippet
 -->

<div id="appShell" class={cn(cBaseAppShell, CLASS)} data-testid="app-shell">
	<!-- Slot: Header -->
	{#if header}
		<header id="shell-header" class={cn('z-10 flex-none', classHeader)}>
			{@render header()}
		</header>
	{/if}

	<!-- Content Area -->
	<div class="flex-auto {cContentArea}">
		<!-- Slot: Sidebar (left) -->
		{#if sidebarLeft}
			<aside id="sidebar-left" class={classSidebarLeft}>
				{@render sidebarLeft()}
			</aside>
		{/if}

		<!-- Page -->
		<div id="page" class="{regionPage} {cPage}" {onscroll}>
			<!-- Slot: Page Header -->
			{#if pageHeader}
				<header id="page-header" class={cn('flex-none', classPageHeader)}>
					{@render pageHeader()}
				</header>
			{/if}

			<!-- Slot: Page Content (default) -->
			<main id="page-content" class={cn('flex-auto', classPageContent)}>
				{#if pageContent}
					{@render pageContent()}
				{/if}
			</main>

			<!-- Slot: Page Footer -->
			{#if pageFooter}
				<footer id="page-footer" class={cn('flex-none', classPageFooter)}>
					{@render pageFooter()}
				</footer>
			{/if}
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if sidebarRight}
			<aside id="sidebar-right" class={classSidebarRight}>
				{@render sidebarRight()}
			</aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if footer}
		<footer id="shell-footer" class={cn('flex-none', classFooter)}>
			{@render footer()}
		</footer>
	{/if}
</div>
