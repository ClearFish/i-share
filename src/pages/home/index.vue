<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const getImg = async()=>{
   let res = await getAuth()
}
const toUrl = (url)=>{
   router.push(url)
}
</script>

<template>
<div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
  home
</div>
</template>

<style scoped lang="scss">
</style>
