/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
