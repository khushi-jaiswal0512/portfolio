import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aniketdev.vercel.app/"), 
  title: "Khushi Jaiswal - Portfolio",
  description: "Explore Khushi Jaiswal's portfolio – a Full Stack Developer, Designer, and Machine Learning Enthusiast. Showcasing projects, skills, and experience.",
  openGraph: {
    title: "Khushi Jaiswal - Portfolio",
    description: "Explore my projects, skills, and experience in development and machine learning.",
    url: "https://aniketdev.vercel.app/",
    siteName: "Khushi Jaiswal's Portfolio",
    images: [
      {
        url: "pro pic.jpg", 
        width: 1200,
        height: 630,
        alt: "Preview of Khushi Jaiswal's Portfolio Website",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Khushi Jaiswal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Khushi Jaiswal, Full Stack Developer, Portfolio, Projects, Skills" />
        <link rel="canonical" href="https://aniketdev.vercel.app/" />
        <meta name="description" content="Explore Khushi Jaiswal's portfolio showcasing projects, skills, and experience." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Khushi Jaiswal",
              url: "https://aniketdev.vercel.app/",
              jobTitle: "Full Stack Developer & Coding Enthusiast",
              sameAs: [
                "https://github.com/khushi-jaiswal0512",
                "https://www.linkedin.com/in/khushijaiswal-/", 
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
