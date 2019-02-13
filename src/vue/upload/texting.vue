<template>
    <div class="pictureing-upload">
        <div class="pictureing-upload-juzhong">
            <el-upload
                class="upload-demo"
                ref="uploads"
                :action="url"
                :file-list="fileList"
                name="goning"
                list-type="text"
                drag
                :before-upload='beforeAvatarUpload'
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text pictureing100">将文件拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip" style="text-align:center;">只能上传txt ，doc, pdf文件，且不超过10M</div>
            </el-upload>
        </div>
    </div>
</template>
<script>
    import $ from '../../js/$ajax.js';
    import path from '../../js/BasePath.js';
    export default {
        data(){
            return{
                url:`${path.fullPath('private')}upload/txting`,
                fileList:[]
            }
        },
        methods:{
            beforeAvatarUpload(file){
                console.log(file.type)
                const isMP3 = file.type === 'text/plain';
                const isLt2M = file.size / 1024 / 1024 < 10;
                if (!isMP3) {
                    this.$message.error('上传视频只能是 txt 格式!');
                    return false;
                }
                if (!isLt2M) {
                    this.$message.error('上传文件大小不能超过 10MB!');
                    return false;
                }
            }
        }
    }
</script>
<style>
    .operop{
        opacity:0;
    }
    .pictureing-upload{
        height: 500px;
        margin:100px auto;
        position: relative;
    }
    .pictureing-upload-juzhong{
        position: absolute;
        left:50%;
        margin-left:-180px;
    }
</style>


