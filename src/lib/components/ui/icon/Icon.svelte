<script lang="ts">
	import type { Snippet } from 'svelte'
	import defaultAttributes from './defaultAttributes'
	import { cn } from '$lib/utils.js'

	type Props = {
		color?: string
		size?: number
		strokeWidth?: number
		absoluteStrokeWidth?: boolean
		class?: string | undefined | null

		mail?: Snippet

		children: Snippet
	}
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		absoluteStrokeWidth = false,
		class: CLASS,
		children
	}: Props = $props()
</script>

<!-- 
@component
@name Icon
### @render
 - children: Snippet
### Props
 - name: string
 - color: string = 'currentColor' - is the color of the stroke (format hexadecimal color e.g. #56850e)
 - size: number = 24 - is the width and height of the svg
 - strokeWidth: number = 2 - is the thickness of the stroke
 - absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
 - CLASS: string (tailwindcss color format e.g. text-blue-500)
 - children: Snippet
 -->

<svg
	{...defaultAttributes}
	width={size}
	height={size}
	stroke={color}
	stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={cn(`w-24 h-24`, CLASS)}
>
	{@render children()}
</svg>
