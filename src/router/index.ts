import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const TITLE = 'DanQing — Local-first AI'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: TITLE },
    },
    {
      path: '/studio',
      name: 'studio',
      component: () => import('../views/StudioView.vue'),
      meta: { title: `Studio · ${TITLE}` },
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/TeamsView.vue'),
      meta: { title: `Teams · ${TITLE}` },
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('../views/MailView.vue'),
      meta: { title: `Mail · ${TITLE}` },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || TITLE
})
