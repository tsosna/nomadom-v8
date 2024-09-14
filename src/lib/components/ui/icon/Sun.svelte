<script lang="ts">
	import Icon from './Icon.svelte'
	let { ...props } = $props()
</script>
<!--  
@component
@name Sun
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
<Icon name="Sun" {...props}>
	<circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
		d="m4.93 4.93 1.41 1.41"
	/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
		d="m6.34 17.66-1.41 1.41"
	/><path d="m19.07 4.93-1.41 1.41" />
</Icon>
