<template>
    <div class="container">
        <header :style="{background:obj.bgColor}">
            <span class="goHome">首页</span>
            <h1 class="title">{{obj.name}}</h1>
        </header>
    </div>
</template>

<script>
    export default {
        props:["obj"]
    }
</script>

<style scoped>
    header{
        height: 1rem;
        background: #ff0000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }
    .goHome{
        font-size: .4rem;
        line-height: 1rem;
        position: absolute;
        left: .1rem;
    }
    .title{
        display: inline-block;
        line-height: 1rem;
    }
</style>