<script lang="ts">
	import Icon from './Icon.svelte'
	let { ...props } = $props()
</script>
<!--  
@component
@name Mail
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
<Icon name="Mail" {...props}>
	<rect width="20" height="16" x="2" y="4" rx="2" /><path
		d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
	/>
</Icon>
