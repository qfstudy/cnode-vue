// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
// import 'github-markdown-css'
import './assets/github-markdown.css'
import  './assets/jquery.min.js'
// import './js/axios.min.js'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

/*********/
Vue.filter('formatDate', function (str) {
  if (!str) {
    return ''
  }
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return ''
  } else if ((time / 1000) < 30) {
    return '刚刚'
  } else if ((time / 1000) < 60) {
    return parseInt(time / 1000) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt(time / 60000) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt((time / 3600000)) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt((time / 86400000)) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})

Vue.filter('tabFormatter',function (tabdata) {
  if(tabdata.top===true){
    return '置顶'
  }else if(tabdata.good===true){
    return '精华'
  }else if(tabdata.tab==='share'){
    return '分享'
  }else if(tabdata.tab==='ask'){
    return '问答'
  }else{
    return '招聘'
  }
})
