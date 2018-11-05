<template>
    <div class="slider">
        <aside class="main">
            <div class="login">
                <span>CNode：Node.js专业中文社区</span>
                <span class="wrap">
                    <span>您可以登录或注册，也可以</span>
                    <span>通过GitHub登录</span>
                </span>
            </div>
            <div class="topic">
                <div class="header">无人回复的话题</div>
                <div class="title">
                    <span>想租阿里云主机自己搭网站，求拼团～</span>
                    <span>React 16.7 react hooks学习/踩坑笔记</span>
                    <span>[领优惠券低至1折] [老用户√]--阿里云--aliyun服务器-->低至9.9!</span>
                    <span>如何在node服务关闭的时候杀死子进程</span>
                    <span>webstorm断点调试不断</span>
                </div>
            </div>
            <div class="score">
                <div class="tops">积分榜 TOP 100 >></div>
                <ul class="list">
                    <li>        
                        <span>21305</span>
                        <span>i5ting</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                    <li>
                        <span>15220</span>
                        <span>alsotang</span>
                    </li>
                </ul>
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
    
}
</script>

<style scoped>
    .slider{
        width: 30%;
        margin: 16px 0;
        margin-left: 10px;
        border-radius: 5px;
        color: #778087;
    }
    .main>div{
        margin-bottom: 10px; 
    }
    .main .login{
        background-color:#ffff;
        height: 116px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 14px;
    }
    .main .login span{
        margin-left: 5px;
    }
    .main .login .wrap span{
        display: block;
    }
    .main .login .wrap span:nth-child(2){
        width: 150px;
        height: 34px;
        text-align: center;
        font-size: 14px;
        line-height: 32px;
        background-color: #5bc0de;
        border-radius: 5px;
        color: #fff;
        opacity: 0.8;
    }
    /* **** */
    .main .topic{
        height: 200px;
        background-color:#ffff;
        font-size: 14px;
    }
    .main .topic .header{
        height: 40px;
        background-color: #f6f6f6;
        padding: 10px;
    }
    .main .topic .title{
        padding: 18px 0px;
        display: flex;
        flex-direction: column;
    }
     .main .topic .title span{
        padding: 3px 10px;
        width: 98%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
     }
    /* ***** */
    .main .score{
        height: 320px;
        background-color:#ffff;
        font-size: 14px;
    }
    .main .score .tops{
        height: 40px;
        padding: 12px 10px;
        background-color: #f6f6f6; 
    }
    .main .score .list li{
        padding: 4px 10px;
    }
    .main .score .list li span{
        padding-right:10px;
    }
    /*  */
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
</style>
