import {defineConfig} from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

export default defineConfig({
    mode: 'development',
    envDir: 'root',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 8000,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, './localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './localhost.pem')),
        }
    },
    build: {
        sourcemap: true,
        cssCodeSplit: true,
    },
    plugins: [vuePlugin()]
})
