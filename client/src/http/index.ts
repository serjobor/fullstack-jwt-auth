import axios from "axios";

export const API_URL = 'http://localhost:4000/api/v1';

const $api = axios.create({ 
    withCredentials: true,
    baseURL:API_URL
});

$api.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default $api;