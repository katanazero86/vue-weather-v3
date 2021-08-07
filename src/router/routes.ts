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
        ]
    }
];

export default routes;
