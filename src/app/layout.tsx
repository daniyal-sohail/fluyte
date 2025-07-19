import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { PersonStructuredData, WebsiteStructuredData, ServiceStructuredData } from "@/components/Common/StructuredData";
import GoogleAnalytics from "@/components/Common/GoogleAnalytics";
import GoogleTagManager from "@/components/Common/GoogleTagManager";
import AOSInitializer from "@/components/Common/AOSInitializer";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import BotpressScripts from "@/components/Common/BotpressScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Daniyal Sohail - MERN Stack Developer & UI/UX Designer | Lahore, Pakistan",
    template: "%s | Daniyal Sohail"
  },
  description: "Daniyal Sohail - MERN Stack Developer, Full Stack Developer, Content Creator & UI/UX Designer from Lahore, Pakistan. 2.5+ years experience in NextJS, NestJS, Node.js, TypeScript, ReactJS. 10+ projects completed, 8+ happy clients. View portfolio, tutorials & hire for web development services.",
  keywords: [
    "Daniyal Sohail",
    "MERN Stack Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Content Creator",
    "React Developer",
    "Node.js Developer",
    "NextJS Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Lahore Pakistan",
    "Web Development",
    "Portfolio",
    "Hire Developer",
    "Custom Web Applications",
    "ReactJS Development",
    "Node.js Development",
    "NextJS Development",
    "NestJS Development",
    "MERN Stack Development",
    "Full Stack Development",
    "Tech Content Creator",
    "Programming Tutorials",
    "Web Development Tutorials",
    "React Tutorials",
    "Node.js Tutorials",
    "NextJS Tutorials",
    "Daniyal Sohail",
    "Daniyal Sohail Portfolio",
    "Daniyal Sohail Website",
    "Daniyal Sohail Portfolio Website",
    "Daniyal Sohail UCP Lahore",
    "Daniyal Sohail UCP Student",
    "Daniyal Sohail UCP Student",
    "TypeScript Tutorials"
  ],
  authors: [{ name: "Daniyal Sohail" }],
  creator: "Daniyal Sohail",
  publisher: "Daniyal Sohail",
  metadataBase: new URL('https://daniyalsohail.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daniyalsohail.me",
    siteName: "Daniyal Sohail Portfolio",
    title: "Daniyal Sohail - MERN Stack Developer & UI/UX Designer | Lahore, Pakistan",
    description: "Daniyal Sohail - MERN Stack Developer, Full Stack Developer, Content Creator & UI/UX Designer from Lahore, Pakistan. 2.5+ years experience in NextJS, NestJS, Node.js, TypeScript, ReactJS. 10+ projects completed, 8+ happy clients. View portfolio, tutorials & hire for web development services.",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Daniyal Sohail - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@daniyalsohail",
    creator: "@daniyalsohail",
    title: "Daniyal Sohail - MERN Stack Developer & UI/UX Designer | Lahore, Pakistan",
    description: "Daniyal Sohail - MERN Stack Developer, Full Stack Developer, Content Creator & UI/UX Designer from Lahore, Pakistan. 2.5+ years experience in NextJS, NestJS, Node.js, TypeScript, ReactJS. 10+ projects completed, 8+ happy clients.",
    images: ["/img/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/img/hero.png" as="image" />
        <link rel="preload" href="/img/log.png" as="image" />

        {/* Favicon configuration */}
        <link rel="icon" type="image/png" href="/img/log.png" sizes="28x28" />
        <link rel="icon" type="image/png" href="/img/log.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/img/log.png" />
        <link rel="shortcut icon" href="/img/log.png" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.botpress.cloud" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.botpress.cloud" />

        {/* Structured Data for SEO */}
        <PersonStructuredData />
        <WebsiteStructuredData />
        <ServiceStructuredData />

        {/* Google Tag Manager */}
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hide no-scrollbar force-no-scrollbar`}
      >
        <AOSInitializer />

        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Your content */}
        {children}

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* Botpress Scripts */}
        <BotpressScripts />

        <SpeedInsights />
      </body>
    </html>
  );
}