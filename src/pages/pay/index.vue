<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="pay_box">
            <p class="price">￥24.8</p>
            <p class="remind">{{t('pay_info')}}</p>
            <div class="er_code"></div>
            <p class="ercode_remin">打开手机支付宝扫一扫继续付款</p>
            <div class="other_info">
                <div class="info_item">
                    <p class="title">{{t('pay_goods')}}:</p>
                    <p class="content">ntfxt</p>
                </div>
                <div class="info_item">
                    <p class="title">{{t('receive_name')}}:</p>
                    <p class="content">爱分享</p>
                </div>
                <div class="info_item">
                    <p class="title">{{t('goods_price')}}:</p>
                    <p class="content">￥24.8</p>
                </div>
            </div>
            <p class="bottom">平台全程质保由于虚拟产品有唯一性和不可回收性，拍后不可退款</p>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 1200px;
    margin: 0 auto;
    margin-top: 136px;
    min-height: 100vh;
    .pay_box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .price {
            color:  #EA0010;
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 48px; /* 120% */
        }
        .remind {
            margin-top: 8px;
            color: #000;
            /* 24px · 700 */
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px; /* 133.333% */
        }
        .er_code {
            margin-top: 16px;
            width: 248px;
            height: 248px;
            border-radius: 8px;
            padding: 24px;
            border: 1px solid #DCE0E6;
        }
        .ercode_remin{
            color:  #4E596A;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
            margin-top: 16px;
        }
        .other_info {
            margin-top: 48px;
            width: 480px;
            padding: 24px;
            box-sizing: border-box;
            border-radius: 12px;
            background: #F5F5F5;
            .info_item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
                .title {
                    color:  #4E596A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
                .content {
                    color:  #1D222A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
            }
        }
        .bottom {
            margin-top: 16px;
            color:  #838C99;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
        }
    }
}
</style>
