<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
const { t } = useI18n()
const isMobile = inject('isMobile')
const router = useRouter()
const getImg = async()=>{
   let res = await getAuth()
}
const toUrl = (url)=>{
   router.push(url)
}
const titleList = ref([
   {name:t('all'),id:1},
   {name:t('video'),id:2},
   {name:t('music'),id:3},
   {name:t('storage'),id:4},
   {name:t('learn'),id:5},
   {name:t('develop'),id:6},
   
])
const chosedIndex = ref(0)
const choseTitle = (item,index)=>{
   chosedIndex.value = index
}
const listsArr = ref([
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img},
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img},
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img},
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img},
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img},
   {name:'Netflix',buyNum:'5296',specials:['全球解锁','4K高清','支持杜比','单月起售'],price:'14.9',img:Img}
])
</script>

<template>
   <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
      <div class="top_content">
         <p class="title">{{$t('home_title')}}</p>
         <p class="sub_title">{{$t('home_sub_title')}}</p>
      </div>
      <div class="title_list">
         <ul>
            <li v-for="(item,index) in titleList" :key="index" :class="chosedIndex == index ? 'active':''" @click="choseTitle(item,index)">
               <p>{{item.name}}</p>
            </li>
         </ul>
      </div>
      <div class="goods_box">
         <ul>
            <li v-for="(item,index) in listsArr" :key="index">
               <div class="top">
                  <img :src="item.img" alt="">
                  <div class="right">
                     <p class="name">{{item.name}}</p>
                     <p class="users">{{item.buyNum}} 人购买</p>
                  </div>
               </div>
               <div class="center">
                  <p v-for="(ite,inx) in item.specials" :key="inx">{{ite}}</p>
               </div>
               <div class="bottom">
                  <div class="left">￥{{item.price}}</div>
                  <div class="buy">立即购买</div>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>

<style scoped lang="scss">
.norem-big_box {
   width: 1200px;
   margin: 0 auto;
   .top_content {
      margin-top: 176px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
         color:  #1D222A;
         text-align: center;
         font-size: 64px;
         font-style: normal;
         font-weight: 600;
         line-height: 80px; 
      }
      .sub_title {
         width: 450px;
         text-align: center;
         margin-top: 8px;
         color:  #838C99;
         text-align: center;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 24px; /* 150% */
      }
   }
   .title_list {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      ul {
         display: flex;
         li {
            p {
               padding: 8px 24px;
               color:  #838C99;
               font-family: PingFang SC;
               font-size: 16px;
               font-style: normal;
               font-weight: 600;
               line-height: 24px; /* 150% */
               cursor: pointer;
            }
         }
         .active {
            p {
               color:  #1D222A;
               font-size: 16px;
               font-style: normal;
               font-weight: 600;
               line-height: 24px; /* 150% */
               border-radius: 8px;
               background:  #F5F5F5;
            }
         }
      }
   }
   .goods_box {
      width: 1200px;
      margin: 0 auto;
      margin-top: 48px;
      margin-bottom: 100px;
      ul {
         width: 100%;
         display: flex;
         justify-content: space-around;
         align-items: center;
         flex-wrap: wrap;
         li {
            border-radius: 12px;
            padding: 24px;
            box-sizing: border-box;
            border: 1px solid  #DCE0E6;
            background: #FFF;
            box-shadow: 0px 6px 32px 0px rgba(87, 76, 80, 0.02), 0px 16px 48px 0px rgba(87, 76, 80, 0.02);
            width: 32%;
            margin-bottom: 24px;
            .top {
               display: flex;
               gap: 16px;
               img {
                  width: 72px;
                  height: 72px;
               }
               .right {
                  .name {
                     color: #1D222A;
                     margin-bottom: 8px;
                     font-size: 24px;
                     font-style: normal;
                     font-weight: 600;
                     line-height: 32px; /* 133.333% */
                  }
                  .users {
                     color: #838C99;
                     font-family: PingFang SC;
                     font-size: 16px;
                     font-style: normal;
                     font-weight: 500;
                     line-height: 24px; /* 150% */
                  }
               }
            }
            .center {
               margin-top: 28px;
               display: flex;
               gap: 8px;
               p {
                  padding: 8px;
                  border-radius: 8px;
                  background:  #FFE8ED;
                  color:  #E94C89;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px; /* 157.143% */
               }
            }
            .bottom {
               display: flex;
               justify-content: space-between;
               align-items: center;
               margin-top: 36px;
               .left {
                  color:  #EA0010;
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 40px; /* 125% */
               }
               .buy {
                  padding: 8px 16px;
                  cursor: pointer;
                  border-radius: 8px;
                  background: #E94C89;
                  color:  #FFF;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 24px; /* 150% */
               }
            }
         }
      }
   }
}
</style>
