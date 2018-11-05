<template>
    <div class="slider">
        <aside class="main">
            <div class="userinfo">
                <div class="author">个人信息</div>
                <div class="wrap">
                    <router-link :to="{
                        name:'userinfo',
                        params:{
                            name:authordata.loginname
                        }
                    }">
                        <img :src="authordata.avatar_url" alt="">
                    </router-link>
                    <router-link class="change-style" :to="{
                        name:'userinfo',
                        params:{
                            name:authordata.loginname
                        }
                    }">
                        <span>{{authordata.loginname}}</span>
                    </router-link>
                </div>
                <div class="score">
                    <span>积分:</span>
                    <span>{{authordata.score}}</span>
                </div>
                <p></p>
            </div>
           
            <div class="community">
                <div class="friend">友情社区</div>
                <a href="https://ruby-china.org/" target="_blank"><img src="../../assets/1.png" alt=""></a>
                <a href="http://golangtc.com/" target="_blank"><img src="../../assets/2.png" alt=""></a>
                <a href="http://phphub.org/" target="_blank"><img src="../../assets/3.png" alt=""></a>
            </div>
            <div class="qrcode">
                <div class="qrcodeHead">客户端二维码</div>
                <div class="image">
                    <img src="../../assets/4.png" alt="">
                </div>
               
                <span class="url"><a href="https://github.com/soliury/noder-react-native" target="_blank"> 客户端源码地址</a></span>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name:'Aside',
    data(){
        return{
            authordata:{}
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((res)=>{
                this.authordata=res.data.data
                console.log(this.authordata)
            })
            .catch((err)=>{
                console.log(err)
            })
        },
    },
    beforeMount(){
        this.getData()
    },
    watch:{
        '$route'(to,from){
            this.getData()
        }
    }
}
</script>

<style scoped>
    .slider{
        width: 30%;
        margin: 16px 1%;
        border-radius: 5px;
        color: #778087;
    }
    .main>div{
        margin-bottom: 10px; 
    }
    .main .userinfo{
        background-color:#ffff;
        font-size: 14px;
    }
    .main .userinfo .author{
        height: 40px;
        background-color: #f6f6f6;
        padding: 10px 10px;
    }
    .main .userinfo .wrap img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-left: 10px;
        
    }
    .main .userinfo .wrap span{
        display: inline-block;
        margin-left: 10px; 
        margin-top: 10px;
    }
    .main .userinfo .score{
        margin-left: 10px;
        padding: 5px 0;
    }
    .main .userinfo p{
        padding-top: 5px;
        padding-bottom: 25px;
    }
    /* **** */
     .main .community{
        height: 200px;
        background-color:#ffff;
    }
    .main .community .friend{
        height: 40px;
        padding: 12px 10px;
        background-color: #f6f6f6;
    }
     .main .community a{
        padding-left: 10px;
        margin: 0;
        padding: 0;
     }
    .main .community a img{
        display: block;
        height: 36px;
        width: 130px;
        margin: 10px 0;
        padding-left: 10px;
    }
    /*  */
    .main .qrcode{
        height: 300px;
        background-color:#ffff;
    }
    .main .qrcode .qrcodeHead{
        height: 40px;
        padding: 12px 10px;
        background-color: #f6f6f6;
    }
    .main .qrcode .image{
        margin-left: 12px;
        margin-top: 20px;
    }
    .main .qrcode .url{
        display: block;
    }
    .main .qrcode .url a{
        display: inline-block;
        margin-left: 60px;
        font-size: 14px;
        color: #778087;
    }
    .change-style{
        color: #778087;
    }
  
</style>
