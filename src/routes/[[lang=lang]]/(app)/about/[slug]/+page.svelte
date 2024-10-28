<script lang="ts">
	import type { PageData } from './$types'
	import { teams } from '@/api/team'
	import { Avatar } from '@/components/ui/avatar'

	export let data: PageData
</script>

<h1>About TEAM</h1>

{#each teams as { src, href, fallback }, i}
	<Avatar></Avatar>
{/each}
