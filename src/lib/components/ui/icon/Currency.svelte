<script lang="ts">
	import type { Snippet } from 'svelte'
	import Icon from './Icon.svelte'

	type Props = {
		children?: Snippet
	}
	let { children, ...props }: Props = $props()
</script>

<!--  
@component
@name Currency
## ...props
@description inherits all properties from the Icon component
 - color: string = 'currentColor' - is the color of the stroke (format hexadecimal color e.g. #56850e)
 - size: number = 24 - is the width and height of the svg
 - strokeWidth: number = 2 - is the thickness of the stroke
 - absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
 - class: string (tailwindcss color format e.g. text-blue-500)
 - children: Snippet
-->
<Icon {...props}>
	<circle cx="12" cy="12" r="8" />
	<line x1="3" x2="6" y1="3" y2="6" />
	<line x1="21" x2="18" y1="3" y2="6" />
	<line x1="3" x2="6" y1="21" y2="18" />
	<line x1="21" x2="18" y1="21" y2="18" />
</Icon>
{#if children}
	{@render children()}
{/if}
