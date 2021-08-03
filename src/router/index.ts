import {createWebHistory, createRouter} from 'vue-router';
import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'App',
        component: () => import('../App.vue'),
        children: [
            // {
            //     path: '',
            //     name: '',
            //     component: UserProfile
            // },
            {
                path: '',
                name: 'Test',
                component: () => import('../components/Test.vue'),
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
