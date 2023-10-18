<template>
    <div :class="isMobile ? 'norem-info_box m_info_box':'norem-info_box'">
        <div class="self_box">
            <p class="title">{{t('account_setting')}}</p>
            <div class="action_list">
                <p class="action_title">{{t('nick_name')}}</p>
                <div class="action">
                    <input />
                    <div class="btn">{{t('edit_nick')}}</div>
                </div>
            </div>
            <div class="action_list">
                <p class="action_title">{{t('nick_name')}}</p>
                <div class="action">
                    <input />
                    <div class="btn">{{t('edit_nick')}}</div>
                </div>
            </div>
            <div class="action_list add_border">
                <p class="action_title">{{t('nick_name')}}</p>
                <div class="action">
                    <input />
                    <div class="btn">{{t('edit_nick')}}</div>
                </div>
            </div>
            <div class="bottom">
                <p class="action_title">{{t('register_time')}}</p>
                <p class="time">2023-09-09</p>
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
    }
    .action_list {
        margin-top: 24px;
        .action_title {
            color:  #838C99;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
        }
        .action {
            width: 400px;
            display: flex;
            gap: 24px;
            height: 40px;
            align-items: center;
            .btn {
                border-radius: 8px;
                border: 1px solid  #E94C89;
                padding: 8px 24px;
                box-sizing: border-box;
                color:  #E94C89;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px; /* 150% */
                cursor: pointer;
            }
            input {
                width: 258px;
                height: 40px;
                border: none;
                outline: none;
                border-radius: 8px;
                background: #F5F5F5;
                padding:0 24px;
                box-sizing: border-box;
                color:  #838C99;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px; /* 150% */
            }
        }
    }
    .add_border {
        border-bottom: 1px dotted #DCE0E6;
        padding-bottom: 24px;
    }
    .bottom {
        padding-top: 24px;
        .action_title {
            color:  #838C99;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
        }
        .time {
            color:  #1D222A;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
        }
    }
}
</style>