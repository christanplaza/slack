import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login';
import Chat from '../pages/Chat';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ],
  mode: 'history'
})
