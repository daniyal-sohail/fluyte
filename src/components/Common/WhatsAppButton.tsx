'use client';

import Image from 'next/image';

const WhatsAppButton = () => {
    // const phoneNumber = '03254881328';
    const whatsappUrl = `https://wa.me/923254881328`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-4 left-4 z-[9999] sm:bottom-6 sm:left-6">
            <button
                onClick={handleClick}
                className="text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Contact on WhatsApp"
                title="Chat on WhatsApp"
            >
                <Image
                    src="/img/wh.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                />
            </button>
        </div>
    );
};

export default WhatsAppButton;