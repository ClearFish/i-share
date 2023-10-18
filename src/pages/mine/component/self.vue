<template>
    <div :class="isMobile ? 'norem-info_box m_info_box':'norem-info_box'">
        <div class="self_box">
            <p class="title">{{t('self_info')}}</p>
            <div class="avatar">
                <img src="@/assets/pc/header/avatar.png" alt="">
            </div>
            <div class="info_content">
                <div class="info_item">
                    <p class="info_title">{{t('nick_name')}}</p>
                    <p class="content">123123123</p>
                </div>
                <div class="info_item">
                    <p class="info_title">{{t('phone_number')}}</p>
                    <p class="content">123123123</p>
                </div>
                <div class="info_item">
                    <p class="info_title">{{t('email')}}</p>
                    <p class="content">123123123</p>
                </div>
                <div class="edit_btn">{{t('edit_info')}}</div>
            </div>
            <div class="info_content">
                <div class="info_item">
                    <p class="info_title">{{t('activity_now')}}</p>
                    <p class="content">12123123啊实打实大苏打</p>
                </div>
                <div class="edit_btn invite">{{t('goto_invite')}}</div>
            </div>
            <div class="info_content cancle_border">
                <div class="info_item">
                    <p class="info_title">{{t('bind_user')}}</p>
                    <div class="imglist">
                        <img src="@/assets/pc/mine/wechat.svg" alt="">
                        <img src="@/assets/pc/mine/google.svg" alt="">
                        <img src="@/assets/pc/mine/facebook.svg" alt="">
                        <img src="@/assets/pc/mine/telegram.svg" alt="">
                    </div>
                </div>
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
        .avatar {
            margin-top: 24px;
            width: 72px;
            height: 72px;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .info_content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
            padding-bottom: 24px;
            border-bottom: 1px dotted #DCE0E6;
            .info_item {
                .info_title {
                    color:  #838C99;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 22px; /* 157.143% */
                }
                .content {
                    color: #1D222A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
                .imglist {
                    margin-top: 12px;
                    display: flex;
                    align-items: center;
                    gap:24px
                }
            }
            .edit_btn {
                padding: 8px 24px;
                border-radius: 8px;
                border: 1px solid  #E94C89;
                color: #E94C89;
                color: #E94C89;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px; /* 150% */
                cursor: pointer;
            }
            .invite {
                color: #fff;
                background: #E94C89;
            }
        }
        .cancle_border {
            border: none;
        }
    }
}
</style>