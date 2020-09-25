<script>
import { getProportion } from '../modules/functions.mjs'

export let set = [];
let maxElementValue = Math.max(...set);
</script>

<div class="bar-chart">
  {#each set as element}
    <div class="bar" style="height:{getProportion(element, maxElementValue)}%"></div>
	{/each}
</div>

<style>
.bar-chart {
  display: flex;
  align-items: flex-end;
	width: 100%;
	height: 100%;
}

.bar {
  flex: 1 1 0px;
  background-color: tomato;
  margin: 0 5px;
}
</style>