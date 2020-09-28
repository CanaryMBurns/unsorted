<script>
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let m = 0;

let startTimestamp = new Date().getTime();
setInterval(running, 40);

function running() {
  let nowTimestamp = new Date().getTime();
  m = nowTimestamp - startTimestamp;
  minutes = parseInt(m / 60000);
  seconds = parseInt((m - (60000 * minutes)) / 1000);  
  milliseconds = parseInt((m -(60000 * minutes) - (seconds * 1000)));
}
</script>

<div class="chronometer">
  <div class="minutes">{minutes.toString().padStart(2,'0')}</div>:
  <div class="seconds">{seconds.toString().padStart(2,'0')}</div>:
  <div class="milliseconds">{milliseconds.toString().padStart(3,'0')}</div>
</div>

<style>
.chronometer {
  display: flex;
  color: whitesmoke;
}
</style>