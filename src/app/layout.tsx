import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head"; 
import "./globals.css";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


// Load custom fonts  for  in CSS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Set up metadata 
export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "latest  and responsive website built with Next.js",
  openGraph: {
    title: "E-Commerce Website",
    description: " latest and responsive website built with Next.js ",
    url: "https://yourwebsite.com",
    siteName: " Responsive Site",
  },
};

// Set up viewport 

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
