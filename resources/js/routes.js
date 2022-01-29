
import AppLayout from './components/layouts/AppLayout.vue';
import DashboardLayout from './components/layouts/DashboardLayout.vue';
import Index from './components/frontend/Index.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Profile from './components/auth/Profile.vue';

import DashboardIndex from './components/dashboard/welcome/Index.vue';
import AllPage from './components/dashboard/page/AllPage.vue';
import CreatePage from './components/dashboard/page/CreatePage.vue';
import EditPage from './components/dashboard/page/EditPage.vue';
 
export const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'index',
                component: Index,
            },
        ],
    },
    {
        path: '/login',
        component: AppLayout,
        meta: { guest: true },
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
        component: AppLayout,
        meta: { guest: true },
        children: [
            {
                path: '',
                name: 'register',
                component: Register,
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
        children: [
            {
                path: '',
                name: 'dashboard.index',
                component: DashboardIndex,
            },
        ],
    },
    {
        path: '/dashboard/page',
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'dashboard.page.index',
                component: AllPage,
            },
        ],
    },
    {
        path: '/dashboard/page/create',
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'dashboard.page.create',
                component: CreatePage,
            },
        ],
    },
    {
        path: '/dashboard/page/edit/:id',
        component: DashboardLayout,
        children: [
            {
                path: '',
                name: 'dashboard.page.edit',
                component: EditPage,
            },
        ],
    }
];