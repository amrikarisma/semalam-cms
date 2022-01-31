
import { createWebHistory, createRouter } from "vue-router";

import AppLayout from './components/layouts/AppLayout.vue';
import DashboardLayout from './components/layouts/DashboardLayout.vue';
import AuthLayout from './components/layouts/AuthLayout.vue';
import Index from './components/frontend/Index.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Profile from './components/auth/Profile.vue';

import PostDetail from './components/frontend/PostDetail.vue';

import DashboardIndex from './components/dashboard/welcome/Index.vue';
import AllPage from './components/dashboard/page/AllPage.vue';
import CreatePage from './components/dashboard/page/CreatePage.vue';
import EditPage from './components/dashboard/page/EditPage.vue';
import IndexPost from './components/dashboard/post/Index.vue';
import CreatePost from './components/dashboard/post/Create.vue';
import EditPost from './components/dashboard/post/Edit.vue';

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: Index,
            },
        ],
    },
    {
        path: '/login',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'login',
                component: Login,
            },
        ],
    },
    {
        path: '/register',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'register',
                component: Register,
            },
        ],
    }, 
    {
        path: '/article/:slug',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'post.detail',
                component: PostDetail,
            },
        ],
    }, 
    {
        path: '/dashboard/profile/:userId',
        component: DashboardLayout,
        props: true,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'user',
                component: Profile,
            },
        ],
    }, 
    {
        path: '/dashboard',
        component: DashboardLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard.index',
                component: DashboardIndex,
            },
            // Route Page
            {
                path: '/dashboard/page',
                name: 'dashboard.page.index',
                component: AllPage,
            },
            {
                path: '/dashboard/page/create',
                name: 'dashboard.page.create',
                component: CreatePage,
            },
            {
                path: '/dashboard/page/edit/:id',
                name: 'dashboard.page.edit',
                component: EditPage,
            },
            //  Route Post
            {
                path: '/dashboard/post',
                name: 'dashboard.post.index',
                component: IndexPost,
            },
            {
                path: '/dashboard/post/create',
                name: 'dashboard.post.create',
                component: CreatePost,
            },
            {
                path: '/dashboard/post/edit/:id',
                name: 'dashboard.post.edit',
                component: EditPost,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',

});

router.beforeEach((to, from, next) => {  
    const token = localStorage.getItem('jwt') == null;  
    if (to.matched.some(record => record.meta.guest)) {
      if (!token) next({ name: 'login' })
      else next()
    } 
    if (to.matched.some(record => record.meta.requiresAuth)) { 
      if (token) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      } 
   }else{
    next()  
  }
})

export default router;
