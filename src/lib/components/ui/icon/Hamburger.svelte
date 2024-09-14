<script lang="ts">
	import Icon from './Iconn.svelte'
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
<Icon {...props}>
	<label for="">

		<svg>
			<path
			class="line line1"
			d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
			/>
			<path class="line line2" d="M 20,50 H 80" />
			<path
			class="line line3"
			d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
			/>
		</svg>
	</label>
</Icon>

<style lang="postcss">
	.line {
		transition:
			stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 {
		stroke-dasharray: 60 207;
	}
	.line2 {
		stroke-dasharray: 60 60;
	}
	.line3 {
		stroke-dasharray: 60 207;
	}

	svg:hover {
		.line1 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
		}
		.line2 {
			stroke-dasharray: 1 60;
			stroke-dashoffset: -30;
		}
		.line3 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
		}
	}
	
</style>
