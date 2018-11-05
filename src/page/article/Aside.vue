<template>
    <div class="slider">
        <aside class="main">
            <div class="userinfo">
                <div class="author">作者</div>
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
            <div class="topic">
                <div class="header">作者最近主题</div>
                <div class="title" v-for="topic in recentTopic">
                    <router-link class="change-style" :to="{
                        name:'article',
                        params:{
                            id:topic.id,
                            name:topic.author.loginname
                        }
                    }">
                        <span class="recent-topic">{{topic.title}}</span>
                    </router-link>
                </div>
            </div>
            <div class="topic1">
                <div class="header1">作者最近回复</div>
                <div class="title1" v-for="reply in recentReply">
                    <router-link class="change-style" :to="{
                        name:'article',
                        params:{
                            id:reply.id,
                            name:reply.author.loginname
                        }
                    }">
                        <span class="reply-title">{{reply.title}}</span>
                    </router-link>
                </div>
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
    computed:{
         recentTopic(){
            if(this.authordata.recent_topics){
                return this.authordata.recent_topics.slice(0,5);
            }
        },
        recentReply(){
            if(this.authordata.recent_replies){
                return this.authordata.recent_replies.slice(0,5);
            }
        }
    },
    beforeMount(){
        this.getData()
    },
}
</script>

<style scoped>
    .change-style{
        color: #778087;
    }
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
    .main .topic{
        height: 220px;
        background-color:#ffff;
        font-size: 14px;
    }
    .main .topic .header{
        height: 40px;
        background-color: #f6f6f6;
        padding: 10px;
    }
    .main .topic .title{
        display: flex;
        flex-direction: column;
         text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .main .topic .title span.recent-topic{
        display: inline-block;
        padding: 6px 10px;
        width: 98%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    /* ***** */
    .main .topic1{
        height: 220px;
        background-color:#ffff;
        font-size: 14px;
    }
    .main .topic1 .header1{
        height: 40px;
        background-color: #f6f6f6;
        padding: 10px;
    }
    .main .topic1 .title1{
        display: flex;
        flex-direction: column;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .main .topic1 .title1 span.reply-title{
        display: inline-block;
        padding: 6px 10px;
        width: 98%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
  
</style>
