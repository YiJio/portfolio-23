<template>
	<div class="container">
		<h1>404: Page Not Found</h1>
		<p>Go to <router-link :to="{name:'about'}">main page</router-link>.</p>
	</div>
</template>
<script>
	export default {
		name: '404',
		created() {
			document.title = "404 | Portfolio";
		}
	}
	import { RouterLink } from "vue-router";
</script>
<style scoped>
	.container { width:100vw; height:100vh; background:#111; color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; }
	.container h1 { font-size:70px; }
</style>