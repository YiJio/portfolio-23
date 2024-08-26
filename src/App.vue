<template>
  <!--<div>
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <router-link :to="{name:'work'}">Work</router-link>
  </div>-->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" :mode="route.meta.mode">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
  import { RouterView, RouterLink } from "vue-router"
</script>