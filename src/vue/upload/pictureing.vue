<template>
    <div class="pictureing-upload">
        <div class="pictureing-upload-juzhong">
            <el-upload
                class="upload-demo"
                ref="uploads"
                :action="url"
                :file-list="fileList"
                name="goning"
                list-type="picture"
                :before-upload='beforeAvatarUpload'
                drag
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text pictureing100">将图片拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip" style="text-align:center;">只能上传jpg/png文件，且不超过4M</div>
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
               url:`${path.fullPath('private')}upload/pictureing`,
               fileList:[]
            }
        },
        methods:{
            beforeAvatarUpload(file){
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG && !isPNG) {
                    this.$message.error('上传头像图片只能是 JPG PNG 格式!');
                    return false;
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 4MB!');
                    return false;
                }
            }
        },
        mounted(){
            
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


