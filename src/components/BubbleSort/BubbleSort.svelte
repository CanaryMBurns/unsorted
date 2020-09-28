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
bubbleSort()

// Bubble sort
function swap(firstIndex, secondIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let temp = set[firstIndex];
      set[firstIndex] = set[secondIndex];
      set[secondIndex] = temp;
      resolve();      
    }, delay);
  });
}

async function bubbleSort () {
  let len = set.length;
  let i, j, stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (set[j + 1] !== undefined) {
        if (set[j].value > set[j + 1].value) {
          try {
            set[j].isActive = true;
            await swap(j, j + 1);
            set[j + 1].isActive = false;
          } catch(error) {
            console.error(error);
          }
        }
      }
    }
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