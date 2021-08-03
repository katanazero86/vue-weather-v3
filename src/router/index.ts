import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'App',
        component: () => import('../App.vue'),
        children: [
            {
                path: '/',
                name: 'Index',
                component: () => import('../views/Index.vue'),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
