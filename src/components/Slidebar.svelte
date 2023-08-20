<script>
	import fly from './transitions.js';
	export let open = false;
</script>

{#if open}
	<div class="drawer" transition:fly={{ x: '100%' }}>
		<center><h1>What Is This?</h1></center>
		<p>
			The talend data fabric has an extensive amount of capabilities embracing many different
			technologies. What you see here are the icons that represent the underlying technologies --
			components -- which you drag and drop onto a canvas and connect them together to form data
			pipelines across many architectural styles: batch, real-time, streaming and event-driven. Data
			pipelines may be constructed in many various modes: data services, routes, big data batch, big
			data streaming or the multitude of <a href="https://camel.apache.org/components/latest/">
				Apache Camel components</a
			>.
		</p>
		<p>
			The gentle reader may ponder the amount of expertise needed with this technology continuum to
			quickly create prototypes and demonstrations for prospects and customers.
		</p>
		<p>
			This visualization distributes the component icons in a sphere hence the name, "component
			world". For more information about the 1000+ components, visit <a
				href="https://awindest.github.io/Component_Tree/"
			>
				Component Tree</a
			>.
		</p>
		<p>Instructions: scroll to zoom; click and drag to rotate.</p>
	</div>
{/if}

<style>
	.drawer {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		padding: 25px;
		height: 100vh;
		width: 400px;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: -2px 0px 6px -1px rgba(0, 0, 0, 0.1);
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(20px);
		overflow: auto;
	}
	div {
		font-size: 20px;
		color: #555353;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
</style>
