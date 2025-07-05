"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { contactApi, ContactFormData } from '../../api/ApiService';

interface ServicePopupLayoutProps {
    children: React.ReactNode;
}

// Service configurations with dynamic content - currently unused but kept for future use
/*
const serviceConfigs = {
    "Full-Stack Web Development": {
        title: "Request For Full-Stack Web Development Service",
        description: "Get a powerful, scalable web application built with modern technologies"
    },
    "Frontend Development": {
        title: "Request For Frontend Development Service",
        description: "Create stunning, responsive user interfaces that engage your users"
    },
    "Backend Development": {
        title: "Request For Backend Development Service",
        description: "Build robust server-side solutions with secure APIs and databases"
    },
    "UI/UX Design": {
        title: "Request For UI/UX Design Service",
        description: "Design exceptional user experiences that delight your customers"
    },
    "Graphic Design": {
        title: "Request For Graphic Design Service",
        description: "Professional visual identity and branding that makes you stand out"
    },
    "WordPress & Shopify Development": {
        title: "Request For WordPress/Shopify Development",
        description: "Custom websites and online stores optimized for your business"
    },
    "Website Maintenance & Optimization": {
        title: "Request For Website Maintenance",
        description: "Keep your website running smoothly with professional maintenance"
    }
};
*/

export function ServicePopupLayout({ children }: ServicePopupLayoutProps) {
    const [activePopup, setActivePopup] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    useEffect(() => {
        const handleOpenPopup = (event: Event) => {
            const customEvent = event as CustomEvent;
            setActivePopup(customEvent.detail.serviceTitle);
            setFormData({
                name: '',
                email: '',
                service: customEvent.detail.serviceTitle,
                description: ''
            });
            setNotification({ isOpen: false, type: 'success', title: '', message: '' });
        };

        window.addEventListener('openServicePopup', handleOpenPopup);
        return () => {
            window.removeEventListener('openServicePopup', handleOpenPopup);
        };
    }, []);

    const closePopup = () => {
        setActivePopup(null);
        setFormData({ name: '', email: '', service: '', description: '' });
        setNotification({ isOpen: false, type: 'success', title: '', message: '' });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isOpen: false }));
        if (notification.type === 'success') {
            setTimeout(() => closePopup(), 300);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showNotification = (type: 'success' | 'error', title: string, message: string) => {
        setNotification({ isOpen: true, type, title, message });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const contactData: ContactFormData = {
                name: formData.name,
                email: formData.email,
                type: 'service',
                service: formData.service,
                description: formData.description
            };

            const response = await contactApi.submitContact(contactData);

            if (response.success) {
                showNotification(
                    'success',
                    'Service Request Sent!',
                    'Thank you for your service inquiry! I&apos;ll send you a detailed proposal within 24-48 hours.'
                );
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: unknown) {
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {children}

            {activePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
                    <div className="bg-[#121212] text-white rounded-xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                            disabled={isSubmitting}
                        >
                            ✕
                        </button>

                        <div className="mt-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Request {activePopup}</h2>
                                <p className="text-gray-400 text-sm">Let&apos;s discuss your project and bring your ideas to life</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                                        Service Needed
                                    </label>
                                    <input
                                        type="text"
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white disabled:opacity-50"
                                        placeholder="Service name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                                        Project Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        rows={4}
                                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white resize-none disabled:opacity-50"
                                        placeholder="Tell me about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {notification.isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-[10000] flex items-center justify-center p-4">
                    <div className="bg-[#121212] text-white rounded-xl w-full max-w-md p-6 shadow-2xl border border-gray-500/20">
                        <div className="flex items-center mb-4">
                            {notification.type === 'success' ? (
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                            ) : (
                                <XCircle className="h-6 w-6 text-red-500 mr-3" />
                            )}
                            <h3 className="text-xl font-bold">{notification.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6">{notification.message}</p>
                        <button
                            onClick={closeNotification}
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}