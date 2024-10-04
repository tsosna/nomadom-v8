<script lang="ts">
	import { cn } from '@/utils'
	import type { MouseEventHandler, FocusEventHandler } from 'svelte/elements'
	import defaultAttributes from './defaultAttributes'

	type Props = {
		color?: string
		size?: string | number
		strokeWidth?: string | number
		absoluteStrokeWidth?: boolean
		class?: string | undefined | null
		onclick?: MouseEventHandler<SVGSVGElement>
		onfocus?: FocusEventHandler<SVGSVGElement>
		onmouseenter?: MouseEventHandler<SVGSVGElement>
		onmouseleave?: MouseEventHandler<SVGSVGElement>
		open: boolean
	}
	let {
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		absoluteStrokeWidth = false,
		class: CLASS,
		onclick,
		onfocus,
		onmouseenter,
		onmouseleave,
		open = $bindable(),
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
<label class:open aria-label="toggle menu">
	<input type="checkbox" hidden bind:checked={open} />
	<svg
		{...defaultAttributes}
		viewBox={'0 0 100 100'}
		width={size}
		height={size}
		stroke={color}
		stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
		class={cn('w-full', CLASS)}
		{...props}
		role="button"
		tabindex="0"
		{onclick}
		{onfocus}
		{onmouseenter}
		{onmouseleave}
	>
		<path
			class="line line1"
			d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
		/>
		<path class="line line2" d="M 20,50 H 80" />
		<path
			class="line line3"
			d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
		/>
	</svg>
</label>

<style lang="postcss">
	input {
		display: none;
	}

	.line {
		transition:
			stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 {
		stroke-dasharray: 60 207;
	}
	.line2 {
		stroke-dasharray: 60 60;
	}
	.line3 {
		stroke-dasharray: 60 207;
	}

	.open svg {
		.line1 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
		}
		.line2 {
			stroke-dasharray: 1 60;
			stroke-dashoffset: -30;
		}
		.line3 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
		}
	}
</style>
