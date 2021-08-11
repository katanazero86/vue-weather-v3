import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../layouts/DefaultLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/Index.vue'),
            },
            {
                path: 'about',
                component: () => import('../views/About/About.vue'),
            }
        ]
    }
];

export default routes;
