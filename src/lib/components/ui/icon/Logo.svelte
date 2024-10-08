<script lang="ts">
	import type { Snippet } from 'svelte'
	import defaultAttributes from './defaultAttributes'

	import { cn } from '$lib/utils.js'

	type Props = {
		class?: string | undefined | null
		color?: '#34A836' | 'white' | 'black' | 'none'
		strokeWidth?: string
		size?: string
		absoluteStrokeWidth?: boolean

		children?: Snippet
	}
	let {
		class: CLASS,
		color = 'none',
		strokeWidth = '4',
		size = '24',
		absoluteStrokeWidth = false,

		children
	}: Props = $props()
</script>

<!-- 
@component
@name Logo
@description
	Icon component for the Nomadom logo.
@variants
	- default
## Controls
	- [Control Documentation](https://1234.org) 
### Props
 	- color: string = currentColor - is the color of the stroke (format hexadecimal color e.g. #56850e)
 	- size: number = 24 - is the width and height of the svg
 	- strokeWidth: number = 2 - is the thickness of the stroke
 	- absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
	- class: string - Additional class (tailwindCss color format e.g. text-blue-500)
-->

<svg
	{...defaultAttributes}
	width={size}
	height={size}
	viewBox="0 0 105 105"
	fill={color}
	stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={cn(`w-full`, CLASS)}
>
	<path
		d="M42.2419 66.6349V0H53.4647L73.8162 36.4569L94.2719 0H104.396V101.331H94.4917V19.9372L76.7897 51.5401L71.3981 51.4359L52.5854 18.9409V66.6349H42.2419Z"
		fill={color}
	/>
	<path
		d="M30.8223 62.9858V34.6265C30.8223 26.1188 23.9081 19.1958 15.4112 19.1958C6.9142 19.1958 0 26.1188 0 34.6265V62.9858C0 64.0701 0.833036 64.6539 1.66607 64.6539C2.49911 64.6539 3.33214 64.0701 3.33214 62.9858V34.6265C3.33214 27.9538 8.74688 22.5322 15.4112 22.5322C22.0755 22.5322 27.4902 27.9538 27.4902 34.6265V62.9858C27.4902 64.0701 28.3232 64.6539 29.1563 64.6539C29.9893 64.6539 30.8223 64.0701 30.8223 62.9858Z"
		fill={color}
	/>
	<path
		d="M42.2419 66.6349V0H53.4647L73.8162 36.4569L94.2719 0H104.396V101.331H94.4917V19.9372L76.7897 51.5401L71.3981 51.4359L52.5854 18.9409V66.6349H42.2419Z"
		stroke={color}
	/>
	<path
		d="M30.8223 62.9858V34.6265C30.8223 26.1188 23.9081 19.1958 15.4112 19.1958C6.9142 19.1958 0 26.1188 0 34.6265V62.9858C0 64.0701 0.833036 64.6539 1.66607 64.6539C2.49911 64.6539 3.33214 64.0701 3.33214 62.9858V34.6265C3.33214 27.9538 8.74688 22.5322 15.4112 22.5322C22.0755 22.5322 27.4902 27.9538 27.4902 34.6265V62.9858C27.4902 64.0701 28.3232 64.6539 29.1563 64.6539C29.9893 64.6539 30.8223 64.0701 30.8223 62.9858Z"
		stroke={color}
	/>
</svg>
{#if children}
	{@render children()}
{/if}
