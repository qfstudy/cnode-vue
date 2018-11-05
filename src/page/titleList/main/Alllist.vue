<template>
    <div class="main">
        <div class="content">
            <div class="nav">
                <span>全部</span>
                <router-link :to="{
                    name:'good'
                }"> 
                    <span>精华</span>
                </router-link>

                <router-link :to="{
                    name:'share'
                }">
                    <span>分享</span>
                </router-link>

                <router-link :to="{
                    name:'ask'
                }">
                    <span>问答</span>
                </router-link>

                <router-link :to="{
                    name:'job'
                }">
                    <span>招聘</span>
                </router-link>
                
                <router-link :to="{
                    name:'dev'
                }">
                    <span>客户端测试</span>
                </router-link>
            </div>
            <section class="userinfo" >
                <div class="row .clearfix">
                    <ul class="list" v-for="userdata of topicsdata">
                        <li>
                              <!-- 头像 -->
                            <span class="image">
                                <img :src="userdata.author.avatar_url" alt="">
                            </span> 
                        </li>
                        <li>                                      
                                <!-- 回复访问 -->
                            <span class="reply">
                                <span>{{userdata.reply_count}}</span>
                                <span>/{{userdata.visit_count}}</span>
                            </span>
                        </li>
                            <!-- 分类 -->
                        <li>
                            <span class="sort" v-bind:class="{top: (userdata.top===true), good:(userdata.good===true)}">
                                <span>{{userdata|tabFormatter}}</span>
                            </span>
                        </li>    
                            <!-- 标题 -->
                        <li>
                            <router-link :to="{
                                    name:'article',
                                    params:{
                                        id:userdata.id,
                                        name:userdata.author.loginname
                                    }
                                }">
                            <span class="wraptitle">
                                
                                    <span class="title">
                                        {{userdata.title}}
                                    </span>
                                
                            </span>
                            </router-link>
                        </li>
                            <!-- 时间 -->
                        <li>
                            <span class="wraptime">
                                <span class="time">
                                    {{userdata.last_reply_at|formatDate}}
                                </span>
                            </span>
                        </li> 
                                                                     
                    </ul>
                    <div> 
                        <pagination @handleList="renderList"></pagination>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import pagination from '../../../common/pagination/Pagination'
export default {
    name:'Alllist',
    data(){
        return{
            topicsdata:[],
            postpage:1
        }
    },
    components:{
        pagination
    },
    methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                params:{
                    page:this.postpage,
                    limit:40
                }
            })
            .then((res)=>{
                this.topicsdata=res.data.data
                // console.log(this.topicsdata)
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        renderList(value){
            this.postpage=value
            this.getData()
        }
    },
    beforeMount () {
        this.getData()
    }
}
</script>

<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .main{
        width: 66%;
        margin: 16px 0; 
        margin-left: 1%;
        background-color:#ffff;
        border-radius: 5px;
    }
    .main>.content>.nav{
        background-color: #f6f6f6;
        border-radius: 5px 5px 0 0 ;
    }
    .main>.content>.nav span{
        display: inline-block;
        margin-left: 12px;
        font-size: 14px;
        color: #80bd01;
        cursor: pointer;
        padding: 10.5px 0;
    }
    /*  */
    .userinfo .row .list{
        display: flex;
        position: relative;
        color: #778087;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 1px solid #f1f1f1;
        font-size: 15px;
    }
    .userinfo .row .list li .image img{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        vertical-align: middle;
        margin-top: 8px;
        margin-left: 10px;
    }
   
    .userinfo .row .list li .reply{
        display: inline-block;
        padding: 12px 0px;
        width: 76px;
        text-align: center;
        padding-left: 6px;
        margin-right: 1px;
        font-size: 13px;
    }

    .userinfo .row .reply span:nth-child(2){
        color: #b4b4b4;
    }
    .userinfo .row .reply span:nth-child(1){
        color: #333;
    }
    .userinfo .row .list li .sort{
        display: inline-block;
        padding: 10px 2px;
    }
    .userinfo .row .list li .sort span{
        margin: 0 3px;
        border-radius: 5px;
        padding: 1px 3px;
        background-color: #e5e5e5;
        color: #999;
    }
    .userinfo .row .list li .sort.top span{
        background-color: #80bd01;
        color: #ffff;
    }
    .userinfo .row .list li .sort.good span{
        background-color: #80bd01;
        color: #ffff;
    }
     
    .userinfo .row .list li .wraptitle{
        display: inline-block;
        width: 400px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
     @media(max-width: 1200px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 400px;
            /* color: blue; */
        }
    }
    @media(max-width: 1000px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 350px;
            /* color: coral; */
        }
    }

    @media(max-width: 800px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 290px;
            /* color: yellow; */
        }
    }
    @media(max-width: 600px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 180px;
            /* color: #80bd01; */
        }
    }
    @media(max-width: 500px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 100px;
            /* color: red; */
        }
    }
    @media(min-width: 1200px){
        .userinfo .row .list li .wraptitle{
            /* display: inline-block; */
            width: 800px;
            /* color: green; */
        }
    }
   
    .userinfo .row .list li .wraptitle .title{
        display: inline-block;
        font-size: 14px;
        padding: 11px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #333;
    }
    .userinfo .row .list li .wraptime .time{
        position: absolute;
        right: 10px; 
        color: #778087;
        font-size: 12px;
        margin-top: 30px;
    }
</style>
