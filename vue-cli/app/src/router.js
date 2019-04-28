import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/Movie'
import Music from './views/music/Music'
import Picture from './views/picture/Picture'
import PictureDetail from './views/picture/PictureDetail'
import Book from './views/book/Book'
import MusicList from './views/music/MusicList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path:'/book',
      name:'book',
      component: Book
    },
      {
          path: '/music',
          name: 'music',
          component: Music
      },
      {
          path:'/picture',
          name:'picture',
          component: Picture
      },
      {
          path:'/pictureDetail/:index',
          name:'pictureDetail',
          component:PictureDetail
      },
      {
          path:'/musiclist',
          name:'musiclist',
          component:MusicList
      }
  ]
})
