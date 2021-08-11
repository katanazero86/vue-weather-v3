import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        components: {
            default: () => import('../components/Layouts/DefaultLayout.vue'),
            spinner: () => import('../components/Spinner/Spinner.vue'),
        },
        children: [
            {
                path: '',
                component: () => import('../pages/Index.vue'),
            },
            {
                path: 'about',
                component: () => import('../pages/About/About.vue'),
            }
        ]
    }
];

export default routes;
