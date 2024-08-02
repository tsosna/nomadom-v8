<script lang="ts">
	import { cn } from '$lib/utils'

	let className: string | undefined | null = undefined
	export { className as class }
	export let regionPage = ''
	export let classHeader = 'z-10'
	export let classSidebarLeft = 'w-auto'
	export let classSidebarRight = 'w-auto'
	export let classPageHeader = ''
	export let classPageContent = ''
	export let classPageFooter = ''
	export let classFooter = ''
	const cBaseAppShell = 'w-full h-full flex flex-col overflow-hidden'
	const cContentArea = 'w-full h-full flex overflow-hidden'
	const cPage = 'flex-1 overflow-x-hidden overflow-y-auto flex flex-col'
	const cSidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto'
	const cSidebarRight = 'flex-none overflow-x-hidden overflow-y-auto'
	$: classesBase = `${cBaseAppShell} `
	$: classesheader = `${classHeader}`
	$: classesSidebarLeft = `${cSidebarLeft} ${classSidebarLeft}`
	$: classesSidebarRight = `${cSidebarRight} ${classSidebarRight}`
	$: classesPageHeader = `${classPageHeader}`
	$: classesPageContent = `${classPageContent}`
	$: classesPageFooter = `${classPageFooter}`
	$: classesFooter = `${classFooter}`
</script>

<div id="appShell" class={cn(classesBase, className)} data-testid="app-shell">
	<!-- Slot: Header -->
	{#if $$slots.header}
		<header id="shell-header" class="flex-none {classesheader}"><slot name="header" /></header>
	{/if}

	<!-- Content Area -->
	<div class="flex-auto {cContentArea}">
		<!-- Slot: Sidebar (left) -->
		{#if $$slots.sidebarLeft}
			<aside id="sidebar-left" class={classesSidebarLeft}><slot name="sidebarLeft" /></aside>
		{/if}

		<!-- Page -->
		<div id="page" class="{regionPage} {cPage}" on:scroll>
			<!-- Slot: Page Header -->
			{#if $$slots.pageHeader}
				<header id="page-header" class="flex-none {classesPageHeader}">
					<slot name="pageHeader">(slot:header)</slot>
				</header>
			{/if}

			<!-- Slot: Page Content (default) -->
			<main id="page-content" class="flex-auto {classesPageContent}"><slot /></main>

			<!-- Slot: Page Footer -->
			{#if $$slots.pageFooter}
				<footer id="page-footer" class="flex-none {classesPageFooter}">
					<slot name="pageFooter">(slot:footer)</slot>
				</footer>
			{/if}
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if $$slots.sidebarRight}
			<aside id="sidebar-right" class={classesSidebarRight}><slot name="sidebarRight" /></aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if $$slots.footer}
		<footer id="shell-footer" class="flex-none {classesFooter}"><slot name="footer" /></footer>
	{/if}
</div>
