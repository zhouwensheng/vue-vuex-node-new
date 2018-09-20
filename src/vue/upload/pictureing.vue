<template>
    <div class="pictureing-upload">
        <div class="pictureing-upload-juzhong">
            <el-upload
                class="upload-demo"
                ref="uploads"
                :action="url"
                :on-change="handleChange"
                :file-list="fileList"
                name="goning"
                list-type="picture"
                drag
                :on-remove="removeUpload"
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text pictureing100">将图片拖到此处，或<em>点击上传</em></div>
                <div slot="tip" class="el-upload__tip" style="text-align:center;">只能上传jpg/png文件，且不超过2M</div>
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
            handleChange(file, filelists){
                if(file.raw.type=='image/jpeg'||file.raw.type=='image/png'){
                    const isLt2M = file.size / 1024 / 1024 < 2;
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                        let leng = filelists.length;
                        let i = 0;
                        for(;i<leng;i++){
                            if(file.uid == filelists[i].uid){
                                filelists.splice(i,1)
                                break;
                            }
                        }
                    }
                }else{
                    console.log(1123)
                    let leng = filelists.length;
                    let i = 0;
                    for(;i<leng;i++){
                        if(file.uid == filelists[i].uid){
                            filelists.splice(i,1)
                            this.$message.error('上传头像图片只能是 JPG PNG 格式!');
                            break;
                        }
                    }

                }
            },
            removeUpload(file,fileList){
               var url=`${path.fullPath('private')}upload/removepicture`;
                $.post(url,{'removeName':file.response.data.filename}).then((data)=>{
                    
                })
               console.log(file.response.data.filename)
               console.log(fileList)
            },
            beforeAvatarUpload(file){
                console.log(file.type)
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                console.log(isJPG)
                if (!isJPG) {
                    console.log(24243)
                  this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
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
    margin:100px auto;
    position: relative;
}
.pictureing-upload-juzhong{
    position: absolute;
    left:50%;
    margin-left:-180px;
}
</style>


