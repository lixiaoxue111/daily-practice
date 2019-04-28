<template>
    <div>
        <img v-for="(imgSrc,index) in $store.state.photos" :key="index"
            :src="imgSrc.src" @click="goDetail(index)"
        />
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            axios.get('/data/photodata.json').then((result)=>{
                console.log(result);
                this.$store.commit('addPhoto',result.data.photoData)
            }).catch((err)=>{
                console.log(err);
            })
        },
        methods:{
            goDetail(index){
                this.$router.push('/pictureDetail/'+index);
            }
        }
    }
</script>

<style scoped>
img{
    width: 50%;
}
</style>