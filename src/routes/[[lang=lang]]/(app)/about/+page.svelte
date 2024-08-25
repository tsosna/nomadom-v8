<script lang="ts">
  import { goto } from '$app/navigation'
  import { i18n } from '$lib/i18n'
  import {home} from '@/paraglide/messages'
	import { base } from '$app/paths'


</script>

<h1>
  About Page
</h1>

<button onclick={() => goto(i18n.resolveRoute(base + '/'))}>{home()}</button>
