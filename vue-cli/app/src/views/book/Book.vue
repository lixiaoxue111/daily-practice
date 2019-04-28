<template>
    <div>
        <slide :imgs="imgs"></slide>
    </div>
</template>

<script>
    import Slide from '@/components/Slider.vue'
    export default {
        components:{
            Slide
        },
        data(){
            return{
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
            }
        }
    }
</script>

<style scoped>

</style>