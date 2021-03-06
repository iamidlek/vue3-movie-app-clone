import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // hash, history 모드
  // 해쉬 모드 사용 .com/#/페이지
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {// pathMatch는 notFound 와 같이 아무거나 입력 가능
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})
