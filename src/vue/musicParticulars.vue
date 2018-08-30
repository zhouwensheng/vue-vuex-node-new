<template>
    <div>
        <img class="musicParticulars-img" :src="muiscParticulars.picture" alt="">
        <ul class="musicParticulars-ul">
             <li v-for="(val,index) in muiscParticulars.musicName" :key="index" @dblclick='getmusicdblclick(index,val)'>
                <span>{{val}}</span>
             </li>
        </ul>
        <div class="musicParticulars-div">
            <div>
                <audio controls="controls" :src="muiscURL" id="muise" @play='getplay()' @ended='getended()' @pause='getpause()' ref="muise"></audio>
            </div>
        </div>
        <div class="musicParticulars-div-fix" v-show='switchdata'>
            <div class="musicParticulars-div-fixbox">
                <img :class="{'imgrotate':switchdata}" src="../image/changpan.jpg" alt="">
            </div>
            <p>
                {{muisename}}
            </p>
        </div>
    </div>
</template>
<script>
import path from '../js/BasePath.js';
import {aggregateData} from '../js/muise.js'
    export default{
        data(){
            return {
                muiscParticulars:'',
                muiscURL:'',
                muisename:'',
                switchdata: false,
                numberos: '',
            }
        },
        methods:{
            getmusicdblclick(index,val){
                this.muiscURL=this.muiscParticulars.musicUrl[index];
                this.muisename=val;
                this.numberos = index;
                setTimeout(()=>{
                     this.$refs.muise.play();
                },10)
            },
            getpause(){
                this.switchdata =false;
            },
            getended(){
                this.numberos++;
                if(this.muiscParticulars.musicUrl[this.numberos]){
                    this.muiscURL=this.muiscParticulars.musicUrl[this.numberos];
                    setTimeout(()=>{
                        this.$refs.muise.play();
                    },10)
                }
            },
            getplay(){
                this.switchdata =true;
            }
        },
        mounted(){
            aggregateData().then((data)=>{
                if(data.success){
                    data.data.forEach((val)=>{
                        if(val.name==this.$route.params.id){
                            val.musicName=val.musicName.split(';');
                            val.musicUrl=val.musicName.map(vals=>{
                                return `${path.fullPath("private")}music/`+vals;
                            })
                            val.picture=`${path.fullPath("private")}images/`+val.picture;
                            this.muiscParticulars=val;
                            console.log(this.muiscParticulars)
                        }
                    })
                }
            })
        }
    }
</script>
<style lang='scss' scoped>
    .musicParticulars-img{
        width:100%;
        height: 400px;
    }
    .musicParticulars-ul{
        width: 100%;
        li{
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            line-height: 40px;
            cursor:pointer;
            span{
                padding-left:5px;
            }
        }
        li:nth-child(odd){
            background:#F2F2F2;
        }
        li:hover{
            background:#ccc;
        }
    }
    .musicParticulars-div{
        position:fixed;
        bottom: 0;
        left:0;
        width: 100%;
        height: 50px;
        background-color: #fff;
        
        div{
            width:80%;
            height: 100%;
            max-width: 1000px;
            margin: 0 auto;
            background:#ccc;
            audio{
                width: 100%;
                padding-top:10px;
                
            }
        }
    }
    .musicParticulars-div-fix{
        position:fixed;
        bottom: 50px;
        right:20px;
        width: 200px;
        height: 230px;
        background-color: #f2f2f2;
        .musicParticulars-div-fixbox{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow:hidden;
            img{
                width: 100%;
            }
            .imgrotate{
                animation: myfirst 2s infinite linear;
            }
        }
        p{
            widows: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
    }
    @keyframes myfirst {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
