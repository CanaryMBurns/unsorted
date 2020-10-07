<script>
import { getProportion } from '../../modules/functions.mjs'

export let set = [];
let maxElementValue = Math.max.apply(Math, set.map(function(o) { return o.value; }));
</script>

<div class="bar-chart">
  {#each set as element}
    <div class="bar-wrapper" style="height:calc({getProportion(element.value, maxElementValue)}%)">
      <div class="number">{element.value}</div>
      <div class="bar {element.isActive ? 'active' : ''}"></div>
    </div>
	{/each}
</div>

<style>
.bar-chart {
  display: flex;
  align-items: flex-end;
	width: 100%;
	height: 100%;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  margin: 0 0.5rem;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: whitesmoke;
}

.bar {
  flex: 1;
  width: 100%;
  background-color: mediumseagreen;
  
}

.bar.active {
  background-color: tomato;
}
</style>