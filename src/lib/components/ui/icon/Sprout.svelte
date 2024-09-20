<script lang="ts">
	import type { Snippet } from 'svelte'
	import Icon from './Icon.svelte'

	type Props = {
		children: Snippet
	}
	let {  children, ...props }: Props = $props()
</script>
<!--  
@component
@name Sprout
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
	<path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" /><path
		d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
	/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
</Icon>
{@render children()}