import axios from 'axios';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL.trim() || '';
const api = axios.create({baseURL: BASE_URL});

// request interceptor
api.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error) => {
    console.error('request error');
    return Promise.reject(error);
});

// response interceptor
api.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error) => {
    console.error('response error');
    return Promise.reject(error);
});

export {api, axios}
