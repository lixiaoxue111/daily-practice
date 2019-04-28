<template>
    <div class="container">
        <ul class="slider-box">
            <transition-group name="fade">
                <li v-for="(item,index) in imgs" :key="index" v-show="index==iNow">
                    <img :src="item">
                </li>
            </transition-group>
        </ul>
        <ul class="btn">
            <li v-for="(i,index) in imgs.length" :key="index" :class="{active:index==iNow}"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                iNow:0
            }
        },
        props:["imgs"],
        created(){
            console.log(this.imgs.length);
            setInterval( ()=> {
                this.iNow++;

                if(this.iNow>=this.imgs.length){
                    this.iNow = 0;
                }
            },2000)
        }
    }
</script>

<style scoped>
    .container{
        position: relative;
        overflow: hidden;
        height: 5rem;
    }
    .slider-box{

    }
    .slider-box li{
        width: 100%;
        height: 5rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    .slider-box li img{
        width: 100%;
        height: 5rem;
    }
    .btn{
        display: flex;
        justify-content: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
    .btn li{
        border-radius: 50%;
        width: .3rem;
        height: .3rem;
        background: #00ff00;
        margin-left: .1rem;
    }
    .btn li.active{
        background: orangered;
    }
    .fade-enter{
        transform: translateX(100%)
    }
    .fade-enter-active{
        transition: transform 2s ease;
    }
    .fade-enter-to{
        transform: translateX(0)
    }
    .fade-leave{
        transform: translateX(0)
    }
    .fade-leave-active{
        transition: transform 2s ease;
    }
    .fade-leave-to{
        transform: translateX(-100%)
    }
</style>