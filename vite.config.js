import {defineConfig} from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 8000
    },
    build: {
        sourcemap: true,
        cssCodeSplit: true,
    },
    plugins: [vuePlugin()]
})