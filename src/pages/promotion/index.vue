<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="top_title">
            <p>{{t('promote_user')}}</p>
            <p>
                <span>{{t('join_now')}}</span>
                <span class="add_color">10%</span>
                <span>{{t('return_funds')}}</span>
            </p>
            <img src="@/assets/pc/promotion/circle.svg" alt="">
        </div>
        <p class="sub_title">{{t('return_funds_subtitle')}}</p>
        <div class="link_boc">
            <p class="link">https://aisharing/sharing/web?sharedId=168232</p>
            <p class="copy_btn">{{t('copy_link')}}</p>
        </div>
        <div class="progress_box">
            <p class="title">{{t('progress_title')}}</p>
            <ul>
                <li v-for="(item,index) in progressList" :key="index">
                    <img :src="item.img" alt="">
                    <p class="content">{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg';
import Link from '@/assets/pc/promotion/link.svg';
import Computer from '@/assets/pc/promotion/computer.svg';
import Gift from '@/assets/pc/promotion/gift.svg';
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const progressList = ref([
    {name:t('progress_fir'),img:Link},
    {name:t('progress_sec'),img:Computer},
    {name:t('progress_third'),img:Gift}
])
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    .top_title {
        margin-top: 200px;
        position: relative;
        z-index: 98;
        display: flex;
        justify-content: center;
        flex-direction: column;
        p {
            color: #1D222A;
            text-align: center;
            font-family: PingFang SC;
            font-size: 64px;
            font-style: normal;
            font-weight: 600;
            line-height: 80px; /* 125% */
            .add_color {
                color: #E94C89;
            }
        }
        img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 78px;
        }
    }
    .sub_title {
        color:  #4E596A;
        text-align: center;
        /* 16px · 400 */
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        margin-top: 16px;
    }
    .link_boc {
        width: 590px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F5F5F5;
        border-radius: 12px;
        padding: 4px;
        margin: 0 auto;
        margin-top: 40px;
        .link {
            padding-left: 20px;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            color: #4E596A;
        }
        .copy_btn {
            padding: 8px 24px;
            border-radius: 8px;
            background:  #E94C89;
            color:  #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 150% */
            cursor: pointer;
        }
    }
    .progress_box {
        width: 800px;
        height: 240px;
        margin: 0 auto;
        margin-top: 80px;
        border-radius: 12px;
        background: linear-gradient(93deg, rgba(245, 201, 237, 0.30) 1.31%, rgba(248, 212, 208, 0.20) 98.3%);
        padding: 40px 64px;
        .title {
            color:  #1D222A;
            text-align: center;
            font-family: PingFang SC;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px; /* 133.333% */
        }
        ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 52px;
            li {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                img {
                    margin-bottom: 28px;
                }
                p {
                    color:  #1D222A;
                    text-align: center;
                    /* 16px · 400 */
                    font-family: PingFang SC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                }
                &::after {
                    content: "";
                    width: 160px;
                    height: 2px;
                    position: absolute;
                    right: -70px;
                    top: 18%;
                    background: url("@/assets/pc/promotion/line.svg") no-repeat center;
                    background-size: 100%;
                }
                &:nth-child(3) {
                    &::after {
                        content: "";
                        background: none;
                    }
                }
            }
        }
    }
}
</style>