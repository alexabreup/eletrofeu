const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'drawer-player', component: () => import('pages/DrawerPlayerPage.vue') }
    ]
  },
  
  // Redirect from root to drawer player
  {
    path: '/index.html',
    redirect: '/drawer-player'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
