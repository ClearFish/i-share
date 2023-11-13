<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="left">
            <img :src="Img" alt="">
        </div>
        <div class="right">
            <p class="goods_name">Netflix</p>
            <div class="chose_item">
                <p class="name">{{t('account_type')}}</p>
                <ul>
                    <li v-for="(item,index) in accountLists" :key="index" :class="accountChose == index ? 'chosed':''">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="chose_item">
                <p class="name">{{t('car_type')}}</p>
                <ul>
                    <li v-for="(item,index) in carLists" :key="index" :class="accountChose == index ? 'chosed':''">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="chose_item">
                <p class="name">{{t('time_duration')}}</p>
                <ul>
                    <li v-for="(item,index) in timeLists" :key="index" :class="accountChose == index ? 'chosed':''">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="chose_item">
                <p class="name">{{t('price_now')}}</p>
                <p class="price">￥24.80</p>
                <div class="coupon">
                    <p class="name">{{t('coupon')}}</p>
                    <div class="right_to">
                        <p class="use_num">3{{t('can_use_coupon')}}</p>
                        <img src="@/assets/pc/goods/to_icon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="buy_btn" @click="toBuy">支付宝购买</div>
            <div class="info_box">
                <p class="name">关于Netflix</p>
                <img :src="Img" alt="">
                <div class="company">
                    <div class="com_left">
                        <p class="title">{{t('build_time')}}</p>
                        <p class="congtent">2022-09-09</p>
                    </div>
                    <div class="com_left">
                        <p class="title">{{t('company_link')}}</p>
                        <a class="congtent link" href="https://www.netflix.com/" target="_blank">https://www.netflix.com/</a>
                    </div>
                </div>
                <div class="contro">
                    <p class="name">什么是Netflix</p>
                    <p class="cont">Netflix是一种流行的流媒体服务，提供各种电影、电视剧、纪录片等内容。它于1997年作为一种邮寄DVD租赁服务成立，后于2007年转型为流媒体平台。Netflix通过每月订阅费提供无限点播的方式，彻底改变了人们消费娱乐内容的方式。</p>
                    <p class="cont">通过其流媒体服务，Netflix允许订阅者在各种设备上观看内容，包括智能手机、平板电脑、智能电视和电脑。它根据观众的偏好和观看历史推荐电影和电视剧，提供个性化的用户体验。Netflix还制作和分发自己的原创内容，被称为“Netflix原创作品”，其中包括备受好评的系列剧，如《怪奇物语》、《王冠》、《毒枭》和《黑镜》，以及电影和纪录片。</p>
                    <p class="cont">要访问Netflix，您需要在其网站或Netflix应用上注册订阅计划。该服务提供不同的订阅级别，具有不同的功能和视频质量选项。一旦订阅，您可以浏览可用的影片，并立即开始流媒体播放。</p>
                    <p class="cont">Netflix已经在全球范围内扩张，现在在许多国家提供服务，为不同地区提供本地化的内容和多语言字幕。它继续大量投资于制作原创内容，并获得其他制片厂的热门电影和电视剧的发行权。此外，Netflix还尝试了互动故事叙述，如《黑镜：班德斯奈奇》，观众可以做出选择影响故事情节的决定。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const accountLists = ref([
    {name:"标准账号（港澳台泰地区不可看）",id:1},
    {name:"全球账号",id:2}
])
const accountChose = ref(0)
const carLists = ref([
    {name:"共享",id:1},
    {name:"独享",id:2}
])
const timeLists = ref([
    {name:"一个月",id:1},
    {name:"三个月",id:2},
    {name:"六个月",id:1},
    {name:"十二个月",id:2},
])
const toBuy = ()=>{
    router.push({
        path:"/pay",
        query:{id:"123"}
    })
}
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    margin-top: 136px;
    min-height: 100vh;
    display: flex;
    gap: 128px;
    .left {
        width: 484px;
        height: 484px;
        background: url("@/assets/pc/goods/goods_bg.png") no-repeat center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 240px;
            height: 240px;
        }
    }
    .right {
        .goods_name {
            color: #0D0C22;
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: 44px; /* 122.222% */
        }
        .chose_item {
            margin-top: 24px;
            .name {
                color:  #1D222A;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 150% */
            }
            ul {
                display: flex;
                gap: 24px;
                margin-top: 12px;
                li {
                    padding: 8px 16px;
                    background: #F5F5F5;
                    border-radius: 8px;
                    cursor: pointer;
                    p {
                        color: #1D222A;
                        text-align: center;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                    }
                }
                .chosed {
                    border: 1px solid  #E94C89;
                    background:  #FFE8ED;
                    p {
                        color: #E94C89;
                    }
                }
            }
            .price {
                color:  #EA0010;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: 40px; /* 125% */
            }
            .coupon {
                margin-top: 12px;
                width: 588px;
                height: 40px;
                border-radius: 8px;
                background: linear-gradient(270deg, #FDF3EE 0%, #FBEBF6 100%);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 16px;
                box-sizing: border-box;
                cursor: pointer;
                .name {
                    color:  #EA0010;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
                .right_to {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    .use_num {
                        color:  #EA0010;
                        text-align: center;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                    }
                }
            }
        }
        .buy_btn {
            width: 176px;
            margin-top: 24px;
            box-sizing: border-box;
            padding: 8px 48px;
            border-radius: 12px;
            background: #E94C89;
            color:  #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 150% */
            cursor: pointer;
        }
        .info_box {
            margin-top: 80px;
            .name {
                color: #1D222A;
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 32px; /* 133.333% */
            }
            img {
                width: 48px;
                height: 48px;
                margin-top: 16px;
            }
            .company {
                display: flex;
                gap: 112px;
                align-items: center;
                margin-top: 16px;
                .com_left {
                    .title {
                        color:  #838C99;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px; /* 157.143% */
                    }
                    .congtent {
                        color:  #1D222A;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                    }
                    .link {
                        color: #016DF3;
                    }
                }
            }
            .contro {
                margin-top: 44px;
                .name {
                    color: #1D222A;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 32px; /* 133.333% */
                }
                .cont {
                    margin-top: 16px;
                    color: #4E596A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                    width: 588px;
                }
            }
        }
    }
}
</style>