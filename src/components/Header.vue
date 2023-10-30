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
  {name:t('help_center'),url:'/order',pathName:["order"]},
  {name:t('about_us'),url:'/mine',pathName:["mine"]},
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
let show = ref(false)
</script>

<template>
  <div :class="isMobile ? 'big_box':'big_box pc_big_box'">
    <div v-if="isMobile" class="m_container_box">
      <div class="left">
        <img src="@/assets/mobile/header/menu_icon.svg" alt="" @click="show = !show">
        <img src="@/assets/pc/header/logo.png" alt="" class="logo">
      </div>
      <div class="right">
          <div class="avatar">
            <img src="@/assets/pc/header/avatar.png" alt="">
          </div>
      </div>
      <div :class="show ? 'pop_upbox pop_upbox_show':'pop_upbox'">
        <div class="mask_box" @click="show = false"></div>
        <div class="container_box">
            <div class="top_menu">
              <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="item.pathName.includes(route.name) ? 'chosed':''" @click="choesMenu(item,index)">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
            <div class="bottom_language">
               <div v-for="(item,index) in langList" :key="index" class="language_item">{{item.name}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="norem-container_box" v-else>
      <div class="top_pro">
        <img src="@/assets/pc/header/share.png" alt="">
        <p class="content">{{$t('share_content')}}</p>
        <img src="@/assets/pc/header/share.png" alt="">
      </div>
      <div class="top_header_box">
        <div class="center_box">
          <div class="left">
            <img src="@/assets/pc/header/logo.png" alt="">
          </div>
          <!-- <div class="center">
            <img src="@/assets/pc/header/share.png" alt="">
            <p>{{t('share_content')}}</p>
          </div> -->
        </div>
        <div class="center">
            <div class="right_menu">
              <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="item.pathName.includes(route.name) ? 'chosed':''" @click="choesMenu(item,index)">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
        </div>
        <div class="right">
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
  </div>
</template>

<style scoped lang="scss">
.norem-container_box {
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 199;
  .top_pro {
      width: 100%;
      height: 60px;
      background: linear-gradient(90deg, #FFEC45 0%, #E948AA 51.56%, #8455FF 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      .content {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
      }
    }
  .top_header_box {
     padding: 0 24px;
    display: flex;
    justify-content: space-between;
    height: 96px;
    align-items: center;

    .center_box {
      display: flex;
      justify-content: space-between;
      .left {
        cursor: pointer;
      }
    }
    .center {
      display: flex;
      gap: 48px;
      align-items: center;
      .right_menu {
        height: 48px;
        // background: #F5F5F5;
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

    }
    .right {
      display: flex;
      align-items: center;
      gap: 36px;
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
}
.m_container_box {
  width: 100%;
  height: 80px;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 3199;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  .left {
    display: flex;
    gap: 20px;
    align-items: center;
    position: relative;
    z-index: 999;
    .logo {
      width: 116px;
      height: 30px;
    }
  }
  .pop_upbox {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    transition:height 1s ease;
    height: 0;
    overflow: hidden;
    .mask_box {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, .7);
      transition:opacity .5s ease;
      opacity: 0;
      height: 0;
    }
    .container_box {
      position: absolute;
      height: 0;
      transition:height 1s ease;
      top: 79px;
      width: 100%;
      left: 0;
      background: #fff;
      overflow: hidden;
      padding: 0 16px;
      box-sizing: border-box;
      .top_menu {
        position: relative;
        ul {
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 48px;
            opacity: 0;
            transition:opacity 1s ease;
            p {
              color: #838C99;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px; /* 150% */
            }
          }
        }
        &::after {
          content: '';
          width: 100%;
          height: 1px;
          border-top: 2px dotted #EDEFF2;
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }
      .bottom_language {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 23px;
        .language_item {
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
      }
    }
  }
  .pop_upbox_show {
    height: 100vh;
    z-index: 123;
    transition:height 1s ease;
    .mask_box {
      opacity: 1;
      transition:opacity .5s ease;
      height: 100vh;
    }
    .container_box {
      transition:height 1s ease;
      height: 410px;
      .top_menu {
        ul {
          li {
            opacity: 1;
            transition:height 1s ease;
          }
        }
      }
    }
  }
}
</style>
