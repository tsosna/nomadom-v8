<script lang="ts">
	import Icon from './Icon.svelte'
	let { ...props } = $props()
</script>
<!--  
@component
@name Menu (Hamburger)
## ...props
@description inherits all properties from the Icon component
 - name: string
 - color: string = 'currentColor' - is the color of the stroke (format hexadecimal color e.g. #56850e)
 - size: number = 24 - is the width and height of the svg
 - strokeWidth: number = 2 - is the thickness of the stroke
 - absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
 - CLASS: string (tailwindcss color format e.g. text-blue-500)
 - children: Snippet
-->
<Icon name="Menu" {...props}>
	<line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
		x1="4"
		x2="20"
		y1="18"
		y2="18"
	/>
</Icon>
