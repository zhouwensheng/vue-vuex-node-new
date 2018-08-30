<template>
    <div>
        <vue-waterfall-easy class="clearfix" :gap='5' :maxCols='7' :imgWidth='250' :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData"></vue-waterfall-easy>
    </div>
</template>
<style scoped>
    .katong{
        width: 100%;
        position:relative;
    }
    .katong>li{
        width: 200px;
        box-sizing: border-box;
    }
    .katong>li>img{
        float:left;
        width: 100%;
    }
</style>
<script>
import $ from '../js/$ajax.js';
import vueWaterfallEasy from './vue-waterfall-easy';
import path from '../js/BasePath.js';
    export default{
        data(){
            return {
                imges:[],
                heightArr:[],
                index:0,
                imgsArr: [],         //存放所有已加载图片的数组（即当前页面会加载的所有图片）
                starindex:0,
                endindex:20,
            }
        },
        components: {
            vueWaterfallEasy
        },      
        methods:{
            　initImgsArr (n, m) {   //初始化图片数组的方法，把要加载的图片装入
        　　　　var arr = this.imges.slice(n,m);
                let list=[]
        　　　　for (var i = 0; i < arr.length; i++) {
                  if(arr[i]){
                      list.push({ src: `${path.fullPath("private")}images/${arr[i]}`, link: `${path.fullPath("private")}images/${arr[i]}`, info: '一些图片描述文字' }) 
                  }
        　　　　}
                this.imgsArr = this.imgsArr.concat(list)
        　　　},
        　　　fetchImgsData () { 
                this.starindex=this.starindex+10;
                this.endindex=this.endindex+10;  
                if(this.imges.length>this.starindex){
                    this.initImgsArr(this.starindex, this.endindex)
                }
        　　　}
        },
        mounted(){
            let url=`${path.fullPath("private")}picture/falls`;
            $.post(url,(data)=>{
                this.imges=[];
                data.forEach(val=>{
                    this.imges.push(val.picture)
                })
                if(this.imges.length<59){
                    let list=[];
                    for(var i=0;i<3;i++){
                        list.push(...this.imges);
                    }
                    this.imges=list;
                    this.initImgsArr(this.starindex, this.endindex) 
                }
            })
        },
        created () { 
    　　}
    }
</script>