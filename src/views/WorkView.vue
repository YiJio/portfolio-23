<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import Copyright from '../components/Copyright.vue';
import projectData from '../data/project.json';

const router = useRouter();
const route = useRoute();
const projects = ref(projectData);

</script>
<script>
export default {
	name: "work",
	created() {
		document.title = "Work | Portfolio";
	},
	components: { Copyright }
}
</script>
<template>
	<div class="container">
		<div class="left">
			<div class="wrap">
				<h1>Projects.</h1>
				<ul>
					<li class="active">All</li>
					<li>Basically this section should make it easier for people to navigate to other projects, so sidebar dropdown options</li>
				</ul>
				<div class="bottom">
					<div class="white-btn" @click="router.push(`/about`)">
						<span>ABOUT</span>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="wrap">
				<div class="grid">
					<div class="project" v-for="project in projects" :key="project.id" @click="router.push(`/work/${project.id}`)">
						<div class="img"></div>
						<span>{{ project.type }}</span>
						<!--<small>{{ project.cat }}</small>-->
					</div>
				</div>
			</div>
			<Copyright />
		</div>
	</div>
</template>
<style scoped>
.left h1 {
	text-align: left;
	font-size: 40px;
	font-weight: 300;
	color: #fff;
}

.right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.white-btn {
	margin: 0;
}
</style>