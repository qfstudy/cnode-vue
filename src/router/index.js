import Vue from 'vue'
import Router from 'vue-router'
import Alllist from '../page/titleList/main/Alllist'
import Slidebar from '../page/slider/Slidebar'
import Article from '../page/article/Article'
import Aside from '../page/article/Aside'
import Userinfo from '../page/userinfo/Userinfo'
import Useraside from '../page/userinfo/Useraside'
import Collect from '../page/collect/Collect'
import Good from '../page/titleList/main/Good'
import Share from '../page/titleList/main/Share'
import Ask from '../page/titleList/main/Ask'
import Job from '../page/titleList/main/Job'
import Dev from '../page/titleList/main/Dev'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main: Alllist,
        aside: Slidebar
      }
    },
    {
      name:'article',
      path:'/topic/:id&author=:name',
      components:{
        main: Article,
        aside: Aside
      }
    },
    {
      name:'userinfo',
      path:'/user/:name',
      components:{
        main:Userinfo,
        aside:Useraside
      }
    },
    {
      name:'collect',
      path:'/collect/:name',
      components:{
        main:Collect,
        aside:Useraside
      }
    },
    {
      name:'good',
      path:'/?tab=good',
      components:{
        main:Good,
        aside:Slidebar
      }
    },
    {
      name:'share',
      path:'/?tab=share',
      components:{
        main:Share,
        aside:Slidebar
      }
    },
    {
      name:'ask',
      path:'/?tab=ask',
      components:{
        main:Ask,
        aside:Slidebar
      }
    },
    {
      name:'job',
      path:'/?tab=job',
      components:{
        main:Job,
        aside:Slidebar
      }
    },
    {
      name:'dev',
      path:'/?tab=dev',
      components:{
        main:Dev,
        aside:Slidebar
      }
    }
   
  ]
})
