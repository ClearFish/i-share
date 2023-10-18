<template>
    <div :class="isMobile ? 'norem-info_box m_info_box':'norem-info_box'">
        <div class="self_box">
            <p class="title">{{t('redemption_center')}}</p>
            <div class="action_list add_border">
                <p class="action_title">{{t('redemption_code')}}</p>
                <div class="action">
                    <input :placeholder="t('redemption_placeholder')"/>
                    <div class="btn">{{t('sure_redemption')}}</div>
                </div>
            </div>
            <div class="bottom">
                <p class="action_title">{{t('redemption_rules')}}</p>
                <p class="time add_margin">尊敬的用户，请您购买服务前务必谨慎阅读一下规则</p>
                <p class="time">1.每个兑换码仅可使用一次</p>
                <p class="time">2.使用正确兑换码后，无需支付可直接获得对应车票</p>
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
                color: #fff;
                padding: 8px 24px;
                box-sizing: border-box;
                background:  #E94C89;
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
                border: 1px solid #F5F5F5;
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
            color: #1D222A;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px; /* 140% */
        }
        .time {
            color:  #4E596A;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }
        .add_margin{
            margin-bottom: 32px;
            margin-top: 12px;
        }
    }
}
</style>