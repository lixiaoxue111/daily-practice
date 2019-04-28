<template>
    <div class="container" :style="{background:color}">
        <ul class="content">
            <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        props:["menu","color"],
        data(){
            return {

            }
        },
        methods:{
            change(obj){
                this.$emit('changeBg',obj)
            }
        }
    }
</script>

<style scoped>
    .container{
        height: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #ff0000;
        width: 100%;
        line-height: 1rem;

    }
    .content{
        display: flex;
    }
    .content li{
        flex-grow: 1;
        text-align: center;
        font-size: .3rem;
    }
    .content a{
        outline: none;
        color: #555;
    }
    .content a.router-link-active{
        color: #fff;
    }
</style>