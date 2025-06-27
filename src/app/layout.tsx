import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
  title: "Daniyal Sohail - Full Stack Developer",
  description: "Professional portfolio of Daniyal Sohail, a full stack developer specializing in modern web technologies.",
  metadataBase: new URL('https://your-domain.vercel.app'), // Replace with your actual domain
  openGraph: {
    title: "Daniyal Sohail - Full Stack Developer",
    description: "Professional portfolio of Daniyal Sohail, a full stack developer specializing in modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniyal Sohail - Full Stack Developer",
    description: "Professional portfolio of Daniyal Sohail, a full stack developer specializing in modern web technologies.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hide no-scrollbar force-no-scrollbar`}
      >
        {/* Your content */}
        {children}
        <SpeedInsights />
      </body>
    </html >
  );
}