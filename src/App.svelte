<script>
import BarChart from './components/BarChart.svelte'

// Configuration
let set = [1, 2, 3];
</script>

<main class="main">
	<BarChart {set}/>
</main>

<style>
.main {
	width: 100%;
	height: 100%;
}
</style>