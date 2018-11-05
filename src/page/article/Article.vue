<template>
    <div class="article  ">
       <div class="main">
           <section class="left">
               <div class="content">
                    <div class="header">
                        <span class="title">
                            <span>{{userdata|tabFormatter}}</span>
                            <span>{{userdata.title}}</span>
                        </span>
                        <ul class="info">
                            <li>
                                <span class="point"></span>
                                <span>发布于</span>
                                <span>{{userdata.create_at|formatDate}}</span>
                            
                                <span class="point"></span>
                                <span>作者</span>
                                <span>{{author.loginname}}</span>
                            
                                <span class="point"></span>
                                <span>{{userdata.visit_count}}</span>
                                <span>次浏览</span>
            
                                <span class="point"></span>
                                <span>来自</span>
                                <span>{{userdata|tabFormatter}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="maincontent">
                        <div class="topic">
                            <div class="text markdown-body" v-html="userdata.content"></div>
                        </div>                       
                    </div>
               </div>
               <div class="reply">
                   <div class="reply-head">
                       <span>{{replies}}</span>
                       <span>回复</span>
                    </div>
                    <ul class="reply-list" v-for="(item,key) in userdata.replies">
                        <li>
                            <router-link :to="{
                                name:'userinfo',
                                params:{
                                    name:item.author.loginname
                                }
                            }">
                                <img :src="item.author.avatar_url" alt="">
                            </router-link>
                            <div class="reply-info">
                                <router-link class="change-style" :to="{
                                    name:'userinfo',
                                    params:{
                                            name:item.author.loginname
                                        }
                                }">
                                    <span>{{item.author.loginname}}</span>
                                </router-link>
                                <span>{{key+1}}楼</span>
                                <span  class="reply-circle"></span>
                                <span>{{item.create_at|formatDate}}</span>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <span class="reply-text markdown-body" v-html="item.content"></span>
                        </li>
                    </ul>
               </div>
           </section>
       </div>
    </div>
</template>

<script>
export default {
    name:'Article',
    data(){
        return{
            userdata:{},
            author:{},
            replies: ''
            
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then((res)=>{
                this.userdata=JSON.parse(JSON.stringify(res.data.data))
                this.author=this.userdata.author
                this.replies=this.userdata.replies.length
                // console.log( this.userdata)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
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
    .article{
        width: 66%;
        margin-left: 1%;
    }
    .article .main .left{
        margin: 16px 0;
        background-color:#ffff;  
    }
    /*  */
    .article .main .left .content{
        border-radius: 5px;
    }
    .article .main .left .content .header{
        border-bottom: 1px solid #838383;
    }
    .article .main .left .content .header .title{
        display: inline-block;
        margin-left: 10px;
        padding: 12px 0;
    }
    .article .main .left .content .header .title span:nth-child(1){
        background-color: #80bd01;
        font-size: 12px;
        color: #fff;
        border-radius: 3px;
        padding: 1px 3px;
        text-align: center;
    }
    .article .main .left .content .header .title span:nth-child(2){
        font-size: 20px;
        font-weight: 700;
    }
    .article .main .left .content .header .info{
        display: flex;
        font-size: 12px;
        color: #838383;
        margin-left: 10px;
        padding: 7px 0;
    }
   
    .article .main .left .content .header .info li .point{
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #838383;
        border-radius: 50%;
        margin-bottom: 2px;
        margin-left: 2px;
    }

    .maincontent .topic .text{
        padding: 0 12px;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        color: #333;
    }

    /* ** */
    .left .reply{
        border-radius: 5px;
        font-size: 14px;
    }
    .left .reply .reply-head{
        background-color: #f1e1f3;
        padding: 9.5px 8px;
    }
    .left .reply .reply-list{
        margin: 0;
        padding: 0; 
        padding-left: 8px;
        padding-right: 1px;
        border: 0.1px solid #e1e1d1;
    }
   
    .left .reply .reply-list li{
        display: flex;
    }
    .left .reply .reply-list img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-top: 6px;
        margin-right: 10px;
    }
    .left .reply .reply-info{
        margin-top: 6px;
    }
    .left .reply .reply-info .reply-circle{
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #333;
        margin-bottom: 3px;
    }
    .left .reply .reply-list .reply-text{
        margin-top: 7px;
        padding-bottom: 30px;
    }
    .change-style{
        color: #333;
    }
   
</style>
