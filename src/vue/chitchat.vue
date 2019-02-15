<template>
    <div>
        <div class="chitchat-left">
            <p :class="{'pchick':chatGroup == 'chat'}" @click="chatGroup = 'chat'">聊天室1</p>
            <p :class="{'pchick':chatGroup == 'chat2'}" @click="chatGroup = 'chat2'">聊天室2</p>
            <p :class="{'pchick':chatGroup == 'chat3'}" @click="chatGroup = 'chat3'">聊天室3</p>
            <p :class="{'pchick':chatGroup == 'chat4'}" @click="chatGroup = 'chat4'">聊天室4</p>
            <p :class="{'pchick':chatGroup == 'chat5'}" @click="chatGroup = 'chat5'">聊天室5</p>
        </div>
        <div class="chitchat-right">
            <div v-show="chatGroup == 'chat'" class="chitchat-right-box" ref="box1">

            </div>
            <div v-show="chatGroup == 'chat2'" class="chitchat-right-box" ref="box2">

            </div>
            <div v-show="chatGroup == 'chat3'" class="chitchat-right-box" ref="box3">

            </div>
            <div v-show="chatGroup == 'chat4'" class="chitchat-right-box" ref="box4">

            </div>
            <div v-show="chatGroup == 'chat5'" class="chitchat-right-box" ref="box5">

            </div>
            <p>
                <input style="width:500px;" @keyup.enter='getChatContent' type="text" v-model="input" placeholder="请输入内容">
                <el-button type="primary" @click="getChatContent">发送</el-button>
            </p>
        </div>
    </div>     
</template>
<script>
import $ from '../js/$ajax.js';
import path from '../js/BasePath.js';
export default {
    data(){
        return{
            socket:'',// 建立 socket 连接
            input:'',//聊天内容
            userName:'',//当前登录人
            chatGroup:'chat',//记录当前聊天室
            groupedData:{
                Number1:0,//记录聊天室分块内容数量
                Number2:0,
                Number3:0,
                Number4:0,
                Number5:0,
                ids1:0,//记录聊天室分块数
                ids2:0,
                ids3:0,
                ids4:0,
                ids5:0,
                uls1:0,//记录聊天室当前分块
                uls2:0,
                uls3:0,
                uls4:0,
                uls5:0
            },
        }
    },
    methods:{
        getChatContent(){ // 向服务器，发送信息
            if(this.input && this.socket){      
                let  chatinfo = {username: this.userName, input: this.input};
                this.socket.emit(this.chatGroup, chatinfo);
                if(this.chatGroup == 'chat'){
                    this.getCreater(this.$refs.box1,'Number1','uls1','ids1',chatinfo,true)
                }else if(this.chatGroup == 'chat2'){
                    this.getCreater(this.$refs.box2,'Number2','uls2','ids2',chatinfo,true)
                }else if(this.chatGroup == 'chat3'){
                    this.getCreater(this.$refs.box3,'Number3','uls3','ids3',chatinfo,true)
                }else if(this.chatGroup == 'chat4'){
                    this.getCreater(this.$refs.box4,'Number4','uls4','ids4',chatinfo,true)
                }else if(this.chatGroup == 'chat5'){
                    this.getCreater(this.$refs.box5,"Number5",'uls5','ids5',chatinfo,true)
                }

            }
            this.input = '';
        },
        getCreater(dom,num,uls,ids,chatinfo,parameter){//渲染返回的信息到页面
            let _this = this;
            
            var list = document.createElement("li");
            list.className = 'clearfix';
            if(parameter){
                list.innerHTML = `<span class='chitchat-right-self-name'>${chatinfo.username}</span><span class="chitchat-right-self-send">${chatinfo.input}<i class='el-icon-caret-right i-right'></i></span>`;
            }else{
                list.innerHTML = `<span style='float:left;margin-right:11px;' class='chitchat-right-self-name'>${chatinfo.username}</span><span class="chitchat-right-self-send" style='float:left'>${chatinfo.input}<i class='el-icon-caret-left i-left'></i></span>`;
            }
            if(this.groupedData[num] % 200){
                this.groupedData[uls].appendChild(list)
            }else{
                this.groupedData[ids]++;
                this.groupedData[uls] = document.createElement("ul");
                this.groupedData[uls].id = 'ULlist' + this.groupedData[ids];
                this.groupedData[uls].appendChild(list)
                dom.appendChild(this.groupedData[uls])
                if(this.groupedData[ids] > 5){
                    dom.removeChild(dom.firstChild);
                }
            }
            this.groupedData[num]++;
            dom.scrollTop = 1200000;//默认将信息滚动到最低
        },
        getMonitor(){//// 监听服务器发送来的  事件
            this.socket.on('chat', (chatinfo) => {
                this.getCreater(this.$refs.box1,'Number1','uls1','ids1',chatinfo)
            });
            this.socket.on('chat2', (chatinfo) => {
                this.getCreater(this.$refs.box2,'Number2','uls2','ids2',chatinfo)
            });
            this.socket.on('chat3', (chatinfo) => {
                this.getCreater(this.$refs.box3,'Number3','uls3','ids3',chatinfo)
            });
            this.socket.on('chat4', (chatinfo) => {
                this.getCreater(this.$refs.box4,'Number4','uls4','ids4',chatinfo)
            });
            this.socket.on('chat5', (chatinfo) => {
                this.getCreater(this.$refs.box5,'Number5','uls5','ids5',chatinfo)
            });
        },
    },
    mounted(){
        // 建立 socket 连接
        $.get(`${path.fullPath('private')}verification`)
        this.socket = io('http://116.62.209.16:8080');
        this.getMonitor()
        let userInfo = AppUtil.Local.getLocal('user');
        if(userInfo){
            this.userName = JSON.parse(userInfo).name;
        }

    }
}
</script>
<style>
.chitchat-left{
    width: 25%;
    height: 500px;
    border:1px solid #ccc;
    float:left;
}
.chitchat-left p{
    padding:10px;
    text-align: center;
    border-bottom:1px solid #ccc;
}
.chitchat-left p:hover{
    background:#eee;
}

.chitchat-left .pchick{
    background:#ddd;
}
.chitchat-right{
    width: 688px;
    height: 500px;
    border:1px solid #ccc;
    float:right;
    overflow: hidden;
}
.chitchat-right .chitchat-right-box{
    width: 704px;
    height: 450px;
    overflow:auto;
}
.chitchat-right p{
    height: 49px;
    line-height: 49px;
    text-align: center;
    border-top:1px solid #ccc;
}
.chitchat-right p input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.chitchat-right ul li{
    font-size: 14px;
    padding:0 18px 0 0;
    margin-top:10px;
}
.chitchat-right-self-send{
    float: right;
    width: auto;
    line-height: 35px;
    padding:0 10px;
    border-radius:3px;
    background:rgba(0,0,0,0.3);
    position:relative;
    margin-right: 12px;
    max-width: 600px;
    word-wrap: break-word; 
    word-break: normal; 
}
.chitchat-right ul li .i-right{
    position:absolute;
    top:4px;
    right: -15.7px;
    font-size: 26px;
    float: right;
    color:rgba(0,0,0,0.3);
}
.chitchat-right ul li .i-left{
    position:absolute;
    top:4px;
    left: -16.7px;
    font-size: 26px;
    float: right;
    color:rgba(0,0,0,0.3);
}
.chitchat-right-self-name{
    float: right;
    width: auto;
    height: 33px;
    line-height: 33px;
    padding:0 10px;
    border:1px solid #ccc;
    border-radius:12px;
    position: relative;
}
</style>


