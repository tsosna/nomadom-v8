<script lang="ts">
	import type { Snippet } from 'svelte'
	import { cn } from '@/utils'
	import type { MouseEventHandler, FocusEventHandler } from 'svelte/elements'
	import defaultAttributes from './defaultAttributes'

	type Props = {
		color?: string
		size?: number
		strokeWidth?: number
		absoluteStrokeWidth?: boolean
		class?: string | undefined | null
		onclick?: MouseEventHandler<SVGSVGElement>
		onfocus?: FocusEventHandler<SVGSVGElement>
		onmouseenter?: MouseEventHandler<SVGSVGElement>
		onmouseleave?: MouseEventHandler<SVGSVGElement>
		children: Snippet
	}

	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		absoluteStrokeWidth = false,
		class: CLASS,
		children,
		onclick,
		onfocus,
		onmouseenter,
		onmouseleave,
		...props
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
	- defaultAttributes: object - Default attributes for the svg element.
		- xmlns: string = 'http://www.w3.org/2000/svg'
		- fill: string = 'none'
		- viewBox: string = '0 0 24 24'
		- stroke: string = 'currentColor'
		- stroke-width: string = '2'
		- stroke-linecap: string = 'round'
		- stroke-linejoin: string = 'round'
 	- color: string = currentColor - is the color of the stroke (format hexadecimal color e.g. #56850e)
 	- size: number = 24 - is the width and height of the svg
 	- strokeWidth: number = 2 - is the thickness of the stroke
 	- absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
	- class: string - Additional class (tailwindCss color format e.g. text-blue-500)
	- onclick: MouseEventHandler<SVGSVGElement> - Click event handler.
	- onfocus: FocusEventHandler<SVGSVGElement> - Focus event handler.
	- onmouseenter: MouseEventHandler<SVGSVGElement> - Mouse enter event handler.
	- onmouseleave: MouseEventHandler<SVGSVGElement> - Mouse leave event handler.
### ...props
	- probably all like a button
	- FIXME: check the above statement
-->

<svg
	{...defaultAttributes}
	width={size}
	height={size}
	stroke={color}
	stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={cn('', CLASS)}
	{...props}
	role="button"
	tabindex="0"
	{onclick}
	{onfocus}
	{onmouseenter}
	{onmouseleave}
>
	{@render children()}
</svg>
