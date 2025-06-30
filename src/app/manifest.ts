import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Daniyal Sohail - Full Stack Developer',
        short_name: 'Daniyal Sohail',
        description: 'Professional Full Stack Developer specializing in React, Node.js, and modern web technologies',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/img/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/img/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/img/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
} 