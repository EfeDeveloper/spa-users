import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { routesMap } from '@/shared/constants/routesMap'

const UsersView = () => import('@/modules/users/views/UsersView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: routesMap.home.path,
    name: 'Home',
    redirect: routesMap.users.path,
    children: [
      {
        path: routesMap.users.path,
        name: routesMap.users.name,
        component: UsersView,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
