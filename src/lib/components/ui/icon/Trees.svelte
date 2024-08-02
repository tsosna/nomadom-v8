<script lang="ts">
	import Icon from './Icon.svelte'
	let { ...props } = $props()
</script>
<!--  
@component
@name Trees
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
<Icon name="Trees" {...props}>
	<path d="M13 19v3" /><path
		d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
	/>
</Icon>
