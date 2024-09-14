<script lang="ts">
	import Icon from './Icon.svelte'

	let { ...props } = $props()
</script>
<!--  
@component
@name Languages
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
<Icon name="Languages" {...props}>
	<path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path
		d="m22 22-5-10-5 10"
	/><path d="M14 18h6" />
</Icon>
