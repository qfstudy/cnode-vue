<template>
    <div class="main">
        <div class="content">
            <div class="head">
                <router-link class="change-style" :to="{
                    name:'root'
                }">
                    <span>主页</span>
                </router-link>
                <span>/alsotang 收藏的话题</span>
            </div>
            <ul class="list" v-for="item in collectdata">
                <li class="row" >
                    <router-link :to="{
                        name:'userinfo',
                        params:{
                                name:item.author.loginname
                            }
                    }">
                        <span class="image">
                            <img :src="item.author.avatar_url" alt="">
                        </span>
                    </router-link>
                    <span class="visit">
                        <span>{{item.reply_count}}</span>
                        <span>/{{item.visit_count}}</span>
                    </span>
                    <span class="tab" v-bind:class="{top: (item.top===true), good:(item.good===true)}">
                        <span>{{item|tabFormatter}}</span>
                    </span>
                    <router-link class="change-style" :to="{
                        name:'article',
                        params:{
                            id:item.id,
                            name:item.author.loginname
                        }
                    }">
                        <span class="title">{{item.title}}</span>
                    </router-link>
                </li>
                <li class="time-li">
                    <span class="time">{{item.create_at|formatDate}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Collect',
    data(){
        return{
            collectdata:[]
        }
    },
    methods:{
        getData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.name}`)
            .then((res)=>{
                this.collectdata=res.data.data
                console.log(this.collectdata)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    beforeMount(){this.getData()}
}
</script>

<style scoped>
    .main{
        width: 66%;
        background: #fff;
        margin: 16px 1%;
        border-radius: 5px;
        color: #778087;
        font-size: 14px;
    }

    .main .content .head{
        display: inline-block;
        height: 40px;
        width: 100%;
        background-color: #f6f6f6;
        padding: 5px 10px;
        border-bottom: 1px solid #e1e1e1;
    }
    .main .content .head span{
        display: inline-block;
        padding-top: 4px;
    }
    .main .content .list{
        display: flex;
        justify-content: space-between;
        /* height: 46px; */
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .main .content .list .row .image{
        display: inline-block;
    }
    .main .content .list .row .image img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin: 8px 10px;
    }
    .main .content .list .row .visit{
        display: inline-block;
        width: 70px;
        padding-right: 10px;
        margin-right: 5px;
    }
    .main .content .list .row .tab span{
        display: inline-block;
        margin: 0 3px;
        border-radius: 5px;
        padding: 0px 3px;
        padding-bottom: 3px;
        background-color: #e5e5e5;
        color: #999;
    }
    .main .content .list .row .tab.top span{
        background-color: #80bd01;
        color: #ffff;
    }
    .main .content .list .row .tab.good span{
        background-color: #80bd01;
        color: #ffff;
    }

    .content .list .time-li{
        font-size: 12px;
        margin-top: 22px;
        margin-right: 10px;
    }
    .change-style{
        color: #778087;
    }
</style>
