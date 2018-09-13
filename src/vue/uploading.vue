<template>
    <div class="Email">
        <el-upload
            class="upload-demo"
            :action="url"
            :on-change="handleChange"
            :file-list="fileList"
            name="goning">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
    import $ from '../js/$ajax.js';
    import path from '../js/BasePath.js';
    export default {
        data(){
            return{
               url:`${path.fullPath('private')}upload/uploading`,
               fileList:[]
            }
        },
        methods:{
            handleChange(file, filelists){
                console.log(filelists)
                // let inputID = this.$refs.input;
                // // console.log(inputID.files[0])
                // let formdata = new FormData();
                // let url = `${path.fullPath("private")}upload/uploading`;
                // formdata.append('file',inputID.files[0]);
                // formdata.append('rrrr',12232)
                // console.log(formdata.get('file'))
                // console.log(formdata.get('rrrr'))
                // $.ajax({
                //     url: url,
                //     type: "POST",
                //     data:formdata, 
                //     processData: false,
                //     contentType: false,
                //     success: function(data){
                //         console.log(data)
                //     }
                // })
            }
        },
    }
</script>


