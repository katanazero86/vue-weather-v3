import axios from 'axios';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL: string = import.meta.env.VITE_BASE_URL.trim() || '';
const api: AxiosInstance = axios.create({baseURL: BASE_URL});

// request interceptor
api.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error) => {
    console.log('request error');
    console.log(error);
    return Promise.reject(error);
});

// response interceptor
api.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error) => {
    console.log('response error');
    console.log(error);
    return Promise.reject(error);
});

export {api, axios}
