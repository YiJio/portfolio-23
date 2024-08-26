
<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import Copyright from '../components/Copyright.vue';
import eduData from '../data/education.json';
import empData from '../data/employment.json';

const router = useRouter();
const edus = ref(eduData);
const emps = ref(empData);
</script>
<script>
export default {
	name: "about",
	created() {
		document.title = "About | Portfolio";
	},
	components: { Copyright }
}
</script>
<template>
	<div class="container">
		<div class="left">
			<div class="wrap">
				<!--<img class="profile" src="https://dynamic-media-cdn.tripadvisor.om/media/photo-o/0f/f6/11/f5/richard-alatorre-park.jpg?w=500&h=-1&s=1" />-->
				<img class="profile" src="../assets/profile.png" />
				<h1>Yi Jiang</h1>
				<div class="links">
					<a href="mailto:jiangy.grad88@gmail.com"><img class="svg" src="../assets/mail.svg" /></a>
					<a target="blank" href="https://www.linkedin.com/in/yijio/"><img class="svg" src="../assets/linkedin.svg" /></a>
					<a target="blank" href="https://github.com/YiJio"><img class="svg" src="../assets/github.svg" /></a>
				</div>
				<hr />
				<p>Main focus on game development & design, web development & design, and various other graphic design fields.
				</p>
				<p>Currently seeking employment and working on completing personal projects.</p>
				<hr />
				<div class="contact">
					<span><img class="svg" src="../assets/address.svg" /> Las Vegas, Nevada</span>
					<span><img class="svg" src="../assets/phone.svg" /> +1 702 210 4371</span>
				</div>
				<div class="black-btn" @click="router.push(`/work`)">
					<span>WORK</span>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="wrap">
				<h2 class="cv">C.V.</h2>
				<a href="/files/resume.pdf" target="_blank">
					<div class="resume-btn">Resume <img class="svg" style="color:#fff" src="../assets/pdf.svg" /></div>
				</a>
				<h3>Education</h3>
				<div class="cv-section" v-for="edu in edus" :key="edu.id">
					<div class="date"><span>{{ edu.date }}</span></div>
					<div class="info">
						<strong>{{ edu.institution }}</strong>
						<span>{{ edu.degree }}</span>
						<ul>
							<li>Major: {{ edu.major }}</li>
							<li>Minors: {{ edu.minors }}</li>
							<li>Cumulative GPA: {{ edu.gpa }} / 4.0</li>
						</ul>
					</div>
				</div>
				<h3>Employment</h3>
				<div class="cv-section" v-for="emp in emps" :key="emp.id">
					<div class="date">
						<span v-for="(date, index) in emp.date" :key="{ index }">{{ date }}</span>
					</div>
					<div class="info">
						<strong>{{ emp.position }}</strong>
						<span>{{ emp.company }}</span>
						<ul>
							<li v-for="(desc, index) in emp.description" :key="{ index }">{{ desc }}</li>
						</ul>
					</div>
				</div>
			</div>
			<Copyright />
		</div>
	</div>
</template>
<style scoped>
.left {
	width: 45%;
	background: #fff;
	color: #000;
}

.left h1 {
	margin: 20px 0;
	text-align: center;
	font-weight: 400;
	color: #000;
}

.right {
	width: 55%;
	background: #111;
	color: #ccc;
}

.right .wrap {
	padding: 3rem 5rem;
}
</style>