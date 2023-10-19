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
const menuList = computed(()=>[
  {name:t('home'),url:'/home',pathName:["home","goods","pay"]},
  {name:t('ticket'),url:'/ticket',pathName:["ticket"]},
  {name:t('promotion'),url:'/promotion',pathName:["promotion"]},
  {name:t('order'),url:'/order',pathName:["order"]},
  {name:t('mine'),url:'/mine',pathName:["mine"]},
])
const langList = ref([
    {name:'简体中文',value:'zh',text:'简体中文'},
    {name:'English',value:'en',text:'English'}
])
const lang = ref('');
lang.value = localStorage.getItem('lang') || 'zh'
let chosedIndex = ref<number>(0)
let showLange = ref<boolean>(false)
const choesMenu = (item:any,index:number)=>{
  chosedIndex.value = index;
  router.push(item.url)
}
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
console.log(route,"123123")
</script>

<template>
  <div :class="isMobile ? 'big_box':'big_box pc_big_box'" :style="changeHeader ? 'background:#F1F3F4':''">
    <div v-if="isMobile" class="m_container_box">
        mobile header
    </div>
    <div class="norem-container_box" v-else>
        <div class="center_box">
          <div class="left">
            <img src="@/assets/pc/header/logo.png" alt="">
          </div>
          <div class="center">
            <img src="@/assets/pc/header/share.png" alt="">
            <p>{{t('share_content')}}</p>
          </div>
        </div>
        <div class="right">
            <div class="right_menu">
              <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="item.pathName.includes(route.name) ? 'chosed':''" @click="choesMenu(item,index)">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
            <div class="avatar">
              <img src="@/assets/pc/header/avatar.png" alt="">
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
</template>

<style scoped lang="scss">
.norem-container_box {
  width: 100%;
  height: 96px;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 199;
  .center_box {
    width: 58%;
    display: flex;
    justify-content: space-between;
    .left {
      cursor: pointer;
    }
    .center {
      height: 24px;
      border-radius: 24px;
      padding: 12px 24px;
      background:  #F8E71C;
      display: flex;
      gap: 10px;
      align-items: center;
      p {
        color:  #1D222A;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }
  .right {
    display: flex;
    gap: 36px;
    align-items: center;
    .right_menu {
      height: 48px;
      background: #F5F5F5;
      border-radius: 4px;
      padding: 4px;
      box-sizing: border-box;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        li {
          height: 100%;
          padding: 8px 24px;
          border-radius: 4px;
          display: flex;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          p {
            color:  #838C99;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
          }
        }
        .chosed {
          background: #fff;
          border-radius: 4px;
          p {
            color: #1D222A;
          }
        }
      }
    }
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
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
</style>
