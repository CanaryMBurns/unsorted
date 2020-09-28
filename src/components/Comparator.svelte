<script>
import BubbleSort from './BubbleSort.svelte'

// Configuration
let gridNumberOptions = [
  {
    name: 'One',
    value: 1
  },
  {
    name: 'Two',
    value: 2
  },
  {
    name: 'Three',
    value: 3
  },
  {
    name: 'Four',
    value: 4
  } 
];

let gridNumberOptionSelected = 1;

</script>

<div class="comparator">
  <div class="options">
    <select bind:value={gridNumberOptionSelected}>
      {#each gridNumberOptions as option}
        <option value="{option.value}">{option.name}</option> 
      {/each}
    </select>
    {gridNumberOptionSelected}
  </div>
  <div class="playground">
    <div class="first-grid">
      <BubbleSort/>
    </div>
    <div class="second-grid">
      <BubbleSort/>
    </div>
    <div class="third-grid">
      <BubbleSort/>
    </div>
    <div class="fourth-grid">
      <BubbleSort/>
    </div>
  </div>
</div>

<style>
.comparator {
  width: 100%;
  height: 100%;
}

.playground {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50%  50%;
   grid-template-areas: 
    "first second"
    "third fourth";
  width: 100%;
  height: 100%;
}

.first-grid {
  grid-area: first;
}

.second-grid {
  grid-area: second;
}

.third-grid {
  grid-area: third;
}

.fourth-grid {
  grid-area: fourth;
}
</style>
