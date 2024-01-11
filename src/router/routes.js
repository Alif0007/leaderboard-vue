
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/dashboard/', name: "Dashboard", component: () => import('pages/Index.vue') },
      { path: '/dashboard/userlist', component: () => import('pages/UsersList.vue') },
      { path: '/dashboard/addnew', component: () => import('pages/AddNew.vue') },
      { path: '/dashboard/mycontent', component: () => import('pages/MyContent.vue') },
      // { path: '/login', component: () => import('pages/LoginPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/',
    component: () => import('pages/LoginPage.vue')
  }

]

export default routes
