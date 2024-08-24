<script lang="ts">
    import type { PageData } from './$types';
    import { projects }  from '$paraglide/messages.js';
    
    export let data: PageData;
</script>

<h1>{projects()} Page</h1>
