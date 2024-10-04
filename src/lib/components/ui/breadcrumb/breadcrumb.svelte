<script lang="ts">
	import { page } from "$app/stores"

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
		{@const href = '/' + breadcrumbs.slice(1, i + 1).join('')}
		{@render breadcrumb({ href, text })}
	{/each}
</div>

{#snippet breadcrumb({ href, text }: Breadcrumb)}
	<a {href}>{text}</a>
{/snippet}