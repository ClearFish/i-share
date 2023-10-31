<script setup lang="ts">
import { ref,computed,inject, watch } from 'vue'
import {ElPopover} from "element-plus"
import { useI18n } from 'vue-i18n'
import { useRouter,useRoute } from "vue-router";
const { t } = useI18n()
const { locale } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const route = useRoute()
const langList = ref([
    {name:'简体中文',value:'zh',text:'简体中文'},
    {name:'English',value:'en',text:'English'}
])
const lang = ref('');
lang.value = localStorage.getItem('lang') || 'zh'
let showLange = ref<boolean>(false)
const choseLang =(val:string)=>{
    locale.value = val;
    localStorage.setItem('lang', val);
    showLange.value = false
    lang.value = val
    router.go(0)
}
const showChose = ()=>{
    showLange.value = !showLange.value
}
</script>

<template>
  <div :class="isMobile ? 'big_box':'big_box pc_big_box'">
    <div class="norem-container_box">
      <div class="top_header_box">
        <div class="center_box">
          <div class="left">
            <img src="@/assets/pc/header/logo.png" alt="">
          </div>
        </div>
        <div class="right">
          <div class="avatar">
            <div class="account" v-if="route.fullPath == '/login'">
              <p>{{t('no_account')}}?</p>
              <p class="create">{{t('create_account')}}</p>
            </div>
            <div class="account" v-else>
              <p>{{t('has_account')}}?</p>
              <p class="create">{{t('login_now')}}</p>
            </div>
          </div>
          <div class="language">
            <el-popover
                placement="bottom"
                :width="200"
                trigger="click"
                :visible="showLange"
            >
                <template #reference>
                    <div class="lang_box" @click="showChose">
                        <img src="@/assets/pc/header/lang_logo.png" alt="">
                        <p>{{langList.find(item=>item.value == lang).name}}</p>
                    </div>
                </template>
                <div class="language">
                    <p v-for="(item,index) in langList" 
                        :key="index"
                        style="height: 36px;
                                line-height: 36px;
                                cursor: pointer;
                                font-size:14px
                                "
                        @click="choseLang(item.value)"
                    >{{item.name}}</p>
                    
                </div>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.big_box {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.norem-container_box {
  width: 100%;
  .top_header_box {
      width: 100%;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      height: 96px;
      align-items: center;
      box-sizing: border-box;
      .center_box {
        display: flex;
        justify-content: space-between;
        .left {
            cursor: pointer;
        }
      }
      .right {
        display: flex;
        align-items: center;
        gap: 36px;
      .avatar {
        .account {
            display: flex;

          }
          p {
            color: #1D222A;
            /* 16px · 400 */
            font-family: PingFang SC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
          }
          .create {
            color: #016DF3;
            cursor: pointer;
          }
      }
      .language {
          cursor: pointer;
          .lang_box {
            display: flex;
            gap: 8px;
            align-items: center;
            img {
                width: 24px;
                height: 24px;
            }
            p {
                color:  #838C99;
                font-size: 16px;
            }
          }
        }
      }
  }
}
</style>
