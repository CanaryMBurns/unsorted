<script>
	import Nav from '../components/Nav/Nav.svelte';

	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<main class="layout">
	<slot></slot>
</main>