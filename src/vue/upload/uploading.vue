<template>
    <div>
        <div class="uploading">
            <el-tabs v-model="activeName">
                <el-tab-pane label="上传音乐" name="music">
                    <!-- <router-link to="/musicing"></router-link> -->
                    <musicing></musicing>
                </el-tab-pane>
                <el-tab-pane label="上传图片" name="picture">
                    <!-- <router-link to="/pictureing"></router-link> -->
                    <pictureing></pictureing>
                </el-tab-pane>
                <el-tab-pane label="上传文本" name="text">
                    <!-- <router-link to="/texting"></router-link> -->
                    <texting></texting>
                </el-tab-pane>
                <el-tab-pane label="上传视频" name="video">
                    <!-- <router-link to="/videoing"></router-link> -->
                    <videoing></videoing>
                </el-tab-pane>
            </el-tabs>   
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import $ from '../../js/$ajax.js';
    import path from '../../js/BasePath.js';
    import pictureing from './pictureing.vue';
    import musicing from './musicing.vue';
    import videoing from './videoing.vue';
    import texting from './texting.vue';
    export default {
        data(){
            return{
               fileList:[],
               activeName:'music'
            }
        },
        methods:{

        },
        components:{
            'pictureing':pictureing,
            'musicing':musicing,
            'videoing':videoing,
            'texting':texting
        }
    }
</script>
<style>
    .uploading{
        width: 100%;
    }
</style>


