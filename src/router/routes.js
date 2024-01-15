
const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    // beforeEnter: (to, from, next) => {
    //   const user = localStorage.getItem("apiToken")
    //   if (!user) {
    //     next('/');
    //   } else {
    //     next();
    //   }
    // },
    children: [
      { path: '/', name: "Dashboard", component: () => import('pages/Index.vue') },
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
    name: 'login',
    component: () => import('pages/LoginPage.vue')
  }

]

// routes.beforeEach((to, from, next) => {
//   console.log('router')
//   if (!localStorage.getItem("apiToken")) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default routes
