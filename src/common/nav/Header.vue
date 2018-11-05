<template>
    <div id="header">
        <div class="header">
            <div class="wrapper">
                <router-link :to="{
                    name: 'root'
                }">
                    <img src="../../assets/cnodejs_light.svg" alt="">
                </router-link>
                <!-- <div class="search">
                    <span class="icon">
                        <img class="search1" src="@/assets/search.svg" alt="">
                        <img class="search2" src="@/assets/search2.svg" alt="">
                    </span>
                   
                    <input type="text">
                </div> -->
                    <div class="nav">
                        <router-link :to="{
                        name: 'root'
                    }">
                        <span><a href="#">首页</a> </span>
                    </router-link>
                    <span><a href="#">新手入门</a></span>
                    <span><a href="#">API</a></span>
                    <span><a href="#">关于</a></span>
                    <span><a href="#">注册</a></span>
                    <span><a href="#">登录</a></span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'Header'    
}
</script>

<style scoped>
    .header{
        background-color: #444444;
        padding: 5px 0;
    }
    .header .wrapper{
        display: flex;
        padding: 4px 0;
        justify-content: space-between;
    }
    .header .wrapper img{
        width: 120px;
        height: 30px;
        margin-left: 3%;
        margin-bottom: 2px; 
    }
    
    .header .wrapper .nav{
         margin-right: 3%;
    }
    .header .wrapper .nav span{
        display: inline-block;
        text-align: center;
        line-height: 29px;
        margin: 0 12px;
    }
    .header .wrapper .nav span a{
         font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
         color: #fff;
         font-size: 13px;
    }
   
</style>
