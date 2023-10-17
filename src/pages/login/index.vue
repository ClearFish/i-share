<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
}
</style>