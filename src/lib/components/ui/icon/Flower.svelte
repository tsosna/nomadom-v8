<script lang="ts">
	import Icon from './Icon.svelte'

	let { ...props } = $props()
</script>
<!--  
@component
@name Flower
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
<Icon name="Flower" {...props}>
	<path
		d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"
	/><circle cx="12" cy="12" r="3" /><path d="m8 16 1.5-1.5" /><path d="M14.5 9.5 16 8" /><path
		d="m8 8 1.5 1.5"
	/><path d="M14.5 14.5 16 16" />
</Icon>
