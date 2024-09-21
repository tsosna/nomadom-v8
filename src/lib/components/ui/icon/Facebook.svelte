<script lang="ts">
	import type { Snippet } from 'svelte'
	import Icon from './Icon.svelte'

	type Props = {
		children?: Snippet
	}
	let {  children, ...props }: Props = $props()
</script>
<!--  
@component
@name Facebook
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
	<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
</Icon>
{#if children}
	{@render children()}
{/if}