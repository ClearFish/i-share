<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="top_cont">
            <div class="title_box">
                <img src="@/assets/pc/order/order.svg" alt="">
                <p class="title">{{t('my_order')}}</p>
            </div>
            <div class="cont_box">
                <div class="title_list">
                    <ul>
                        <li v-for="(item,index) in titleList" :key="index" :class="chosedIndex == index ? 'active':''" @click="choseTitle(item,index)">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table_content">
            <ul>
                <li v-for="(item,index) in tableList" :key="index">
                    <div class="item_box">
                        <div class="info">
                            <img :src="item.img" alt="">
                            <p class="name">{{item.name}}</p>
                        </div>
                        <p class="other time">{{item.time}}</p>
                        <p class="other time">{{item.payMethod}}</p>
                        <p class="other price">{{item.price}}</p>
                        <p class="other status">{{item.status}}</p>
                    </div>
                </li>
            </ul>
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
const titleList = ref([
    {name:t('all'),id:1},
    {name:t('no_pay'),id:2},
    {name:t('no_send'),id:3},
    {name:t('has_send'),id:2},
    {name:t('has_finished'),id:3},
])
const tableList = ref([
    {img:Img,name:'Netflix',time:"2023-05-24 20:03:24",payMethod:"月付",price:"￥25",status:"已完成"},
    {img:Img,name:'Netflix',time:"2023-05-24 20:03:24",payMethod:"月付",price:"￥25",status:"已完成"},
    {img:Img,name:'Netflix',time:"2023-05-24 20:03:24",payMethod:"月付",price:"￥25",status:"已完成"},
    {img:Img,name:'Netflix',time:"2023-05-24 20:03:24",payMethod:"月付",price:"￥25",status:"已完成"},
    {img:Img,name:'Netflix',time:"2023-05-24 20:03:24",payMethod:"月付",price:"￥25",status:"已完成"}
])
let chosedIndex = ref(0)
const choseTitle = (item,index)=>{
    chosedIndex.value = index
}
const router = useRouter()
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    margin-top: 136px;
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
                    color:  #E94C89;
                    cursor: pointer;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
            }
        }
    }
    .table_content {
        margin-top: 24px;
        border-radius: 12px;
        width: 100%;
        border: 1px solid #EDEFF2;
        ul {
            width: 100%;
            box-sizing: border-box;
            li {
                width: 100%;
                padding: 0 24px;
                cursor: pointer;
                box-sizing: border-box;
                .item_box {
                    display: flex;
                    border-bottom: 1px solid #EDEFF2;
                    align-items: center;
                    padding: 10px 0;
                    .info {
                        display: flex;
                        width: 20%;
                        align-items: center;
                        gap: 16px;
                        img {
                            width: 54px;
                            height: 54px;
                        }
                        .name {
                            color: #1D222A;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                        }
                    }
                    .other {
                        width: 20%;
                    }
                    .time {
                        color:  #4E596A;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                        text-align: center;
                    }
                    .status {
                        color:  #EA0010;
                        text-align: right;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                    }
                    .price {
                        color:  #EA0010;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                        text-align: center;
                    }
                }
                &:hover {
                    background: #F5F5F5;
                }
                &:nth-child(1) {
                    border-radius: 12px 12px 0 0;
                }
                &:last-child {
                    border-radius: 0 0 12px 12px;
                }
            }
        }
    }
}
</style>