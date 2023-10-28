<script setup>
import { computed, onMounted, reactive, ref, inject  } from 'vue'
import { useI18n } from 'vue-i18n'
import {getAuth} from "@/api/index.js"
import { useRouter } from "vue-router";
import Img from '@/assets/pc/home/neft.svg'
import Img1 from '@/assets/pc/home/img1.svg'
import Img2 from '@/assets/pc/home/img2.svg'
import Img3 from '@/assets/pc/home/img3.svg'
import Img4 from '@/assets/pc/home/img4.svg'
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
const featsList = ref([
   {title:t('laws_service'),content:t('laws_service_content'),img:Img1},
   {title:t('product_plan'),content:t('product_plan_cotnent'),img:Img2},
   {title:t('for_free'),content:t('for_free_content'),img:Img3},
   {title:t('product_data'),content:t('product_data_content'),img:Img4}
])
const quesList = ref([
   {title:'这项服务的费用是多少？',answer:"是的，共享订阅是合法的。还有很多人没有等到这样做。内容或服务提供商本身允许您共享，例如带有 Premium 家庭或双人计划的 Spotify。如有疑问，请查看这些服务的条款和条件或我们的在线指南。 IShare 仅提供管理这些共享组的退款的功能，并使您更轻松、更安全。"},
   {title:'这项服务的费用是多少？',answer:"是的，共享订阅是合法的。还有很多人没有等到这样做。内容或服务提供商本身允许您共享，例如带有 Premium 家庭或双人计划的 Spotify。如有疑问，请查看这些服务的条款和条件或我们的在线指南。 IShare 仅提供管理这些共享组的退款的功能，并使您更轻松、更安全。"},
   {title:'这项服务的费用是多少？',answer:"是的，共享订阅是合法的。还有很多人没有等到这样做。内容或服务提供商本身允许您共享，例如带有 Premium 家庭或双人计划的 Spotify。如有疑问，请查看这些服务的条款和条件或我们的在线指南。 IShare 仅提供管理这些共享组的退款的功能，并使您更轻松、更安全。"},
   {title:'这项服务的费用是多少？',answer:"是的，共享订阅是合法的。还有很多人没有等到这样做。内容或服务提供商本身允许您共享，例如带有 Premium 家庭或双人计划的 Spotify。如有疑问，请查看这些服务的条款和条件或我们的在线指南。 IShare 仅提供管理这些共享组的退款的功能，并使您更轻松、更安全。"},
   {title:'这项服务的费用是多少？',answer:"是的，共享订阅是合法的。还有很多人没有等到这样做。内容或服务提供商本身允许您共享，例如带有 Premium 家庭或双人计划的 Spotify。如有疑问，请查看这些服务的条款和条件或我们的在线指南。 IShare 仅提供管理这些共享组的退款的功能，并使您更轻松、更安全。"},
])
const activeNames = ref([0])
const buyNow = (item)=>{
   router.push({
      path:"/goods",
      query:{id:item.buyNum}
   })
}
</script>

<template>
   <div :class="isMobile ? 'norem-big_box m_big_box':'norem-big_box'">
      <div class="top_content">
         <p class="title">{{$t('home_title')}}</p>
         <!-- <p class="sub_title">{{$t('home_sub_title')}}</p> -->
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
                  <div class="buy" @click="buyNow(item)">立即购买</div>
               </div>
            </li>
         </ul>
      </div>
      <div class="intro_box">
         <p class="title">在i.share，您能十分便捷订阅</p>
         <p class="title">Netflix高级会员、YouTube家庭组会、Spotify会员</p>
         <p class="title">多种国际流媒体会员账号</p>
         <p class="content">非常感谢您对我们的支持和信任！我们将一如既往地秉持对用户负责的态度，不断努力提供高品质、高稳定的产品和服务。
我们深知用户的需求不断变化，因此我们将继续创新和发展，以满足用户的需求。我们致力于为用户提供更便捷、更优质的服务和产品，让您的体验更加出色和满意。
感谢您对我们的信任和支持，我们将与您共同迎接更美好的未来。如果您有任何问题或建议，请随时与我们联系。祝愿您拥有愉快的使用体验！</p>
         <div class="bottom_intro">
            <div class="linx_cont"></div>
            <div class="know_more">了解更多</div>
         </div>
      </div>
      <div class="only_feats">
         <div class="only_box">
            <p class="title">{{t('only_title')}}</p>
            <p class="subtitle">我们为将为您提供专属服务，为您的购物体验提供无忧保障</p>
            <div class="lists">
               <ul>
                  <li v-for="(item,index) in featsList" :key="index">
                     <div class="container">
                        <img :src="item.img" alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="cont">{{item.content}}</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="only_feats ques_cont">
         <p class="title">{{t('normal_ques')}}</p>
          <el-collapse v-model="activeNames" @change="handleChange">
             <el-collapse-item :title="item.title" :name="index" v-for="(item,index) in quesList" :key="index">
               <div class="item_content">{{item.answer}}</div>
             </el-collapse-item>
          </el-collapse>
      </div>
   </div>
</template>

<style scoped lang="scss">
.norem-big_box {
   width: 100%;
   margin: 0 auto;
   min-height: 100vh;
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
                  background:  #F5F5F5;
                  color:  #838C99;
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
                  font-weight: 700;
                  line-height: 40px; /* 125% */
               }
               .buy {
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
   }
   .intro_box {
      width: 1200px;margin: 0 auto;
      margin-bottom: 160px;
      .title {
         color:  #1D222A;
         font-size: 32px;
         font-style: normal;
         font-weight: 400;
         line-height: 120%; /* 38.4px */
         margin-bottom: 16px;
      }
      .content {
         color:  #1D222A;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 32px; /* 200% */
         width: 718px;
      }
      .bottom_intro {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 100%;
         margin-top: 32px;
         gap: 48px;
         width: 718px;
         .know_more {
            width: 160px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url("@/assets/pc/home/btn_empty.svg") no-repeat center;
            cursor: pointer;
            color:  #1D222A;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 150% */
         }
         .linx_cont{
            flex: 1;
            height: 1px;
            background: #838C99;
         }
      }
   }
   .only_feats {
      width: 100%;
      background: linear-gradient(180deg, #3B8FDD 0%, #FFC5F3 100%);
      padding: 160px 0;
      .only_box {
         width: 1200px;
         margin: 0 auto;
         .title {
            color:  #fff;
            font-size: 48px;
            font-style: normal;
            font-weight: 600;
            line-height: 56px; /* 116.667% */
            margin-bottom: 24px;
            text-align: center;
         }
         .subtitle {
            color: #FFF;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
         }
         .lists {
            width: 100%;
            margin-top: 48px;
            ul {
               width: 100%;
               display:flex;
               justify-content: space-between;
               flex-wrap: wrap;
               li {
                  width: 49%;
                  box-sizing: border-box;
                  padding: 24px;
                  border-radius: 12px;
                  margin-bottom: 24px;
                  .container {
                     // background: #fff;
                     border-radius: 12px;
                     padding: 24px;
                     box-sizing: border-box;
                     img {
                        margin-bottom: 12px;
                     }
                     p {
                        text-align: left;
                     }
                     .title {
                        color:  #1D222A;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 28px; /* 140% */
                        margin-bottom: 10px;
                     }
                     .cont {
                        color: #4E596A;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 150% */
                     }
                  }
                  &:nth-child(1) {
                     border-radius: 12px;
                     background: linear-gradient(99deg, #B2FDF3 0%, #E2FFDA 100%);
                  }
                  &:nth-child(2) {
                     border-radius: 12px;
                     background: linear-gradient(99deg, #FCD0BB 0%, #F6D8FA 100%);
                  }
                  &:nth-child(3) {
                     border-radius: 12px;
                     background: linear-gradient(99deg, #FFF8B8 0%, #FFD2E5 100%);
                  }
                  &:nth-child(4) {
                     border-radius: 12px;
                     background: linear-gradient(99deg, #EBCCFF 0%, #A6FAFF 100%);
                  }
               }
            }
         }
      }
   }
   .ques_cont {
      width: 1200px;
      margin: 0 auto;
      margin-top: 120px;
      background: none;
      padding: 0;
      .title {
         color:  #1D222A;
         font-size: 48px;
         font-style: normal;
         font-weight: 600;
         line-height: 64px; /* 133.333% */
         text-align:center;
         margin-bottom: 48px;
      }
      ::v-deep {
         .el-collapse {
            border: none !important;
            .el-collapse-item {
               margin-bottom: 10px;
               .el-collapse-item__header {
                  color: #1D222A;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 28px; /* 140% */
                  border-radius: 12px;
                  background:  #F5F5F5;
                  padding-left: 24px;
               }
               .el-collapse-item__content {
                  border: none !important;
                  padding: 24px;
                  .item_content {
                     text-align: left;
                     color:  #4E596A;
                     font-size: 16px;
                     font-style: normal;
                     font-weight: 500;
                     line-height: 24px; /* 150% */
                  }
               }
               .el-collapse-item__wrap {
                  border-bottom: none !important;
               }
            }
         }
      }
   }
}
</style>
