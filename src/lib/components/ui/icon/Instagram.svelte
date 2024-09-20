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
@name Instagram
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
	<rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
		d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
	/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
</Icon>
{@render children()}