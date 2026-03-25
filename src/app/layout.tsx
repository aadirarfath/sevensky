import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SevenSky — Digital Agency | Strategy, Design & Marketing",
  description:
    "SevenSky is a premium digital agency offering web design, SEO, branding, photography, social media, and ad campaigns. Built for brands that refuse to blend in.",
  keywords: "digital agency, web design, SEO, branding, social media, photography, Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
