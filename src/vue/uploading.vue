<template>
    <div class="Email">
       <form :action="url" method="post" enctype="multipart/form-data">
            <input type="file" name="file" value="选择jar包"/>
            <input id="submit_form" type="submit" class="btn btn-success save" value="保存"/>
        </form>
    </div>
</template>
<script>
    import $ from '../js/$ajax.js';
    import path from '../js/BasePath.js';
    export default {
        data(){
            return{
               url:`${path.fullPath('private')}upload/uploading`
            }
        },
        methods:{
           
        },
    }
</script>


