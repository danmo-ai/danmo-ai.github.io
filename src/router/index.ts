import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const TITLE = 'Danmo — Local-first AI'

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
      path: '/make',
      name: 'make',
      component: () => import('../views/StudioView.vue'),
      meta: { title: `Make · ${TITLE}` },
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/TeamsView.vue'),
      meta: { title: `Work · ${TITLE}` },
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import('../views/MailView.vue'),
      meta: { title: `Inbox · ${TITLE}` },
    },
    // Legacy redirects
    { path: '/studio', redirect: '/make' },
    { path: '/teams', redirect: '/work' },
    { path: '/mail', redirect: '/inbox' },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || TITLE
})
