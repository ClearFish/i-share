<template>
    <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
        <div class="top_content">
            <p class="title">{{t('create_your_account')}}</p>
            <ul class="types_container">
                <li v-for="(item,index) in accountTypes" :key="index">  
                    <img :src="item.imgUrl" alt="">
                    <p class="name" v-if="item.name && isMobile">{{item.name}}</p>
                </li>
            </ul>
            <div class="bottom_line">
                <p>Or</p>
            </div>
        </div>
        <div class="login_container">
            <div class="input_box">
                <p class="title">{{t('phone_or_email')}}</p>
                <input />
            </div>
            <div class="input_box">
                <p class="title">{{t('password')}}</p>
                <input type="password"/>
            </div>
            <div class="input_box">
                <p class="title">{{t('sure_password')}}</p>
                <input type="password"/>
            </div>
            <div class="login_btn">{{t('create_account')}}</div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import Img1 from "@/assets/pc/login/wechat.svg"
import Img2 from "@/assets/pc/login/google.svg"
import Img3 from "@/assets/pc/login/facebook.svg"
import Img4 from "@/assets/pc/login/telegram.svg"
const { t } = useI18n()
const accountTypes = computed(()=>{
    return [
        {name:t('wechat_login'),imgUrl:Img1},
        {name:t('google_login'),imgUrl:Img2},
        {name:'',imgUrl:Img3},
        {name:'',imgUrl:Img4}
    ]
})
const rememberAccount = ref(false)
</script>
<style lang="scss" scoped>
.norem-big_box {
    width: 416px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .top_content {
        .title {
            color: #1D222A;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px; /* 133.333% */
        }
        .types_container {
            display: flex;
            gap: 16px;
            margin-top: 32px;
            li {
                display: flex;
                padding: 12px 16px;
                background: #F5F5F5;
                border-radius: 12px;
                gap: 8px;
                color:  #4E596A;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
            }
        }
        .bottom_line {
            margin-top: 24px;
            width: 100%;
            position: relative;
            p {
                color:#B8BBBF;
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
                padding: 0 18px;
            }
            &::before {
                content: "";
                width: calc(50% - 18px);
                height: 1px;
                background: #B8BBBF;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            &::after {
                content: "";
                width: calc(50% - 18px);
                height: 1px;
                background: #B8BBBF;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    .login_container {
        width: 416px;
        margin-top: 24px;
        .input_box {
            width: 100%;
            margin-bottom: 24px;
            .title {
                color: #1D222A;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px; /* 150% */
                margin-bottom: 8px;
            }
           
        }
        .bottom_cont {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .forget_psd {
                color:  #016DF3;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
                cursor: pointer;
            }
        }
        .login_btn {
            margin-top: 32px;
            width: 240px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 12px;
            background: #E94C89;
            font-size: 16px;
        }
    }
    input {
        width: 100%;
        height: 48px;
        background: #F5F5F5;
        color:  #B8BBBF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        padding: 0 16px;
    }
}
.m_big_box {
    width: 100%;
    .top_content {
        width: 100%;
    }
    .login_container {
        width: 100%;
    }
}
</style>