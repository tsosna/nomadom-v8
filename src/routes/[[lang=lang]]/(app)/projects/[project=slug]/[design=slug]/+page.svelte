<script lang="ts">
	import { Breadcrumb } from '@/components/ui/breadcrumb'
	import type { PageData } from '../$types'

	type Props = { data: PageData }

	let { data }: Props = $props()
	const { slug } = data
</script>

<Breadcrumb />

<h1>Page Visualization {slug}</h1>
