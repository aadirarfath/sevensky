import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
