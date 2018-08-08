/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'
import DouBan from '@/components/DouBan'

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
    },
    {
      path: '/DouBan',
      name: 'DouBan',
      component: DouBan
    }
  ]
})
