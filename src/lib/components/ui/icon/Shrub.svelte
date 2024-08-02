<script lang="ts">
	import Icon from './Icon.svelte'
	let { ...props } = $props()
</script>
<!--  
@component
@name Shrub
## ...props
@description inherits all properties from the Icon component
 - name: string
 - color: string = 'currentColor' - is the color of the stroke (format hexadecimal color e.g. #56850e)
 - size: number = 24 - is the width and height of the svg
 - strokeWidth: number = 2 - is the thickness of the stroke
 - absoluteStrokeWidth: boolean = false - if true, the stroke width will be the same regardless of the size of the icon
 - classes: string (tailwindcss color format e.g. text-blue-500)
 - children: Snippet
-->
<Icon name="Shrub" {...props}>
	<path d="M12 22v-7l-2-2" /><path
		d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"
	/><path d="m14 14-2 2" />
</Icon>
