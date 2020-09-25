<script>
import BarChart from './components/BarChart.svelte'
import { bubbleSort, generateArrayRandomly } from './modules/functions.mjs'

// Configuration
const setLength = 10;
const setMinValue = 1;
const setMaxValue = 100;

let set = generateArrayRandomly(setLength, setMinValue, setMaxValue);
bubbleSort(set).then(() => {
	console.log('Nunca máss')
	console.log(set);
	console.log('Nunca máss')
});
</script>

<main class="main">
	<BarChart {set}/>
</main>

<style>
.main {
	width: 100%;
	height: 100%;
	padding: 5%;
}
</style>