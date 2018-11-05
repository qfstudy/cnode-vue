<template>
    <div id="userinfo">
        <section class="left">
            <div class="user">
                <span class="navbar">
                    <router-link class="change-color" :to="{
                        name:'root'
                    }">
                        <span>主页</span>
                    </router-link>
                </span>
                <ul>
                    <li class="author">
                        <img :src="userinfodata.avatar_url" alt="">
                        <span class="username">{{userinfodata.loginname}}</span>
                    </li>
                    <li class="score">
                        <span>{{userinfodata.score}}</span>
                        <span>积分</span>
                    </li>
                    <!-- target="_blank" -->                   
                    <li class="topic-clection">
                        <router-link class="change-style" target="_blank" :to="{ 
                            name:'collect',
                            params:{
                                name:userinfodata.loginname
                            }
                        }">
                            <span>{{collectdata.length}}个话题收藏</span>
                        </router-link>
                    </li>
                    <li class="time">
                        <span>注册时间</span>
                        <span>{{userinfodata.create_at|formatDate}}</span>
                    </li>
                </ul>
            </div>
            <div class="topic">
                <span class="topic-theam">最近创建的话题</span>
                <ul v-for="item in userinfodata.recent_topics">
                    <li class="list">
                        <span class="wrapper">
                            <router-link :to="{
                                name:'userinfo',
                                params:{
                                    name:item.author.loginname
                                }
                            }">
                                <img :src="item.author.avatar_url" alt="">
                            </router-link>
                            <!-- <span class="visit-count">
                                <span>52</span>
                                <span>/2340</span>
                            </span> -->
                            <!-- <span class="tab">置顶</span> -->
                                <span class="title-wrap">
                                    <router-link class="change-style" :to="{
                                        name:'article',
                                        params:{
                                            name:item.author.loginname,
                                            id:item.id
                                        }
                                    }">
                                        <span class="title">{{item.title}}</span>
                                     </router-link>
                                </span>
                        </span>
                        <span class="wrap">
                            <span class="topic-time">{{item.last_reply_at|formatDate}}</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="topic">
                <span class="topic-theam">最近参与的话题</span>
                <ul v-for="item in userinfodata.recent_replies">
                    <li class="list">
                        <span class="wrapper">
                            <router-link :to="{
                                name:'userinfo',
                                params:{
                                    name:item.author.loginname
                                }
                            }">
                                <img :src="item.author.avatar_url" alt="">
                            </router-link>
                            <!-- <span class="visit-count">
                                <span>52</span>
                                <span>/2340</span>
                            </span> -->
                            <!-- <span class="tab">置顶</span> -->
                            <span class="title-wrap">
                                <router-link class="change-style" :to="{
                                    name:'article',
                                    params:{
                                        name:item.author.loginname,
                                        id:item.id
                                    }
                                }">
                                    <span class="title">{{item.title}}</span>
                                </router-link>
                            </span>
                        </span>
                        <span class="wrap">
                            <span class="topic-time">{{item.last_reply_at|formatDate}}</span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'Userinfo',
    data(){
        return{
            userinfodata:{},
            collectdata:[]
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((res) => {
                this.userinfodata=res.data.data
                console.log(this.userinfodata)
            })
            .catch((err) => {
                console.log(err)
            });
        },
        getCollect(){
            this.$http.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`)
            .then((res) => {
                this.collectdata=res.data.data
                // console.log(this.collectdata)
            })
            .catch((err) => {
                console.log(err)
            });
        }
    },
    beforeMount(){
        this.getData()
        this.getCollect()
    },
    watch:{
        '$route'(to,from){
            this.getData()
            this.getCollect()
        }
    }
}
</script>

<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    #userinfo{
        width: 66%;
    }
    .left .user{
        background: #fff;
        margin: 16px 1%;
        border-radius: 5px;
        color: #778087;
    }
    .left .user .navbar{
        display: inline-block;
        width: 100%;
        background-color: #f6f6f6;
        border-bottom: 1px solid #e1e1e1;
        font-size: 16px;
        padding: 9px 0;
        padding-left: 10px;
        color: #80bd01;
    }
    .change-color{
        color: #80bd01;
    }
    
    .left .user ul{
        font-size: 14px;
    }
    .left .user ul .author img{
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-left: 10px;
    }
    .left .user ul .author .username{
        display: inline-block;
        padding: 18px 10px;
    }

    .left .user ul .score{
        display: inline-block;
        margin-left: 10px;
        padding: 2px 0;
    }
    .left .user ul .topic-clection{
        margin-left: 10px;
        padding-top: 5px;
    }
    
     .left .user ul .time{
        margin-left: 10px;
        padding: 5px 0;
    }
    /* ** */
    .left .topic{
        background: #fff;
        margin: 16px 1%;
        border-radius: 5px;
        color: #778087;
    }
    .left .topic .topic-theam{
        display: inline-block;
        width: 100%;
        background-color: #f6f6f6;
        border-bottom: 1px solid #e1e1e1;
        font-size: 16px;
        padding: 9px 0;
        padding-left: 10px;
    }

    .left .topic ul{
        height: 46px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .left .topic .list{
        display: flex;
        justify-content: space-between;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .left .topic .list .wrapper .title-wrap{
        display: inline-block;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-top: 4px;
    }
    .left .topic .list .wrapper .title-wrap .title{
        display: inline-block;
        /* padding-bottom: 5px;  */
        width: 80%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
       
    }
    .left .topic .list .wrapper {
        padding-top: 8px;
    }
    .left .topic .list img{
        width: 30px;
        height: 30px;
        margin-left: 10px;
        margin-right: 10px;
    }
  
    .left .topic .list .wrap{
        margin-right: 10px;
        margin-top: 15px;
    }

    .change-style{
        color: #778087;
    }

</style>
