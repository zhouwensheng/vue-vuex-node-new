<template>
    <div class="Email">
        <ul>
            <li class="clearfix"><span class="Email-name fl">邮件名称:</span><input v-model="Emaildata.name" class="Email-input-size fl"></li>
            <li class="clearfix"><span class="Email-site fl">发件地址:</span><input v-model="Emaildata.site" class="Email-input-size fl"></li>
            <li class="clearfix">
                <span class="Email-site fl">内容:</span>
                <textarea rows="10"  v-model="Emaildata.content"  class="Email-textarea-size fl">

                </textarea>
            </li>
            <button @click='getbutton'>发送</button>
        </ul>
    </div>
</template>
<script>
    import {Emailpost} from '../js/Email.js';
    export default {
        data(){
            return{
                Emaildata:{
                    name:'',
                    site:'',
                    content:''
                }
            }
        },
        methods:{
            getbutton(){
                Emailpost(this.Emaildata).then((data) => {
                    console.log(data)
                })
            }
        },
    }
</script>
<style>
    .Email ul li{
        margin-top: 10px;
    }
    .Email-name{
        width: 150px;
        font-size: 14px;
    }
    .Email-site{
        width: 150px;
        font-size: 14px;
    }
    .Email-input-size{
        width: 700px;
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;

    }
    .Email-textarea-size{
        width: 695px;
    }
</style>


