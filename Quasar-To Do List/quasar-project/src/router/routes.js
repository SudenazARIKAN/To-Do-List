
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TodoPage.vue') },
      { path: '/help', component: () => import('pages/HelpPage.vue') }
    ]
  }
]

  // Always leave this as last one,
  // but you can also remove it
  if(process.env.MODE !== 'ssr') {
   routes.push({
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  })
}


export default routes
