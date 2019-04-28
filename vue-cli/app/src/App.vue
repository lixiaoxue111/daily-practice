<template>
  <div id="app">
    <c-header :obj="obj"></c-header>
    <div id="content">
      <router-view></router-view>
    </div>
    <c-footer :menu="menu" :color="obj.bgColor" @changeBg="color"></c-footer>
  </div>
</template>
<script>
  import CHeader from '@/components/Header.vue'
  import CFooter from '@/components/Footer.vue'
  export default {
      components:{
          CHeader,
          CFooter
      },
      data(){
          return {
              menu:[
                  {
                      name:'电影',
                      path:'/movie',
                      bgColor:'#f00'
                  },
                  {
                      name:'音乐',
                      path:'/music',
                      bgColor:"#4abcc1"
                  },
                  {
                      name:'书籍',
                      path:'/book',
                      bgColor:"orange"
                  },
                  {
                      name:'图片',
                      path:'/picture',
                      bgColor:'#96c2f1'
                  }
              ],
              obj:{
                  bgColor:"#f00",
                  name:'电影',
                  path:'/movie'
              }
          }
      },
      methods:{
          color(obj){
            this.obj = obj
          }
      },
      created(){
          let result = this.menu.filter((obj,index)=>{
              return obj.path == this.$route.path
          });
          if(result.length){
              this.obj = result[0];
          }
      }
  }
</script>
<style>
#content{
  margin: 1rem 0;
}
</style>
