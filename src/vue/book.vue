<template>
    <div>
        <ul>
            <li @click='getbook(item.bookname)' v-for='item in book' :key='item.bookid'>{{item.name}}<span class="fr">作者: {{item.author}}</span></li>
        </ul>
    </div>
</template>
<script>
    import $ from '../js/$ajax.js';
    import {catalogue} from '../js/book.js';
    import path from '../js/BasePath.js';
    export default {
        data(){
            return{
                book:[],
                rds:'',
            }
        },
        methods:{
            getbook(data){
                this.$router.push({name:'bookparticulars',params:{id:data}})
            }
        },
        mounted(){
            console.log(34234)
            catalogue().then((data)=>{
                this.book=data.data;
            })
        }
    }
</script>
<style scoped>
    div{
        width: 100%;
        height: 100%;
    }
    ul{
        width: 100%;
        height: 100%;
        
    }
    li{
        box-sizing:border-box;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left:10px;
        padding-right: 10px;
        border-bottom:1px solid #ccc;
        background-color:#f2f2f2;
        cursor:pointer;
    }
    li:hover{
        background-color:aqua;
        color:#fff;
    }
    li span{
        width: 100px;
        text-align:left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
</style>


