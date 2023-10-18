<template>
    <div class="big_box">
        <div v-if="isMobile" class="m_container_box">
           mobile footer
        </div>
        <div class="norem-container_box" v-else>
           <div class="content_box">
            <div class="left">
                <img src="@/assets/pc/header/logo.png" alt="">
            </div>
             <div class="center_menu">
              <ul>
                <li v-for="(item,index) in menuList" :key="index"  @click="toUrl(item.url)">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
            <div class="center_menu">
                <ul>
                    <li v-for="(item,index) in otherList" :key="index"  @click="toUrl(item.url)">
                    <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="links">
                <p class="title">{{t('concact_us')}}</p>
                <ul>
                    <li v-for="(item,index) in linksList" :key="index">
                        <img :src="item.img" alt="">
                    </li>
                </ul>
            </div>
           </div>
            <div class="bg"></div>
        </div>
    </div>
</template>
<script setup>
import { ref,computed,inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
import Twitter from "@/assets/pc/footer/twitter.svg"
import Ins from "@/assets/pc/footer/ins.svg"
import Tiktok from "@/assets/pc/footer/tiktok.svg"
import Bilibili from "@/assets/pc/footer/bilibili.svg"
const { t } = useI18n()
const { locale: i18nLanguage } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const toUrl = (url)=>{
     router.push(url)
}
const menuList = computed(()=>[
  {name:t('home'),url:'/'},
  {name:t('ticket'),url:'/ticket'},
  {name:t('promotion'),url:'/promotion'},
  {name:t('order'),url:''},
  {name:t('mine'),url:''},
])
const otherList = computed(()=>[
  {name:t('terms_use'),url:''},
  {name:t('help_center'),url:''},
])
const linksList = ref([
    {name:'Twitter',img:Twitter},
    {name:'Ins',img:Ins},
    {name:'Tiktok',img:Tiktok},
    {name:'Bilibili',img:Bilibili}
])
</script>
<style lang="scss" scoped>
.big_box {
    position: relative;
    .norem-container_box {
        width: 100%;
        height: 450px;
        // position: fixed;
        bottom: 0;
        left: 0;
        overflow: visible;
        display: flex;
        align-items: flex-end;
        padding-bottom: 44px;
        .content_box {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            .left {
                padding-top: 20px;
                cursor: pointer;
            }
            .center_menu {
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    li {
                        cursor: pointer;
                        p {
                            color: #000;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 24px; 
                        }
                    }
                }
                
            }
            .links {
                p {
                    color: #000;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; 
                    text-align: left;
                    margin-bottom: 13px;
                }
                ul {
                    display: flex;
                    gap: 16px;
                    li {
                        cursor: pointer;
                    }
                }
            }
        }
        .bg {
            position: absolute;
            width: 1440px;
            height: 450px;
            left: 0;
            bottom: 0;
            background: url("@/assets/pc/footer/footer_bg.png") no-repeat center;
            background-size: 100% 100%;
        }
    }
}
</style>