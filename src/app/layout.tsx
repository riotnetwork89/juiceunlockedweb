import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JUICE UNLOCKED - Unlock Your Sound",
  description: "The ultimate music blog and promo platform. Submit your music, get featured, and unlock your potential.",
  keywords: "music blog, music promotion, hip hop, rap, music submission, playlist placement",
  openGraph: {
    title: "JUICE UNLOCKED - Unlock Your Sound",
    description: "The ultimate music blog and promo platform. Submit your music, get featured, and unlock your potential.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JUICE UNLOCKED - Unlock Your Sound",
    description: "The ultimate music blog and promo platform. Submit your music, get featured, and unlock your potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-juice-black text-white`}>
        {children}
      </body>
    </html>
  );
}
