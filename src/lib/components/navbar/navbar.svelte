<script lang="ts">
	import { Theme } from '@/components/ui/theme'
	import { Language } from '@/components/ui/language'
	import { NavSide } from '@/components/navside'
	import { Burger } from '@/components/ui/icon'

	let open = $state(false)
</script>

<section class="flex items-center justify-between">
	<span class="font-accent text-4xl font-semibold"> nomadoM </span>
	<Theme />
	<Language />
	<div class="flex-non 2xl:hidden">
		<Burger bind:open size=32  strokeWidth=8 />
	</div>
</section>
<NavSide {open} />
