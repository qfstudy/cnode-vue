<template>
  <div id="app">
    <Header></Header>
    <div id="main">
      <router-view class="left" name="main"></router-view>
      <router-view class="right" name="aside"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './common/nav/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style  scoped>
    #main{
      display: flex;
    }
  
  @media(max-width: 600px){
    #main .right{
        display: none;
    }
    #main .left{
      width: 100%;
    }
  }
</style>
