<script>
	export default {
		props: ['name'],
		data() {
			return {
				path: "/svg/",
				short: "",
				svg: ".svg",
			}
		},
		methods: {
			check() {
				let string = this.name;
				let aname = string;
				if(aname == "React JS") { string = "react"; }
				if(aname == "Node JS") { string = "node"; }
				if(aname == "Unreal Engine 4/5") { string = "ue"; }
				if(aname == "Unity Engine") { string = "unity"; }
				if(aname == "Adobe Photoshop") { string = "ps"; }
				if(aname == "Adobe Illustrator") { string = "ai"; }
				if(aname == "Adobe InDesign") { string = "id"; }
				this.short = this.path + string.toLowerCase() + this.svg;
			}
		},
		mounted() {
			this.check();
		}
	}
</script>
<template>
	<img :src=short> {{ name }}
</template>
<style scoped>
	img { width:20px; height:20px; }
</style>