'use client';

import Script from 'next/script';

interface BotpressWebChat {
    init: () => void;
    open: () => void;
    close: () => void;
    toggle: () => void;
    sendEvent: (event: Record<string, unknown>) => void;
    sendPayload: (payload: Record<string, unknown>) => void;
    mergeConfig: (config: Record<string, unknown>) => void;
}

declare global {
    interface Window {
        botpressWebChat: BotpressWebChat;
    }
}

const BotpressScripts = () => {
    return (
        <>
            {/* Botpress Webchat Integration */}
            <Script
                id="botpress-inject"
                src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('Botpress inject script loaded');
                }}
                onError={(e) => {
                    console.error('Failed to load Botpress inject script:', e);
                }}
            />
            <Script
                id="botpress-config"
                src="https://files.bpcontent.cloud/2025/07/19/19/20250719191653-5XKFP4G3.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('Botpress config script loaded');
                    // Initialize the webchat after both scripts are loaded
                    setTimeout(() => {
                        if (typeof window !== 'undefined' && window.botpressWebChat) {
                            window.botpressWebChat.init();
                            console.log('Botpress webchat initialized');
                        }
                    }, 100);
                }}
                onError={(e) => {
                    console.error('Failed to load Botpress config script:', e);
                }}
            />
        </>
    );
};

export default BotpressScripts;