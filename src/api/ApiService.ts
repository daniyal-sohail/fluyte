// lib/api.ts
import api from '../config/axios';

// ==================== TYPE DEFINITIONS ====================

export interface ContactFormData {
    name: string;
    email: string;
    type: 'question' | 'service' | 'meeting';
    question?: string;
    service?: string;
    description?: string;
}

export interface ServiceRequestData {
    name: string;
    email: string;
    serviceTitle: string;
    description: string;
}

// ==================== CONTACT API ====================

export const contactApi = {
    async submitContact(data: ContactFormData) {
        try {
            const response = await api.post('/contact', data);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to submit contact form';
            throw new Error(errorMessage);
        }
    },
};

// ==================== SERVICE API ====================

export const serviceApi = {
    async submitServiceRequest(data: ServiceRequestData) {
        try {
            const response = await api.post('/service', data);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to submit service request';
            throw new Error(errorMessage);
        }
    },
};