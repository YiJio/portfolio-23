<script setup>
	import { onMounted, ref, watch } from 'vue';
	import { useRoute, useRouter, RouterLink } from 'vue-router';
	import Copyright from '../components/Copyright.vue';
	import TLF from '../components/TLF.vue';
	import projects from '../data/project.json';

	const route = useRoute();
	const router = useRouter();
	const project = ref(null);
	const { id } = route.params;
	const child = ref(0);
	let selectedID = 0;

	const handleChange = (e) => {
		let value = e.target.value;
		let index = value.indexOf("-");
		selectedID = parseInt(value.substring(index + 1));
		child.value = selectedID;
	}

	onMounted(() => {
		const p = projects.find(p => p.id === id);
		project.value = p;
		let value = p.children[0].id;
		let index = value.indexOf("-");
		selectedID = parseInt(value.substring(index + 1));
		child.value = selectedID;
	})

	watch

</script>
<script>
	export default {
    name: "project",
    created() {
        document.title = "Project | Portfolio";
    },
    components: { Copyright }
}
</script>
<template>
	<div class="container">
		<div class="left">
			<div class="wrap">
				<h1>Projects.</h1>
				<div class="white-btn" @click="router.push(`/about`)">
					<span>ABOUT</span>
				</div>
				<div class="white-btn" @click="router.push(`/work`)">
					<span>WORK</span>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="wrap" v-if="project">
				<div class="header">
					<h2>{{ project.type }}.</h2>
				</div>
				<div class="inner">
					<div class="overlay-banner">
						<div class="content">Hello</div>
						<div class="overlay"></div>
						<select class="select" v-on:change="handleChange">
							<option v-for="child in project.children" :value="child.id" :key="child.id" :selected="selectedID === child.id">{{ child.name }}</option>
						</select>
					</div>
					<div class="project">
						<div class="side">
							<img class="img" src=""/>
							<div class="title">{{ project.children[child - 1].name }}</div>
							<span><b>Type:</b> {{ project.children[child - 1].type }}</span>
							<span><b>Status:</b> {{ project.children[child - 1].status }}</span>
							<span><b>Timeframe:</b> {{ project.children[child - 1].timeframe }}</span>
						</div>
						<div class="main">
							<div class="div20"></div>
							<p>{{ project.children[child - 1].desc }}</p>
							<div v-for="(explain, index) in project.children[child - 1].explain" :key="{index}">
								<hr/>
								<img :src="explain.image"/>
								{{ explain.desc }}
							</div>
							<div class="div100"></div>
							<Copyright/>
						</div>
						<div class="tlf">
							<div v-for="(tlf, index) in project.children[child - 1].tlf" :key="{index}"><TLF :name=tlf></TLF></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	select { padding:5px 10px; border-radius:5px; border:1px solid #111; background:#222; color:#fff; cursor:pointer; font-family:DengXian, sans-serif; font-size:14px; transition:0.2s all ease-in; opacity:0.85; }
	select:focus, select:hover { background:#111; opacity:1; }
	option { background:#fff; color:#000; }
	.left h1 { text-align:left; font-size:40px; font-weight:300; color:#fff; }
	.right .wrap { padding:0; position:relative; }
	.white-btn { margin:1em 0; }
	.overlay-banner { position:relative; height:50px; background:url(""); background-size:cover; background-position:center; padding:100px 0; }
	.overlay-banner .overlay { position:absolute; top:0; display:block; background:#000; width:100%; height:100%; opacity:0.35; z-index:1; }
	.overlay-banner .content { position:relative; margin:0 auto; width:80%; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#fff; font-size:35px; font-weight:600; z-index:9; }
	.overlay-banner .select { position:absolute; bottom:10px; left:10px; z-index:10; }
	.project { display:flex; flex:1; }
	.project .side { flex:1; padding:20px; background:#eff3f8; }
	.project .side .img { width:100px; height:100px; }
	.project .side .title { margin:10px 0; font-weight:bold; font-size:24px; }
	.project .side span { display:block; margin-bottom:10px; font-size:14px; }
	.project .main { flex:3; padding:0 20px; display:flex; flex-direction:column; justify-content:space-between; }
	.project .main img { display:block; margin:0 auto 15px; max-width:100%; }
	.project .tlf { flex:1; padding:20px; }
	.project p { margin:0 0 1em; }
	.header { position:sticky; top:0; padding:20px; background:#111; color:#fff; z-index:11; }
	.header h2 { margin:0; text-transform:initial; letter-spacing:1px; }
	.inner { display:flex; flex-direction:column; justify-content:stretch; height:calc(100vh - 64px); }
</style>