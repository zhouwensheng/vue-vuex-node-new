<template>
    <div class="VideoList">
        <div v-for='(view,index) in url' :key='index' class="VideoList-list fl">
            <video class="video" :ref='view.name' :src="view.url" controls @play='getplay(index)'></video>
        </div>
        
    </div>
</template>
<script>
    import {videoList} from '../js/videoList.js';
    import path from '../js/BasePath.js';
    export default {
        data(){
            return {
                url:[]
            }
        },
        methods:{
            getplay(ind){
                var video =document.getElementsByClassName('video');
                var len = video.length,i=0;
                for(;i<len;i++){
                    if(i!=ind){
                        video[i].pause();
                    } 
                }
            }
        },
        mounted(){
            videoList().then((data)=>{
                this.url = data.data.map((val)=>{
                    return {url:`${path.fullPath("private")}view/`+val.name,name:val.name};
                })
            })
        }
    }
</script>
<style scoped>
    .VideoList{
        width: 100%;
        height: 100%;
    } 
    .VideoList .VideoList-list{
        width: calc(100% / 3);
        min-width: 333px;
        box-sizing: border-box;
        padding: 10px;
        
    }
    .VideoList .VideoList-list video{
        width: 100%;
    }
</style>


