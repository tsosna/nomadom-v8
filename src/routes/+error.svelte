<script lang="ts">
	import { page } from '$app/stores'
	import { previousPage } from '$paraglide/messages.js'
</script>

<svelte:head><title>{$page.status}</title></svelte:head>

<div class="error">
	<h2>
		{$page.status}
		{@html $page.error?.message}
		{$page.error?.errorId || ''}
		<a href={$page.url.toString()}>
			{previousPage().toUpperCase()}
		</a>
	</h2>
</div>

<style>
	.error {
		display: grid;
		place-content: center;
		width: min-content;
		margin: 0 auto;
	}
</style>
