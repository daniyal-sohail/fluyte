"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { contactApi, ContactFormData } from '../../api/ApiService';

// Define interfaces with corrected types
interface ContactPopupProps {
    onClose: () => void;
}

interface FormComponentProps {
    onBack: () => void;
    formRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface OptionButtonProps {
    label: string;
    onClick: () => void;
    description: string;
}

interface RenderSelectedFormProps {
    option: string;
    onBack: () => void;
    formRef: React.MutableRefObject<HTMLDivElement | null>;
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

// Initial popup that shows the three options
const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    // Correctly typed refs
    const popupOverlayRef = useRef<HTMLDivElement | null>(null);
    const popupContentRef = useRef<HTMLDivElement | null>(null);

    // Create refs for each form component
    const serviceFormRef = useRef<HTMLDivElement | null>(null);
    const meetingFormRef = useRef<HTMLDivElement | null>(null);
    const questionFormRef = useRef<HTMLDivElement | null>(null);

    const closePopup = (): void => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsOpen(false);
                onClose();
                setTimeout(() => setSelectedOption(null), 300);
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

    const selectOption = (option: string): void => {
        setSelectedOption(option);
    };

    const getFormRef = (option: string): React.MutableRefObject<HTMLDivElement | null> => {
        switch (option) {
            case 'service':
                return serviceFormRef;
            case 'meeting':
                return meetingFormRef;
            case 'question':
                return questionFormRef;
            default:
                return serviceFormRef;
        }
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

    useEffect(() => {
        if (isOpen && popupOverlayRef.current && popupContentRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(popupOverlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            tl.fromTo(popupContentRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.1"
            );
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    ref={popupOverlayRef}
                    className="fixed inset-0 bg-black bg-opacity-70 z-[999] flex items-center justify-center p-4"
                    onClick={closePopup}
                    style={{ opacity: 0 }}
                >
                    <div
                        ref={popupContentRef}
                        className="bg-[#121212] text-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
                        onClick={(e): void => e.stopPropagation()}
                        style={{ opacity: 0, transform: 'scale(0.9)' }}
                    >
                        <div className="flex justify-end p-4">
                            <button
                                onClick={closePopup}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {selectedOption ? (
                            <RenderSelectedForm
                                option={selectedOption}
                                onBack={(): void => setSelectedOption(null)}
                                formRef={getFormRef(selectedOption)}
                                showNotification={showNotification}
                            />
                        ) : (
                            <div className="px-6 pb-8">
                                <h2 className="text-2xl font-bold text-center mb-6">How can I help you?</h2>

                                <div className="space-y-4">
                                    <OptionButton
                                        label="Hire Me for a Service"
                                        onClick={(): void => selectOption('service')}
                                        description="Get a quote for your project"
                                    />

                                    <OptionButton
                                        label="Schedule a 1-on-1 Meeting"
                                        onClick={(): void => selectOption('meeting')}
                                        description="Book a time to discuss your needs"
                                    />

                                    <OptionButton
                                        label="Ask a Question"
                                        onClick={(): void => selectOption('question')}
                                        description="Get answers to your queries"
                                    />
                                </div>
                            </div>
                        )}
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

// Individual option button with GSAP hover effect
const OptionButton: React.FC<OptionButtonProps> = ({ label, onClick, description }) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseEnter = (): void => {
            gsap.to(button, {
                scale: 1.03,
                backgroundColor: '#2a2a2a',
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (): void => {
            gsap.to(button, {
                scale: 1,
                backgroundColor: '#1e1e1e',
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseDown = (): void => {
            gsap.to(button, {
                scale: 0.98,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const handleMouseUp = (): void => {
            gsap.to(button, {
                scale: 1.03,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
        button.addEventListener('mousedown', handleMouseDown);
        button.addEventListener('mouseup', handleMouseUp);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
            button.removeEventListener('mousedown', handleMouseDown);
            button.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg p-4 text-left transition-all duration-300"
            onClick={onClick}
        >
            <div className="flex flex-col">
                <span className="font-medium text-white text-lg">{label}</span>
                <span className="text-gray-400 text-sm mt-1">{description}</span>
            </div>
        </button>
    );
};

// Render the appropriate form based on the selected option
const RenderSelectedForm: React.FC<RenderSelectedFormProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ option, onBack, formRef, showNotification }) => {
    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(formRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [formRef, option]);

    switch (option) {
        case 'service':
            return <ServiceRequestForm onBack={onBack} formRef={formRef} showNotification={showNotification} />;
        case 'meeting':
            return <ScheduleMeetingComponent onBack={onBack} formRef={formRef} />;
        case 'question':
            return <AskQuestionForm onBack={onBack} formRef={formRef} showNotification={showNotification} />;
        default:
            return null;
    }
};

// Service Request Form
const ServiceRequestForm: React.FC<FormComponentProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ onBack, formRef, showNotification }) => {
    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "MERN Stack Development",
        "Next.js Development",
        "Custom Software Development",
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: services[0],
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                    'Thank you for your service inquiry! I\'ll send you a detailed proposal within 24-48 hours.'
                );
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: any) {
            showNotification('error', 'Submission Failed', error.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-white mr-3 transition-colors"
                    type="button"
                    disabled={isSubmitting}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Request a Service</h2>
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
                    <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white disabled:opacity-50"
                    >
                        {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
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
    );
};

// Schedule Meeting Component (unchanged)
const ScheduleMeetingComponent: React.FC<FormComponentProps> = ({ onBack, formRef }) => {
    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-white mr-3 transition-colors"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Schedule a Meeting</h2>
            </div>

            <p className="text-gray-400 mb-6">
                Book a 1-on-1 consultation with me to discuss your project needs in detail.
            </p>

            <Link
                href="/schedule-meeting"
                className="block w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 text-center"
            >
                View My Calendar
            </Link>

            <div className="mt-6 bg-[#1e1e1e] p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-medium mb-2">What to expect</h3>
                <ul className="text-gray-400 space-y-2">
                    <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>30-minute consultation via Google Meet or Zoom</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>Discussion about your project requirements</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>Recommendations and potential solutions</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>Q&A session to address any concerns</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Ask Question Form
const AskQuestionForm: React.FC<FormComponentProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ onBack, formRef, showNotification }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const contactData: ContactFormData = {
                name: formData.name,
                email: formData.email,
                type: 'question',
                question: formData.question
            };

            const response = await contactApi.submitContact(contactData);

            if (response.success) {
                showNotification(
                    'success',
                    'Question Submitted!',
                    'Thank you for your question! I\'ll get back to you within 24 hours with a detailed answer.'
                );
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: any) {
            showNotification('error', 'Submission Failed', error.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-white mr-3 transition-colors"
                    type="button"
                    disabled={isSubmitting}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Ask a Question</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="question-name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="question-name"
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
                    <label htmlFor="question-email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="question-email"
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
                    <label htmlFor="question-text" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Question
                    </label>
                    <textarea
                        id="question-text"
                        name="question"
                        required
                        value={formData.question}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={5}
                        className="w-full px-4 py-2 bg-[#1e1e1e] border border-gray-800 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white resize-none disabled:opacity-50"
                        placeholder="What would you like to know?"
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
                        'Submit Question'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactPopup;