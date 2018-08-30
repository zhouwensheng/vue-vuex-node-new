<template>
    <div class="div1">
        <ul class="ul1 clearfix">
            <li class="fl">
                <router-link to="/katong">
                    <div>
                        <p>记录美好瞬间</p>
                        <p>记住自己的本性</p>
                        <img src="../image/katong.jpg" alt="">
                        <div>
                            图片
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to='/VideoList'>
                    <div>
                        <p>一叶知秋的睿智</p>
                        <p>一日三秋的光阴</p>
                        <p>秋天了该好好吃一顿</p>
                        <img src="../image/tupian.jpg" alt="">
                        <div>
                            视频
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/book">
                    <div>
                        <p>红尘，浅浅一回眸</p>
                        <p>虽陌生却触动心弦</p>
                        <p>心动带来咫尺的幸福</p>
                        <img src="../image/shu.jpg" alt="">
                        <div>
                            书@心眼
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/music">
                    <div>
                        <p>诗歌是词汇奏出最美和声</p>
                        <p>音乐是音符奏出的最美和声</p>
                        <img src="../image/yinyue1.jpg" alt="">
                        <div>
                            音乐
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import $ from '../js/$ajax.js';
    // import $ from "../js/$ajax.js";
    import path from "../js/BasePath.js";
    import {
        login
    } from '../js/pathing.js';
    export default {
        data() {
            return {
                login: true,
                userdata: { //注册数据
                    name: '',
                    password: '',
                    passwordque: '',
                    phone: '',
                    mailbox: '',
                    gender: '',
                },
                landing: {
                    name: '',
                    password: '',
                }
            };
        },
        methods: {
        },
        mounted() {
          
        }
    };
</script>
<style scoped>
    .ul1 {
        width: 100%;
    }
    .ul1>li {
        width: calc(25% - 50px);
        height: 250px;
        box-sizing: border-box;
        margin: 20px;
        background-color: #fff;
        box-shadow: 0 0 2px #ccc;
    }
    .ul1>li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
    }
    .ul1>li a>div {
        width: 100%;
        height: 180px;
        position: relative;
    }
    .ul1>li a>div>p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
    }
    .ul1>li a>div>img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .ul1>li a>div>div {
        position: absolute;
        top: 180px;
        left: 0;
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 16px;
        color: #000;
    }
    .ul1>li a>div>img:hover {
        opacity: 0.3;
    }
</style>
