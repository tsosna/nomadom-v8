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
@name RotateCw
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
	<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" />
</Icon>
{#if children}
	{@render children()}
{/if}