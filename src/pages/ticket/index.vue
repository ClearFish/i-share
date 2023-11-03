<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="top_cont">
            <div class="title_box">
                <div class="head_box">
                    <img src="@/assets/pc/ticket/car.png" alt="">
                    <p class="title">{{t('my_ticket')}}</p>
                </div>
                <div v-if="isMobile" class="head_box">
                    <img src="@/assets/pc/ticket/group.png" alt="">
                    <p>{{t('join_group')}}</p>
                </div>
            </div>
            <div class="cont_box">
                <div class="title_list">
                    <ul>
                        <li v-for="(item,index) in titleList" :key="index" :class="chosedIndex == index ? 'active':''" @click="choseTitle(item,index)">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="group" v-if="!isMobile">
                    <img src="@/assets/pc/ticket/group.png" alt="">
                    <p>{{t('join_group')}}</p>
                </div>
            </div>
        </div>
        <div class="list_box">
            <ul>
                <li v-for="(item,index) in ticketsList" :key="index">
                    <div class="top">
                        <img :src="item.img" alt="">
                        <div class="info">
                            <p class="name">{{item.name}}</p>
                            <p class="remind">{{item.remindTime}}</p>
                        </div>
                    </div>
                    <div class="list_info">
                        <div class="info_item">
                            <p class="order_number">{{t('oreder_number')}}:</p>
                            <p class="content">{{item.order}}</p>
                        </div>
                        <div class="info_item">
                            <p class="order_number">{{t('start_time')}}:</p>
                            <p class="content">{{item.startTime}}</p>
                        </div>
                        <div class="info_item">
                            <p class="order_number">{{t('end_Time')}}:</p>
                            <p class="content">{{item.endTime}}</p>
                        </div>
                        <div class="info_item">
                            <p class="order_number">{{t('account')}}:</p>
                            <div class="add_svg">
                                <p class="content">{{item.account}}</p>
                                <img src="@/assets/pc/ticket/copy.svg" alt="">
                            </div>
                        </div>
                        <div class="info_item add_fake">
                            <p class="order_number">{{t('password')}}:</p>
                            <div class="add_svg">
                                <p class="content">{{item.password}}</p>
                                <img src="@/assets/pc/ticket/eyes.svg" alt="">
                                <img src="@/assets/pc/ticket/copy.svg" alt="">
                            </div>
                        </div>
                        <div class="info_item">
                            <p class="order_number">{{t('use_guid')}}:</p>
                            <p class="content check_btn">{{t('check_now')}}</p>
                        </div>
                        <div class="info_item">
                            <div class="set_box">
                                <p class="order_number">{{t('seat_number')}}:</p>
                                <p class="sets">{{item.ticketNum}}</p>
                            </div>
                            <p class="content renew_btn">{{t('account_renew')}}</p>
                        </div>
                    </div>
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
import Img from '@/assets/pc/home/neft.svg'
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const titleList = ref([
    {name:t('all'),id:1},
    {name:t('in_car'),id:2},
    {name:t('out_car'),id:3},
])
let chosedIndex = ref(0)
const choseTitle = (item,index)=>{
    chosedIndex.value = index
}
const ticketsList = ref([
    {name:'Netflix 4K UHD',remindTime:"29天24小时54分34秒",img:Img,order:'168796000931',startTime:'2023-06-28 21:47:33',endTime:'2023-07-28 21:47:33',account:"fyav2923@21cn.com",password:"rcqwnn",ticketNum:'02'},
    {name:'Netflix 4K UHD',remindTime:"29天24小时54分34秒",img:Img,order:'168796000931',startTime:'2023-06-28 21:47:33',endTime:'2023-07-28 21:47:33',account:"fyav2923@21cn.com",password:"rcqwnn",ticketNum:'02'},
    {name:'Netflix 4K UHD',remindTime:"29天24小时54分34秒",img:Img,order:'168796000931',startTime:'2023-06-28 21:47:33',endTime:'2023-07-28 21:47:33',account:"fyav2923@21cn.com",password:"rcqwnn",ticketNum:'02'},
    {name:'Netflix 4K UHD',remindTime:"29天24小时54分34秒",img:Img,order:'168796000931',startTime:'2023-06-28 21:47:33',endTime:'2023-07-28 21:47:33',account:"fyav2923@21cn.com",password:"rcqwnn",ticketNum:'02'},
    {name:'Netflix 4K UHD',remindTime:"29天24小时54分34秒",img:Img,order:'168796000931',startTime:'2023-06-28 21:47:33',endTime:'2023-07-28 21:47:33',account:"fyav2923@21cn.com",password:"rcqwnn",ticketNum:'02'}
])
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    margin-top: 196px;
    min-height: 100vh;
    .top_cont {
        .title_box {
            display: flex;
            align-items: center;
            gap: 10px;
            .title {
                color: #000;
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px; /* 100% */
            }
        }
    }
    .cont_box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        margin-top: 24px;
        .title_list {
            display: flex;
            justify-content: center;
            ul {
                display: flex;
                li {
                    p {
                    padding: 8px 24px;
                    color:  #838C99;
                    font-family: PingFang SC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 24px; /* 150% */
                    cursor: pointer;
                    }
                }
                .active {
                    p {
                    color:  #1D222A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 24px; /* 150% */
                    border-radius: 8px;
                    background:  #F5F5F5;
                    }
                }
            }
        }
        .group {
            display: flex;
            gap: 10px;
            align-items: center;
            p {
                color:  #016DF3;
                cursor: pointer;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 150% */
            }
        }
    }
    .list_box {
        width: 100%;
        margin-top: 24px;
        ul {
            width: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 2%;
            li {
                width: 32%;
                box-sizing: border-box;
                padding: 24px;
                border-radius: 12px;
                border: 1px solid  #DCE0E6;
                background:  #FFF;
                margin-bottom: 24px;
                .top {
                    display: flex;
                    gap: 16px;
                    p {
                        text-align: left;
                    }
                    .info {
                        .name {
                            color: #1D222A;
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 32px; /* 133.333% */
                        }
                        .remind {
                            color: #EA0010;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 24px; /* 150% */
                        }
                    }
                }
                .list_info {
                    .info_item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 24px;
                        .order_number {
                            color:  #4E596A;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                        }
                        .content {
                            color:  #1D222A;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                        }
                        .check_btn {
                            color:  #016DF3;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                            cursor: pointer;
                        }
                        .set_box {
                            display: flex;
                            align-items: flex-end;
                            gap: 4px;
                            .sets {
                                color:  #EA0010;
                                font-size: 24px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 32px; /* 133.333% */
                            }
                            
                        }
                        .renew_btn {
                            width: 120px;
                            height: 40px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: url("@/assets/pc/home/btn_bg.svg") no-repeat center;
                            cursor: pointer;
                            color:  #FFF;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                        }
                        .add_svg {
                            display: flex;
                            align-items: center;
                            gap: 6px;
                            img {
                                cursor: pointer;
                            }
                        }
                    }
                    .add_fake {
                        position: relative;
                        &::after {
                            content: "";
                            width: 100%;
                            height: 1px;
                            background: #DCE0E6;
                            left: 0;
                            bottom: -12px;
                            position: absolute;
                        }
                    }
                }
            }
        }
    }
}
.m_big_box {
    margin-top: 120px;
    padding: 0 16px;
    box-sizing: border-box;
    width: 100%;
    .top_cont {
        .title_box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .head_box {
                display: flex;
                align-items: center;
                gap: 8px;
                 p {
                    color:  #016DF3;
                    cursor: pointer;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
                .title {
                    font-size: 20px;
                    color: #000;
                }
            }
        }
    }
    .list_box {
        width: 100%;
        ul {
            width: 100%;
            flex-direction: column;
            li {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
}
</style>