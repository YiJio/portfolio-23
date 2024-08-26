import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		meta: { transition: 'fade', mode: 'out-in' },
		component: () => import('../views/HomeView.vue')
	}, {
		path: '/home',
		redirect: { name: 'home' }
	}, {
		path: '/about',
		name: 'about',
		meta: { transition: 'slide-right', mode: 'default' },
		component: () => import('../views/AboutView.vue')
	}, {
		path: '/work',
		name: 'work',
		meta: { transition: 'slide-left', mode: 'default' },
		component: () => import('../views/WorkView.vue')
	}, {
		path: '/work/:id',
		name: 'project',
		meta: { transition: 'fade', mode: 'out-in' },
		component: () => import('../views/ProjectView.vue')
	}, {
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('../views/404View.vue')
	},
]

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes
})

/*router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})*/

export default router;