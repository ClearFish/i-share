<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="container_box">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in leftMenu" :key="index" :class="chosedIndex == index ? 'chosed':''" @click="choseMenu(item,index)">
                        <p>{{item.name}}</p>
                        <img src="@/assets/pc/mine/arrow.svg" alt="">
                    </li>
                </ul>
            </div>
            <div class="right">
                <component :is="componentName"></component>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject,defineComponent   } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
import {ElIcon} from "element-plus"
import Self from "./component/self.vue"
import Account from "./component/account.vue"
import Coupon from "./component/coupon.vue"
import Redemption from "./component/redemption.vue"
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const leftMenu = ref([
    {name:t('self_info'),component:Self},
    {name:t('account_setting'),component:Account},
    {name:t('coupon'),component:Coupon},
    {name:t('redemption_code'),component:Redemption}
])
const chosedIndex = ref(0)
const componentName = ref(Self);
const choseMenu = (item,index)=>{
    chosedIndex.value = index;
    componentName.value = item.component
}
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    margin-top: 160px;
    .container_box {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        .left {
            width: 282px;
            padding: 4px;
            border-radius: 12px;
            border: 1px solid  #DCE0E6;
            height: 200px;
            ul {
                width: 100%;
                li {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 48px;
                    cursor: pointer;
                    padding: 0 24px;
                    box-sizing: border-box;
                    p {
                        color: #1D222A;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 24px; /* 150% */
                    }
                }
                .chosed {
                    border-radius: 4px;
                    background: #F5F5F5;
                }
            }
        }
        .right {
            flex: 1;
            padding: 24px;
            border-radius: 12px;
            border: 1px solid  #DCE0E6;
        }
    }
}
</style>