<script lang="ts">
	import { page } from '$app/stores'
	import { CldImage } from 'svelte-cloudinary'
	import { cn } from '$lib/utils'

	type EnumIMGSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

	const sizeIMGSchema: { [key: string]: number } = {
		xs: 320,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		'2xl': 1536,
		'3xl': 1920,
		'4xl': 2176,
		'5xl': 2432
	}

	type Props = {
		class?: string | undefined | null
		size?: EnumIMGSize
		src: string
		alt?: string | undefined | null
	}

	let { class: CLASS, size = 'md', src, alt, ...props }: Props = $props()

	const {
		data: { isMobile }
	} = $page

	let innerWidth = $state(0)

</script>

<svelte:window bind:innerWidth />

<CldImage
	class={cn('object-cover', CLASS)}
	{src}
	{alt}
	width={isMobile ? innerWidth : Math.floor(sizeIMGSchema[size])}
	height={Math.floor(sizeIMGSchema[size] / 1.8181818182)}
	crop="auto"
	quality="auto"
	fetchpriority="high"
	loading="lazy"
	format="auto"
	background="rgb:666"
	overlays={[
		{
			publicId: 'default/Aero_Vector_Art_No_Signal_TV_2560x1600_f979b5a75f',
			width: Math.floor(sizeIMGSchema[size] / 10),
			crop: 'auto',
			position: {
				x: 10,
				y: 10,
				gravity: 'north_east'
			},
			appliedEffects: [
				{
					multiply: true
				}
			],
			effects: [
				{
					opacity: 100
				}
			]
		},
		{
			crop: 'fit',
			position: {
				x: 0,
				y: 100,
				gravity: 'center'
			},
			text: {
				color: 'rgb:36a834',
				fontFamily: 'Source Sans Pro',
				fontSize: Math.floor(sizeIMGSchema[size] / 30),
				fontWeight: 'bold',

				letterSpacing: Math.floor(sizeIMGSchema[size] / 50),
				text: 'nomadoM'
			},
			effects: [
				{
					opacity: 40
				}
			]
		}
	]}
	sizes="100vw"
	version="1633660000"
	layout="constrained"
	{...props}
/>

<!-- auto, crop, fill, lfill, fill_pad, thumb -->
