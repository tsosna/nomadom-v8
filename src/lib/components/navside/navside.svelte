<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { i18n } from '@/i18n'

	import { HeartHandshake, Home, Mail } from '@/components/ui/icon'
	import { modules, projects, about, socials, contact } from '@/paraglide/messages'

	let { open = $bindable() }: { open: boolean } = $props()
</script>

{#if open}
	<section class="flex justify-end opacity-95 z-50">
		<nav
			transition:fly={{ duration: 500, x: 500, opacity: 15, easing: quintOut }}
			class="fixed flex h-screen w-3/4 flex-col items-start gap-2 border-l border-nomadom bg-nomadom p-4 shadow-lg sm:max-w-sm"
		>
			<div class=" divider divider-nomadom w-full text-center font-bold uppercase">
				<Home>{modules()}</Home>
			</div>
			<button onclick={() => goto(i18n.resolveRoute(base + '/about'))} class="text-left">
				{about()}</button
			>
			<button onclick={() => goto(i18n.resolveRoute(base + '/projects'))}> {projects()}</button>
			<div class=" divider divider-nomadom w-full text-center font-bold uppercase">
				<HeartHandshake>{socials()}</HeartHandshake>
			</div>
			<div class=" divider divider-nomadom w-full text-center font-bold uppercase">
				<Mail>{contact()}</Mail>
			</div>
		</nav>
	</section>
{/if}
