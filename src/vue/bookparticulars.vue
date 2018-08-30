<template>
    <div class="bookparticulars">
        <button @click='getrollback'>回退</button>
        <iframe :src='url' class="iframes"></iframe>
    </div>
    
</template>
<script>
    import path from '../js/BasePath.js';
    export default {
        data(){
            return {
                url:''
            }
        },
        methods:{
            getrollback(){
                this.$router.go(-1);
            }
        },
        mounted(){
            this.url = `${path.fullPath("private")}book/`+this.$route.params.id; 
        },
    }
</script>
<style scoped>
    .bookparticulars{
        width: 100%;
        height: 100%;
    }
    .bookparticulars button{
        width: 60px;
        /* height: 36px; */
        line-height: 36px;
        background-color:rgb(89, 140, 251);
        border:none;
        border-radius:3px;
        color:#fff;
        cursor:pointer;
        margin-bottom:20px;
    }
    .bookparticulars button:hover{
        background-color:#59C0FB;
    }
    .iframes{
        width: 100%;
        height: 100%;
    }
</style>


