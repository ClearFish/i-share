<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="left"></div>
        <div class="right">
            <NoaccountHeader/>
            <InputComponents/>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
import NoaccountHeader from "@/components/NoaccountHeader.vue"
import InputComponents from "./InputComponents.vue"
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    .left {
        width: 600px;
        height: 100%;
        background: url("@/assets/pc/login/login_bg.png");
        background-size: cover;
    }
    .right {
        flex: 1;
        position: relative;
    }
}
</style>