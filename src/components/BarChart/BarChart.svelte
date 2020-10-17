<script>
import { getProportion } from '../../modules/functions.mjs'

export let set = [];
let maxElementValue = Math.max.apply(Math, set.map(function(o) { return o.value; }));
</script>

<div class="bar-chart">
  {#each set as element}
    <div class="bar-wrapper" style="height:calc({getProportion(element.value, maxElementValue) + 10}%)">
      <div class="bar {element.isActive ? 'active' : ''}">{element.value}</div>
    </div>
	{/each}
</div>

<style>
.bar-chart {
  display: flex;
  align-items: flex-end;
	width: 100%;
	height: 100%;
  overflow: visible;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  margin: 0 0.5rem;
}

.bar {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: mediumseagreen;
  
}

.bar.active {
  background-color: tomato;
}
</style>