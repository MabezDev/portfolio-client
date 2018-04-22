import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import NotFound from '@/views/NotFound'
import BlogList from '@/views/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/blog',
      component: BlogList
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
