// lib/axios.ts
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
    baseURL: 'https://portfolio-backend-qmx5.onrender.com/api',
    // baseURL: 'http://localhost:3001/api',
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor - Add auth tokens, logging, etc.
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - Handle global errors, logging, etc.
api.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log(`API Response: ${response.status}`);
        return response;
    },
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api;