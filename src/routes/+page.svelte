<script>
  import { Canvas } from '@threlte/core'
  import Scene from '../components/Scene.svelte'
  import IndestLabs from '../components/IndestLabs.svelte'
</script>

<div class="wrapper">
	<Canvas linear flat>
		<Scene />
	</Canvas>
</div>
<IndestLabs />

<style>
	.wrapper {
		position: fixed;
		inset: 0; /* shorthand for top, right, bottom and left props */
		background-color: #e2e8f0; /* nice color that doesn't get in the way */
	}
</style>
