<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { computed, onMounted, provide,ref } from "vue"
import {useStore } from "vuex"
const sotre = useStore()
const showVal = computed(()=>{
  return sotre.state.showHeaderFooter
})
</script>

<template>
  <Header v-if="showVal"/>
    <router-view />
  <Footer v-if="showVal"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
