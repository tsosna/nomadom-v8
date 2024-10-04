<script lang="ts">
	import { page } from '$app/stores'
	import { languageTag } from '$paraglide/runtime'
	type Breadcrumb = {
		href: string
		text: string
	}

	const breadcrumbs = $page.url.pathname
		.split('/')
		.filter((p) => p !== '')
		.map((p, i, arr) => (i === arr.length - 1 ? p : p + '/'))
</script>

<div class="hidden md:flex md:gap-1 md:text-sm">
	{@render breadcrumb({ href: '/', text: 'home/' })}
	{#each breadcrumbs as text, i}
		{@const href =
			'/' +
			breadcrumbs
				.slice(breadcrumbs[0].replace(/\/$/, '') === languageTag() ? 1 : 0, i + 1)
				.join('')}
		{@render breadcrumb({ href, text })}
	{/each}
</div>

{#snippet breadcrumb({ href, text }: Breadcrumb)}
	<a {href}>{text}</a>
{/snippet}
