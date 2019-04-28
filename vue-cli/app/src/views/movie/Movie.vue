<template>
    <div class="container">
        <ul class="content">
            <li v-for="(obj,index) in movieList" :key="index">
                <div>
                    <img src="../../assets/img/1.jpg">
                </div>
                <div class="info">
                    <h3>{{obj.title}}</h3>
                    <p>
                        <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}|</span>
                    </p>
                    <p>{{obj.collect_count}}已观看</p>
                    <p>{{obj.year}}</p>
                    <p>
                        <span v-for="(type,index) in obj.genres" :key="index">{{type}}|</span>
                    </p>
                </div>
            </li>
        </ul>
        <img src="../../assets/img/loading.gif" class="loading" v-show="isShow">
        <div v-show="isBottom">到底了。。。</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                movieList:[],
                isShow:false,
                isBottom:false
            }
        },
        created(){
            this.getMovie();
            let scrollT = document.documentElement.scrollTop;
            let clientH = document.documentElement.clientHeight;
            let scrollH = document.documentElement.scrollHeight;
            if(scrollT + clientH == scrollH && !this.isBottom){
                this.getMovie();
            }
        },
        methods:{
            getMovie(){
                this.isShow = true;
                axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start="+this.movieList.length+"&count=10")
                        .then(result =>{
                            console.log(result);
                            this.movieList = [...this.movieList,...result.data.subjects];
                            this.isShow = false;
                            if(this.movieList.length == result.data.total){
                                this.isBottom = true;
                            }
                    })
                    .catch()
            }
        }
    }
</script>

<style scoped>
    .content{
        margin: 0 .1rem;
    }
    .content li{
        display: flex;
        border-bottom: 1px solid #000;
        align-items: center;
    }
    .content li img{
        width: 90px;
    }
    .content .info{
        flex: 1;
        margin-left: .2rem;
    }
    .loading{
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: 1.5rem;
        height: 1.5rem;
    }
</style>