<template>
    <div :class="isMobile ? 'norem-info_box m_info_box':'norem-info_box'">
        <div class="self_box">
            <p class="title">{{t('coupon')}}</p>
            <div class="list">
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                        <div class="top">
                            <div class="left">
                                <span>￥</span>
                                {{item.price}}
                            </div>
                            <div class="right">
                                <p class="name">{{item.name}}</p>
                                <p class="time">{{item.time}}</p>
                            </div>
                        </div>
                        <div class="bottom">
                            <p class="sub">{{item.name}}</p>
                            <div class="use_btn">{{t('use_now')}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject,defineComponent   } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
let lists = ref([
    {price:'48',name:"奈飞会员年卡专享",time:"2023/06/15-2023/07/15",title:"2023/06/15-2023/07/15"},
    {price:'48',name:"奈飞会员年卡专享",time:"2023/06/15-2023/07/15",title:"2023/06/15-2023/07/15"},
    {price:'48',name:"奈飞会员年卡专享",time:"2023/06/15-2023/07/15",title:"2023/06/15-2023/07/15"}
])
</script>
<style lang="scss" scoped>
.norem-info_box {
    width: 100%;
    .self_box {
        .title {
            color: #1D222A;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px; /* 140% */
        }
    }
    .list {
        margin-top: 24px;
        width: 100%;
        ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 49%;
                border-radius: 12px;
                border: 2px solid  #E94C89;
                background: #E94C89;
                margin-bottom: 24px;
                /* 通用投影 */
                box-shadow: 0px 6px 32px 0px rgba(87, 76, 80, 0.02), 0px 16px 48px 0px rgba(87, 76, 80, 0.02);
                .top {
                    display: flex;
                    background: #fff;
                    border-radius: 12px;
                    position: relative;
                    overflow: hidden;
                    .left {
                        width: 120px;
                        height: 96px;
                        background: linear-gradient(270deg, #E3ECF9 0%, #FDC3AE 100%);
                        border-radius: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color:  #EA0010;
                        text-align: center;
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 48px; /* 200% */
                        span {
                            font-size: 14px;
                        }
                    }
                    .right {
                        flex: 1;
                        background: #fff;
                        border-radius:0 12px 12px 0;
                        padding-left: 16px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .name {
                            color:  #E94C89;
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 28px; /* 140% */
                        }
                        .time {
                            color:  #E94C89;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px; /* 150% */
                        }
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        left:-8px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 16px;
                        height: 16px;
                        border-radius: 16px;
                        background: #E94C89;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        right:-8px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 16px;
                        height: 16px;
                        border-radius: 16px;
                        background: #E94C89;
                    }
                }
                .bottom {
                    padding: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #E94C89;
                    border-radius: 12px;
                    .sub {
                        color:  #FFF;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 24px; /* 150% */
                    }
                    .use_btn{
                        width: 120px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: url("@/assets/pc/home/btn_white.svg") no-repeat center;
                        background-size: 100% 100%;
                        cursor: pointer;
                        color:  #1D222A;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 24px; /* 150% */
                    }
                }
            }
        }
    }
}
</style>