<script lang="ts">
	type Props = {
		breadcrumb: (item: string) => any
    url: string
		text: string
		breadcrumbs: string[]
	}

	let { breadcrumb,url, text, breadcrumbs }: Props = $props()
</script>

