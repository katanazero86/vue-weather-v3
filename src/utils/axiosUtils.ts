import axios from 'axios';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL: string = process.env.VITE_BASE_URL || '';
const api: AxiosInstance = axios.create({baseURL: BASE_URL});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error) => {
    console.log('request error');
    console.log(error);
});

api.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error) => {
    console.log('response error');
    console.log(error);
    return error;
});

export {api, axios}
