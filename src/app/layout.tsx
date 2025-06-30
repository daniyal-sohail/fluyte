import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { PersonStructuredData, WebsiteStructuredData, ServiceStructuredData } from "@/components/Common/StructuredData";
import GoogleAnalytics from "@/components/Common/GoogleAnalytics";

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
    default: "Daniyal Sohail - Full Stack Developer & Web Designer",
    template: "%s | Daniyal Sohail"
  },
  description: "Daniyal Sohail is a professional Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and services.",
  keywords: [
    "Daniyal Sohail",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer"
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
    title: "Daniyal Sohail - Full Stack Developer & Web Designer",
    description: "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies. View portfolio, projects, and services.",
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
    title: "Daniyal Sohail - Full Stack Developer & Web Designer",
    description: "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies.",
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
        <link rel="preload" href="/img/logo.png" as="image" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <PersonStructuredData />
        <WebsiteStructuredData />
        <ServiceStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hide no-scrollbar force-no-scrollbar`}
      >
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Your content */}
        {children}
        <SpeedInsights />
      </body>
    </html >
  );
}