"use client";
import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import ServicesHero from '../../components/ServicesComponents/ServicesHero';
import { AllServices } from '../../components/ServicesComponents/AllServices';
import { MyWorkFlow } from '../../components/ServicesComponents/MyWorkFlow';
import { WeCollaborate } from '../../components/Common/WeCollaborate';
import ServicePopup from '../../components/Common/ServicePopup';

function Page() {
    const [isServicePopupOpen, setIsServicePopupOpen] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<string>('');

    useEffect(() => {
        const handleOpenServicePopup = (event: Event) => {
            const customEvent = event as CustomEvent;
            setSelectedService(customEvent.detail.serviceTitle);
            setIsServicePopupOpen(true);
        };

        window.addEventListener('openServicePopup', handleOpenServicePopup);
        return () => {
            window.removeEventListener('openServicePopup', handleOpenServicePopup);
        };
    }, []);

    return (
        <>
            {/* Service Popup Component */}
            {isServicePopupOpen && (
                <ServicePopup
                    onClose={() => setIsServicePopupOpen(false)}
                    serviceTitle={selectedService}
                />
            )}

            <div>
                <Navbar />
                <ServicesHero />
                <AllServices />
                <MyWorkFlow />
                <WeCollaborate />
                <Footer />
            </div>
        </>
    );
}

export default Page;