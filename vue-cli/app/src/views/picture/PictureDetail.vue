<template>
    <div>
        <router-link to="/picture" v-if="isShow">
            <v-touch v-on:swipeleft="next()" class="bg"
                     :style="{backgroundImage:'url('+ photos[iNow].src +')'}">
            </v-touch>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        computed: {
            ...mapState(['photos'])
        },
        data(){
            return{
                iNow:this.$route.params.index,
                isShow :false
            }
        },
        created() {
            if(this.photos.length==0){
                this.$router.push('/photo');
            }else{
                this.isShow = true;
            }
        },
        methods:{
            next(){
                this.iNow++;
                // console.log(this.$route.params.index);
            }
        }

    }
</script>

<style scoped>
    .bg{
        position: absolute;
        top:1rem;
        left:0px;
        bottom: 1rem;
        right:0px;
        background: #000 no-repeat center center;
        background-size: contain;
    }
</style>