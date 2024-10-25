<script lang="ts">
  import { TextureLoader } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
import { useLoader } from '@threlte/core'
  import { T } from '@threlte/core'
  import { Grid, OrbitControls } from '@threlte/extras'


  const texture = useLoader(TextureLoader).load('https://res.cloudinary.com/tomasz-sosi-ski/image/upload/v1713008176/nomado_M_CLARO_domy_modulowe_czesc_dzienna_2_858b1624d4.webp')

</script>

<T.PerspectiveCamera
  makeDefault
  position={[-1000, -600, -600]}
  rotation={[100, 0, 0]}
  fov={25}

  
>
  <OrbitControls
  autoRotate
  enableZoom={true}
  autoRotateSpeed={0.8}
  target.={5.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>
<T.AmbientLight intensity={1} />

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<!-- <ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/> -->





{#await texture then value}
<T.TextureLoader >
  
  <T.Mesh position={[0, 0, 0]}
  >
    <T.SphereGeometry args={[550, 100, 100]} />
    <T.MeshStandardMaterial map={value} />
  </T.Mesh>
</T.TextureLoader>

<!-- Here, "texture" is acting like a regular promise -->
{/await}

