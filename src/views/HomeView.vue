<template>
	<div>
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <router-link :to="{name:'work'}">Work</router-link>
  </div>
</template>
<script>
  import { RouterLink } from "vue-router"
</script>