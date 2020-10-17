<script>
import BarChart from '../BarChart/BarChart.svelte'
import Chronometer from '../Chronometer/Chronometer.svelte'
import { generateArrayRandomly } from '../../modules/functions.mjs'

// Configuration
const setLength = 15;
const setMinValue = 1;
const setMaxValue = 100;
const delay = 100;

let set = generateArrayRandomly(setLength, setMinValue, setMaxValue);
radixSort()

// Radix sort
function radixSort() {
   const maxNum = Math.max.apply(Math, set.map(function(o) { return o.value; })) * 10;
   let divisor = 10;
   while (divisor < maxNum) {
      let buckets = [...Array(10)].map(() => []);
      for (let num of set) {
        console.log(buckets);
        console.log(set);
        console.log(buckets[Math.floor((num % divisor) / (divisor / 10))]);
        buckets[Math.floor((num % divisor) / (divisor / 10))].push(num.value);
      }
      set = [].concat.apply([], buckets);
      divisor *= 10;
   }
}
</script>

<main class="main">
  <Chronometer/>
	<BarChart {set}/>
</main>

<style>
.main {
	width: 100%;
	height: 100%;
	padding: 5%;
}
</style>