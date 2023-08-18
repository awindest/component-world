<script>
	import { PerspectiveCamera, OrbitControls } from "@threlte/core";
  import ImagesInstancedMesh from "./ImagesInstancedMesh.svelte";

  const numAtlasColumns = 64 // this parameter is driven by the sprite sheet
  const numImgs = numAtlasColumns ** 2

  // Generate position of each instance
  const positions = new Float32Array(numImgs * 3)

  for (let i = 0; i < numImgs; i++) {
    const R = 9 // original value = 9 
    const phi = Math.random() * 2 * Math.PI
    const costheta = (Math.random() - 0.5) * 2
    const u = Math.random()

    const theta = Math.acos(costheta)
    const r = R * Math.cbrt(u) + 2

    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)
    const z = r * Math.cos(theta)

		positions.set([x, y, z], i * 3);
	}
</script>

<PerspectiveCamera position={{ x: 0, y: 0, z: 30 }}>
	<OrbitControls enableDamping />
</PerspectiveCamera>

<ImagesInstancedMesh
  atlasPath={"componentAtlas.png"}
  {numAtlasColumns}
  {positions}
  doubleSide
  magFilter={false}
/>
