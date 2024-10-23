<script lang="ts">
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  type Props = {
    onchange?: () => void
  }
  let { onchange }: Props = $props()
  onchange?.()
</script>
<T.PerspectiveCamera makeDefault>
  <OrbitControls {onchange} />
</T.PerspectiveCamera>