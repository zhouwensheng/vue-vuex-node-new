<template>
    <div class="div1">
            <ul class="ul1 clearfix">
                 <li class="fl" v-for='(val,index) in music' :key='index'>
                    <router-link :to="'/musicParticulars/'+val.name">
                        <div>
                            <img :src="val.picture" alt="">
                            <div>
                                {{val.name}}
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
</template>
<script>
import path from '../js/BasePath.js';
import {aggregateData} from '../js/muise.js'
    export default{
        data(){
            return {
                imge:'',
                music:[]
            }
        },
        methods:{
           getaudioplay(data){
              
           },
           getaudiopause(){
               
           }
        },
        mounted(){
                aggregateData().then((data)=>{
                    if(data.success){
                        data.data.forEach((val)=>{
                            val.musicName=val.musicName.split(';');
                            val.picture=`${path.fullPath("private")}images/`+val.picture;
                        })
                        this.music=data.data;
                    }
                    
                })
        }
    }
</script>
<style lang='scss' scoped>
    .ul1 {
        width: 100%;
    }
    .ul1>li {
        width: calc(25% - 50px);
        height: 250px;
        box-sizing: border-box;
        margin: 20px;
        background-color: #fff;
        box-shadow: 0 0 2px #ccc;
    }
    .ul1>li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
    }
    .ul1>li a>div {
        width: 100%;
        height: 180px;
        position: relative;
    }
    .ul1>li a>div>p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
    }
    .ul1>li a>div>img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .ul1>li a>div>div {
        position: absolute;
        top: 180px;
        left: 0;
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 16px;
        color: #000;
    }
    .ul1>li a>div>img:hover {
        opacity: 0.3;
    }
</style>
