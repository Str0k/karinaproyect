import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusted Childcare for Your Special Events | Kansas City",
  description:
    "Professional childcare provider specializing in event babysitting, in-home care, and bilingual services for Kansas City families. Background checked, CPR certified, 5+ years experience.",
  keywords: [
    "childcare Kansas City",
    "event babysitter",
    "party childcare",
    "bilingual babysitter",
    "in-home babysitting",
    "birthday party childcare",
  ],
  authors: [{ name: "Kansas City Childcare" }],
  openGraph: {
    title: "Trusted Childcare for Your Special Events | Kansas City",
    description:
      "Professional childcare for parties, events, and special occasions. Peace of mind while you celebrate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Childcare for Your Special Events",
    description:
      "Professional childcare for parties, events, and special occasions.",
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
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
