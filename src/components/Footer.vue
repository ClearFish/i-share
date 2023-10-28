<template>
    <div class="big_box">
        <div v-if="isMobile" class="m_container_box">
           mobile footer
        </div>
        <div class="norem-container_box" v-else>
           <div class="content_box">
            <div class="left">
                <img src="@/assets/pc/header/logo.png" alt="">
                <p>Copyright © 2023 ishare</p>
            </div>
             <div class="right">
                <div class="links">
                    <ul>
                        <li v-for="(item,index) in linksList" :key="index">
                            <img :src="item.img" alt="">
                        </li>
                    </ul>
                </div>
                <ul class="menu_box">
                    <li v-for="(item,index) in menuList" :key="index"  @click="toUrl(item.url)">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
           </div>
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
  {name:t('home'),url:'/home',pathName:["home","goods","pay"]},
  {name:t('ticket'),url:'/ticket',pathName:["ticket"]},
  {name:t('promotion'),url:'/promotion',pathName:["promotion"]},
  {name:t('order'),url:'/order',pathName:["order"]},
  {name:t('mine'),url:'/mine',pathName:["mine"]},
  {name:t('help_center'),url:'/order',pathName:["order"]},
  {name:t('about_us'),url:'/mine',pathName:["mine"]},
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
        height: 254px;
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
            justify-content: space-between;
            align-items: center;
            .left {
                img {
                    cursor: pointer;
                }
                display: flex;
                flex-direction: column;
                gap: 88px;
                color:  #4E596A;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 157.143% */
            }
            .right {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 88px;
                .menu_box {
                    display: flex;
                    gap: 48px;
                    p {
                         color:  #4E596A;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px; /* 157.143% */
                    }
                }
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
    }
}
</style>