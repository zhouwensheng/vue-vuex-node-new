<template>
    <div>
        <div class="uploading">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="上传音乐" name="music">
                    <router-link to="/musicing"></router-link>
                </el-tab-pane>
                <el-tab-pane label="上传图片" name="picture">
                    <router-link to="/pictureing"></router-link>
                </el-tab-pane>
                <el-tab-pane label="上传文本" name="text">
                    <router-link to="/texting"></router-link>
                </el-tab-pane>
                <el-tab-pane label="上传视频" name="video">
                    <router-link to="/videoing"></router-link>
                </el-tab-pane>
            </el-tabs>   
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import $ from '../../js/$ajax.js';
    import path from '../../js/BasePath.js';
    export default {
        data(){
            return{
               url:`${path.fullPath('private')}upload/uploading`,
               fileList:[],
               activeName:'music'
            }
        },
        methods:{
            handleClick(tab,event){
                if(tab.name=='music'){
                    this.$router.push('/musicing');
                }else if(tab.name=='picture'){
                    this.$router.push('/pictureing');
                }else if(tab.name=='text'){
                    this.$router.push('/texting')
                }else{
                    this.$router.push('/videoinng')
                }
                
            }
        },
    }
</script>
<style>
    .uploading{
        width: 100%;
    }
</style>


