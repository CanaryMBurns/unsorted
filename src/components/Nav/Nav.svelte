<script>
	export let segment;
	let open = false;

	function onClick(e) {
		open = !open;
	}
</script>

<div class="button" on:click={onClick}>OpenMENUEEE</div>
<div on:click={onClick}  class="backdrop {open ? 'active' : ''}"></div>
<nav class="navigation-drawer {open ? 'open' : ''}">
	<li><a on:click={onClick} aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
	<li><a on:click={onClick} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

	<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
	  the blog data when we hover over the link or tap it on a touchscreen -->
	<li><a on:click={onClick} rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
</nav>

<style>
.navigation-drawer {
	position: fixed;
	top: 0;
	left: -250px;
	bottom: 0;
	height: 100vh;
	box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
	min-width: 250px;
	z-index: 20;
	background-color: #444444;
	transition: all 0.2s;
}
.navigation-drawer.open {
	left: 0;
}

.backdrop {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0;
	background-color: black;
	transition: all 0.2s;
	pointer-events: none;
}

.backdrop.active {
	opacity: 0.5;
	transition: all 0.2s;
	pointer-events: all;
}

li {
	position: relative;
	cursor: pointer;
}

li:hover {
	background-color: #555555;
}

a {
	display: block;
	width: 100%;
	padding: 0.5rem 1rem;
	text-decoration: none;
	color: whitesmoke;
}
</style>