<script lang="ts">
	import Icon from './Icon.svelte'
	let {...props } = $props()
</script>
<!--  
@component
@name X
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

<Icon name="X" {...props}>
	<path d="M18 6 6 18" /><path d="m6 6 12 12" />
</Icon>

