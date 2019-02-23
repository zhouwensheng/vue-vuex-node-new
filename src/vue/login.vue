<template>
    <div class="loginss">
            <div class="login" v-if='login'>
                <div class="login-div">
                    <img src="src/image/logo.jpg" alt="">
                </div>
                <div class="login-div2">
                      <p>用户 : <input type="text" name="username" v-model='landing.name'></p>
                      <p>密码 : <input type="password" name='password' v-model='landing.password'></p>
                      <input class="login-input" type="submit" value="登陆" @click='getfrom'/>
                </div>
                <!-- <p>
                    <span class="fr" style="color:#3366FF;padding-right: 30px;font-size: 16px;cursor:pointer;" @click='getregister'>注册</span>
                </p> -->
            </div>
            <!-- <div class="login1" v-else> 
                    <p><i class="fr" @click='getcountermand()'>X</i></p>
                    <p><span>用户 : </span><input required type="text" v-model='userdata.name'></p>
                    <p> <span>密码 : </span><input required type="password" v-model='userdata.password'></p>
                    <p><span>确认密码 : </span><input required type="password" v-model='userdata.passwordque'></p>
                    <p><span>电话号码 : </span><input pattern='^1[3|4|5|8][0-9]\d{4,8}$' type="text" v-model='userdata.phone'></p>
                    <p><span>邮箱 : </span><input pattern='^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g' v-model='userdata.mailbox'></p>
                    <p><span>性别 : </span>男: <input type="radio"  name="sex" value="男" @click='getradio("m")'> 女: <input type="radio" name="sex" value="女" @click='getradio("w")'> </p>
                    <button @click="getregisterurl">注册</button>
            </div> -->
      </div>
</template>
<script>
   import $ from '../js/$ajax.js';
   import path from '../js/BasePath.js';
   import {login} from '../js/pathing.js';
   export default{
       data(){
           return{
               login:true,
               userdata:{//注册数据
                   name:'',
                   password:'',
                   passwordque:'',
                   phone:'',
                   mailbox:'',
                   gender:'',
               },
               landing:{
                   name:'',
                   password:'',
               }
           }
       },
        methods:{
            // 取消注册
            getcountermand(){
                this.login=true;
            },
            // 单选
            getradio(val){
                this.userdata.gender=val;
            },
            // 登陆
            getfrom(){
                let url=`${path.fullPath('private')}users/from`;
                $.post(url,this.landing).then((data)=>{
                    if(data.success){
                        AppUtil.Local.setLocal('user',JSON.stringify(data.data))
                        this.$router.push('/index');
                    }
                })
            },
            getregister(){
                this.userdata={name:'',password:'',passwordque:'',phone:'',mailbox:'',gender:''};
                this.login=false;
            },
            getregisterurl(){
                if(!this.userdata.name){
                    alert('名字不能为空')
                    return;
                }
                if(!this.userdata.password){
                    alert('密码不能为空')
                    return;
                }
                if(!this.userdata.passwordque){
                    alert('确认密码不能为空')
                    return;
                }
                if(this.userdata.password!==this.userdata.passwordque){
                    alert('密码错误')
                    return;
                }
                var regexps = /^1[3|4|5|8][0-9]\d{4,8}$/;
                var eiset= /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
                if(this.userdata.phone&&!regexps.test(this.userdata.phone)){
                    alert('请输入正确的手机号码')
                    return;
                }
                if(this.userdata.mailbox&&!eiset.test(this.userdata.mailbox)){
                        alert('请输入正确的邮箱')
                    return;
                }
                let url=`${path.fullPath('private')}users/register`;
                $.post(url,this.userdata).then((data)=>{
                    if(data.success){
                        this.userdata={name:'',password:'',passwordque:'',phone:'',mailbox:'',gender:''};
                        this.login=true;
                        alert('注册成功');
                    }
                })
            },
        },
        mounted(){
            // console.log(this.$store.state.count)
        }
    }
</script>
<style scoped>
.loginss{
    width: 100%;
    height: 100%;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
    z-index:99999999999;
}
.login1{
    width: 600px;
    height: 400px;
    border:1px solid #ccc;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-300px;
}
.login1>p{
    height: 40px;
    line-height: 40px;
    /*padding: 0 30px;*/
}
.login1>button{
    display: block;
    width: 120px;
    height: 40px;
    margin:0 auto;
    background-color:#3366FF;
    color:#fff;
    border:none;
    border-radius: 3px;
    cursor:pointer;
}
.login1>p>span{
    display: inline-block;
    width: 80px;
    text-align: right;
    padding-right: 10px;
}
.login1>p>input{
    border:1px solid #ccc;
    width: 400px;
    height: 80%;
}
.login1>p:nth-child(1){
    height: 60px;
    background:#DB3E3E;
    color:#fff;
    position: relative;
    margin-bottom: 20px;
}
.login1>p:nth-child(1) i{
    width: 20px;
    height: 20px;
    font-size: 16px;
    cursor:pointer;
    position: absolute;
    top:10px;
    right: 10px;
}
.login1>p:nth-child(7) input{
    width: 20px;
    vertical-align:middle;
}
.login{
    width: 400px;
    height: 350px;
    border:1px solid #ccc;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-175px;
    margin-left:-200px;
}
.login .login-div{
    width: 100%;
    height: auto;
    border-bottom:1px solid #ccc;
    padding:10px 0;
    text-align: center;
}
.login .login-div2{
    padding:20px 30px;
}
.login .login-div2 .login-input{
  display: block;
  width: 100px;
  height: 40px;
  margin:0 auto;
  border-radius:3px;
  background:#3366FF;
  color:#fff;
  cursor:pointer;
}
.login .login-div2 p{
    padding:10px 0;
}
.login .login-div2 p input{
    width: 280px;
    height: 30px;
    border:1px solid #ccc;
}
.login .login-div>img{
   display: inline-block;
   width: 100px;
   height: 100px;
   border-radius: 50%;
}
</style>