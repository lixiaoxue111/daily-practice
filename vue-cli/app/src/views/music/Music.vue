<template>
    <div>
        <img v-for="(obj,index) in music" :src="obj.bg" :key="index" @click="goList">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                music:[]
            }
        },
        created(){
            axios.get('/data/musiclist.json').then((result)=>{
                console.log(result);
                this.music = result.data.albums;
            }).catch((err)=>{

            })
        },
        methods:{
            goList(){
                this.$router.push('/musiclist')
            }
        }
    }
</script>

<style scoped>
img{
    width: 50%;
}
</style>