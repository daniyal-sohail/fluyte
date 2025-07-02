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
                { opacity: 0, scale: 0.9, y: -20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const Icon = type === 'success' ? CheckCircle : XCircle;
    const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500';
    const borderColor = type === 'success' ? 'border-green-500/20' : 'border-red-500/20';

    return (
        <div className="fixed top-4 right-4 z-[9999] max-w-sm">
            <div
                ref={popupRef}
                className={`bg-[#121212] text-white rounded-xl p-4 shadow-2xl border ${borderColor}`}
                style={{ opacity: 0, transform: 'scale(0.9)' }}
            >
                <div className="flex items-center mb-2">
                    <Icon className={`h-5 w-5 ${iconColor} mr-2`} />
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300 text-sm"
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
        title: "Request Full-Stack Development",
        description: "Get a powerful, scalable web application built with modern technologies"
    },
    "Frontend Development": {
        title: "Request Frontend Development",
        description: "Create stunning, responsive user interfaces"
    },
    "Backend Development": {
        title: "Request Backend Development",
        description: "Build robust server-side solutions with secure APIs"
    },
    "UI/UX Design": {
        title: "Request UI/UX Design",
        description: "Design exceptional user experiences"
    },
    "Graphic Design": {
        title: "Request Graphic Design",
        description: "Professional visual identity and branding"
    },
    "WordPress & Shopify Development": {
        title: "Request WordPress/Shopify Development",
        description: "Custom websites and online stores"
    },
    "Website Maintenance & Optimization": {
        title: "Request Website Maintenance",
        description: "Keep your website running smoothly"
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

    const popupRef = useRef<HTMLDivElement | null>(null);

    // Get service configuration
    const config = serviceConfigs[serviceTitle as keyof typeof serviceConfigs] || {
        title: `Request ${serviceTitle}`,
        description: "Let's discuss your project"
    };

    const closePopup = (): void => {
        if (popupRef.current) {
            gsap.to(popupRef.current, {
                opacity: 0,
                scale: 0.9,
                y: -20,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    setIsOpen(false);
                    onClose();
                }
            });
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
            showNotification('error', 'Description Too Short', 'Please provide more details (at least 10 characters)');
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
                    'Request Submitted!',
                    `Thanks! I'll send you a proposal within 24-48 hours.`
                );
                setFormData({ name: '', email: '', description: '' });
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: unknown) {
            console.error('Service form submission error:', error);
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Disable body scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            // Disable scroll
            document.body.style.overflow = 'hidden';

            // Animation
            if (popupRef.current) {
                gsap.fromTo(popupRef.current,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        }

        // Cleanup function to re-enable scroll
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Compact popup positioned relative to viewport */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] w-[90vw] max-w-md">
                <div
                    ref={popupRef}
                    className="bg-[#121212] text-white rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
                    style={{ opacity: 0, transform: 'scale(0.9)' }}
                >
                    {/* Header with close button */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-800">
                        <h2 className="text-lg font-bold text-teal-400">{config.title}</h2>
                        <button
                            onClick={closePopup}
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            disabled={isSubmitting}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form content */}
                    <div className="p-4">
                        <p className="text-gray-400 text-sm mb-4">{config.description}</p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded-lg 
                                               focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                                               text-white text-sm placeholder-gray-500 disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded-lg 
                                               focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                                               text-white text-sm placeholder-gray-500 disabled:opacity-50"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="description"
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    rows={3}
                                    className="w-full px-3 py-2 bg-[#1e1e1e] border border-gray-700 rounded-lg 
                                               focus:ring-1 focus:ring-teal-500 focus:border-teal-500 
                                               text-white text-sm placeholder-gray-500 resize-none disabled:opacity-50"
                                    placeholder="Project description..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-teal-500 hover:bg-teal-600 text-white 
                                           font-medium py-2.5 px-4 rounded-lg 
                                           transition-colors duration-300 
                                           disabled:opacity-50 disabled:cursor-not-allowed 
                                           flex items-center justify-center text-sm"
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

            {/* Light backdrop that doesn't dominate */}
            <div
                className="fixed inset-0 bg-black bg-opacity-30 z-[998]"
                onClick={closePopup}
            />

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