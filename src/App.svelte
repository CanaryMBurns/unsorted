<script>
import BarChart from './components/BarChart.svelte'
import { generateArrayRandomly } from './modules/functions.mjs'

// Configuration
const setLength = 50;
const setMinValue = 1;
const setMaxValue = 100;
const delay = 250;

let set = generateArrayRandomly(setLength, setMinValue, setMaxValue);
bubbleSort()

// Bubble sort
function swap(firstIndex, secondIndex) {
  return new Promise(resolve => {
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        let temp = set[firstIndex];
        set[firstIndex] = set[secondIndex];
        set[secondIndex] = temp;
        resolve();
      }, delay);
    });
  });
}

async function bubbleSort () {
  let len = set.length;
  let i, j, stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (set[j] > set[j + 1]) {
        await swap(j, j + 1);
      }
    }
  }
}
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