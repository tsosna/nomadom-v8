<script lang="ts">
	import { Theme } from '@/components/ui/theme'
	import { Language } from '@/components/ui/language'
	import { NavSide } from '@/components/navside'
	import { Burger } from '@/components/ui/icon'
	import { LogoTitle } from '@/components/ui/icon'
	import { getOpenNavSideState } from '@/state/app-shell.svelte'

	const openNavSide = getOpenNavSideState()
	
	let open = $state(false)
	let innerWidth = $state(0)
	
	$effect(()=>{
		openNavSide.toggleNavSide(open)
	})
</script>

<svelte:window bind:innerWidth />

<section class="flex items-center justify-between">
	<LogoTitle
		color="white"
		colorAccent="black"
		size={`${innerWidth < 768 ? 96 : 128}`}
		class="max-h-10 "
	/>
	<Theme />
	<Language />
	<div class="flex-non md:hidden ">
		<Burger bind:open size="40" strokeWidth="8" />
	</div>
</section>
<NavSide {open}/>
