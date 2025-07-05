// lib/axios.ts
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
    // baseURL: 'https://portfolio-backend-qmx5.onrender.com',
    baseURL: 'http://localhost:3001/api',
    // baseURL: '/api', // Point to Next.js API routes
    timeout: 30000, // Increased to 30 seconds for contact form submissions
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Log the initial configuration
console.log('Axios instance created with baseURL:', api.defaults.baseURL);
console.log('Axios instance created with timeout:', api.defaults.timeout);

// Request interceptor - Add auth tokens, logging, etc.
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
        console.log('Full URL being called:', `${config.baseURL}${config.url}`);
        console.log('Original timeout:', config.timeout);

        // Set longer timeout for contact-related endpoints
        if (config.url?.includes('/contact') || config.url?.includes('/service')) {
            config.timeout = 45000; // 45 seconds for contact forms
            console.log('Contact endpoint detected - timeout set to:', config.timeout);
        }

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
        console.error('Error timeout value:', error.config?.timeout);

        // Handle timeout errors specifically
        if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
            console.error('Request timed out. This might be due to slow server response or network issues.');
            return Promise.reject(new Error('Request timed out. Please check your internet connection and try again.'));
        }

        // Handle network errors
        if (!error.response) {
            console.error('Network error - no response received');
            return Promise.reject(new Error('Network error. Please check your internet connection and try again.'));
        }

        return Promise.reject(error);
    }
);

export default api;