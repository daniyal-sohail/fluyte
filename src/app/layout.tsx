import type { Metadata } from "next";
import { Aldrich, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/Common/StructuredData";
import GoogleAnalytics from "@/components/Common/GoogleAnalytics";
import GoogleTagManager from "@/components/Common/GoogleTagManager";
import SmoothScroll from "@/components/Common/SmoothScroll";
import AOSInitializer from "@/components/Common/AOS";

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

const aldrich = Aldrich({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// layout.tsx metadata
export const metadata: Metadata = {
  title: {
    default: "Daniyal Sohail - SaaS Engineer & Full Stack Developer | Lahore, Pakistan",
    template: "%s | Daniyal Sohail"
  },
  description: "Daniyal Sohail is a SaaS Engineer and Full Stack Developer from Lahore, Pakistan. He helps founders and startups go from idea to a live, revenue-generating AI-powered SaaS product. Building XenorAI — approved by Microsoft for Startups and accepted into Takhleeq Incubator.",
  keywords: [
    "Daniyal Sohail",
    "SaaS Engineer",
    "AI Developer",
    "Full Stack Developer",
    "AI SaaS Development",
    "SaaS MVP Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "RAG Pipeline Developer",
    "OpenAI Developer",
    "LLM Integration",
    "AI Chatbot Developer",
    "AI Automation Developer",
    "Freelance AI Developer",
    "Freelance SaaS Developer",
    "Hire SaaS Developer",
    "Hire AI Developer",
    "SaaS for Founders",
    "AI for Startups",
    "XenorAI",
    "DevXcript",
    "Microsoft for Startups",
    "Takhleeq Incubator",
    "Lahore Pakistan Developer",
    "Pakistan AI Developer",
    "Daniyal Sohail Portfolio",
    "Daniyal Sohail Website",
    "daniyalsohail.me",
  ],
  authors: [{ name: "Daniyal Sohail" }],
  creator: "Daniyal Sohail",
  publisher: "Daniyal Sohail",
  metadataBase: new URL("https://daniyalsohail.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daniyalsohail.me",
    siteName: "Daniyal Sohail",
    title: "Daniyal Sohail - SaaS Engineer & AI Developer | Lahore, Pakistan",
    description: "Helping founders turn ideas into production-ready AI-powered SaaS products. Building XenorAI — approved by Microsoft for Startups and accepted into Takhleeq Incubator.",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Daniyal Sohail - SaaS Engineer & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@daniyalsohail",
    creator: "@daniyalsohail",
    title: "Daniyal Sohail - SaaS Engineer & AI Developer | Lahore, Pakistan",
    description: "Helping founders turn ideas into production-ready AI-powered SaaS products. Building XenorAI — approved by Microsoft for Startups.",
    images: ["/img/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/img/hero.png" as="image" />
        <link rel="preload" href="/img/log.png" as="image" />

        {/* Font styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />

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
        <link rel="preconnect" href="https://cdn.botpress.cloud" />

        {/* Structured Data for SEO */}
        <PersonStructuredData />
        <WebsiteStructuredData />

        {/* Google Tag Manager */}
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aldrich.variable} ${spaceGrotesk.variable} antialiased scrollbar-hide no-scrollbar force-no-scrollbar`}
      >

        {/* Google Analytics */}
        <GoogleAnalytics />
        <AOSInitializer />
        <SmoothScroll />


        {/* Your content */}
        {children}

        {/* WhatsApp Floating Button */}
        {/* <WhatsAppButton /> */}


        <SpeedInsights />
      </body>
    </html>
  );
}