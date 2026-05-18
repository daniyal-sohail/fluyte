import type { Metadata } from "next";
import { Aldrich, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import AOSInitializer from "@/components/shared/AOS";
import { ThemeProvider } from "@/store/theme";

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
    default: "Fluyte - Smart Inventory Management Powered by AI",
    template: "%s | Fluyte",
  },
  description:
    "Fluyte is an AI-powered inventory management app. Scan barcodes, extract receipts with AI, track stock across multiple locations, and get real-time analytics — no hardware, no setup fee.",
  keywords: [
    "Fluyte",
    "inventory management",
    "AI inventory",
    "barcode scanning",
    "QR code inventory",
    "stock tracking",
    "AI receipt extraction",
    "multi-location inventory",
    "real-time stock analytics",
    "small business inventory",
    "restaurant inventory",
    "retail inventory management",
    "home pantry tracker",
    "IT asset management",
    "team inventory app",
    "smart inventory",
    "inventory SaaS",
    "inventory app",
    "stock management software",
    "QR label generator",
    "low stock alerts",
    "inventory for founders",
    "inventory for startups",
    "Next.js inventory app",
    "Firebase inventory",
  ],
  authors: [{ name: "Daniyal Sohail", url: "https://daniyalsohail.me" }],
  creator: "Daniyal Sohail",
  publisher: "Daniyal Sohail",
  metadataBase: new URL("https://fluyte.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fluyte.app",
    siteName: "Fluyte",
    title: "Fluyte - Smart Inventory Management Powered by AI",
    description:
      "Scan once, watch cargo load automatically. Fluyte turns your physical stock into a live digital system — no hardware, no setup fee.",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Fluyte - Smart Inventory Management Powered by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fluyte",
    creator: "@daniyalsohail",
    title: "Fluyte - Smart Inventory Management Powered by AI",
    description:
      "Scan once, watch cargo load automatically. Fluyte turns your physical stock into a live digital system — no hardware, no setup fee.",
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

        {/* Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aldrich.variable} ${spaceGrotesk.variable} antialiased scrollbar-hide no-scrollbar force-no-scrollbar`}
      >

        {/* Google Analytics */}
        <AOSInitializer />
        <SmoothScroll />


        {/* Your content */}
        <ThemeProvider>

          {children}
        </ThemeProvider>

        {/* WhatsApp Floating Button */}
        {/* <WhatsAppButton /> */}


      </body>
    </html>
  );
}