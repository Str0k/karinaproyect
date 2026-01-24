import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareByKG - Trusted Childcare for Your Special Events | Kansas City",
  description:
    "Professional childcare provider specializing in event babysitting, in-home care, and bilingual services for Kansas City families. Background checked, CPR certified, 5+ years experience. Call (913) 206-9322",
  keywords: [
    "childcare Kansas City",
    "event babysitter",
    "party childcare",
    "bilingual babysitter",
    "in-home babysitting",
    "birthday party childcare",
    "CareByKG",
  ],
  authors: [{ name: "CareByKG" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "CareByKG - Trusted Childcare for Your Special Events",
    description:
      "Professional childcare for parties, events, and special occasions. Peace of mind while you celebrate. Call (913) 206-9322",
    type: "website",
    locale: "en_US",
    siteName: "CareByKG",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "CareByKG - Professional Childcare Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareByKG - Trusted Childcare for Your Special Events",
    description:
      "Professional childcare for parties, events, and special occasions. Call (913) 206-9322",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
