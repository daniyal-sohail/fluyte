"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { serviceApi, ServiceRequestData } from '../../api/ApiService';

// Define interfaces
interface ServicePopupProps {
    onClose: () => void;
    serviceTitle: string;
}

interface NotificationPopupProps {
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    onClose: () => void;
}

// Success/Error Notification Popup
const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, type, title, message, onClose }) => {
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen && popupRef.current) {
            gsap.fromTo(popupRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const Icon = type === 'success' ? CheckCircle : XCircle;
    const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500';
    const borderColor = type === 'success' ? 'border-green-500/20' : 'border-red-500/20';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4">
            <div
                ref={popupRef}
                className={`bg-[#121212] text-white rounded-xl w-full max-w-md p-6 shadow-2xl border ${borderColor}`}
                style={{ opacity: 0, transform: 'scale(0.9)' }}
            >
                <div className="flex items-center mb-4">
                    <Icon className={`h-6 w-6 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Got it
                </button>
            </div>
        </div>
    );
};

// Service configurations with dynamic content
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

const ServicePopup: React.FC<ServicePopupProps> = ({ onClose, serviceTitle }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    // Refs for animations
    const popupOverlayRef = useRef<HTMLDivElement | null>(null);
    const popupContentRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);

    // Get service configuration
    const config = serviceConfigs[serviceTitle as keyof typeof serviceConfigs] || {
        title: `Request ${serviceTitle}`,
        description: "Let's discuss your project and bring your ideas to life"
    };

    const closePopup = (): void => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsOpen(false);
                onClose();
            }
        });

        if (popupContentRef.current) {
            tl.to(popupContentRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        if (popupOverlayRef.current) {
            tl.to(popupOverlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.2");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showNotification = (type: 'success' | 'error', title: string, message: string) => {
        setNotification({ isOpen: true, type, title, message });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isOpen: false }));
        if (notification.type === 'success') {
            setTimeout(() => closePopup(), 300);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
            showNotification('error', 'Validation Error', 'Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('error', 'Invalid Email', 'Please enter a valid email address');
            return;
        }

        // Description length validation
        if (formData.description.length < 10) {
            showNotification('error', 'Description Too Short', 'Please provide more details about your project (at least 10 characters)');
            return;
        }

        setIsSubmitting(true);

        try {
            const serviceData: ServiceRequestData = {
                name: formData.name,
                email: formData.email,
                serviceTitle: serviceTitle,
                description: formData.description
            };

            const response = await serviceApi.submitServiceRequest(serviceData);

            if (response.success) {
                showNotification(
                    'success',
                    'Service Request Submitted!',
                    `Thank you for your ${serviceTitle} request! I'll review your requirements and send you a detailed proposal within 24-48 hours.`
                );

                // Reset form
                setFormData({ name: '', email: '', description: '' });
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: unknown) {
            console.error('Service form submission error:', error);
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation when popup opens
    useEffect(() => {
        if (isOpen && popupOverlayRef.current && popupContentRef.current && formRef.current) {
            const tl = gsap.timeline();

            // Animate overlay
            tl.fromTo(popupOverlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            // Animate content
            tl.fromTo(popupContentRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.1"
            );

            // Animate form
            tl.fromTo(formRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                "-=0.2"
            );
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    ref={popupOverlayRef}
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[999]"
                    onClick={closePopup}
                    style={{ opacity: 0 }}
                >
                    <div
                        ref={popupContentRef}
                        className="bg-[#121212] text-white z-[999] rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
                        onClick={(e): void => e.stopPropagation()}
                        style={{ opacity: 0, transform: 'scale(0.9)' }}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={closePopup}
                                className="text-gray-400 hover:text-white transition-colors"
                                disabled={isSubmitting}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">{config.title}</h2>
                                <p className="text-gray-400 text-sm">{config.description}</p>
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

            <NotificationPopup
                isOpen={notification.isOpen}
                type={notification.type}
                title={notification.title}
                message={notification.message}
                onClose={closeNotification}
            />
        </>
    );
};

export default ServicePopup;