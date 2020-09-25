<script>
export let set = [];
</script>

<div class="bar-chart">
  {#each set as element}
    <div class="bar"></div>
	{/each}
</div>

<style>
.bar-chart {
  display: flex;
	width: 100%;
	height: 100%;
}

.bar {
  width: 150px;
  height: 100%;
  background-color: tomato;
}
</style>