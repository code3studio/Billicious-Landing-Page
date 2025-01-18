import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Info from "@/components/Info";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
  title: {
    default: "PumpVolt | AI Meets pump.fun",
    template: "%s | PumpVolt",
  },
  description:
    "Experience seamless management with advanced dashboards, AI-assisted optimization, and secure wallet funding. The ultimate bundler platform for modern operations.",
  applicationName: "PumpVolt",
  keywords: [],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ctext y='14' font-size='16'%3E⚡%3C/text%3E%3C/svg%3E",
      },
    ],
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_DOMAIN!,
    title: "PumpVolt | AI Meets Pump.Fun",
    description:
      "Experience seamless management with advanced dashboards, AI-assisted optimization, and secure wallet funding. The ultimate bundler platform for modern operations.",
    siteName: "PumpVolt",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PumpVolt | AI Meets Pump.Fun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PumpVolt | AI Meets Pump.Fun",
    description:
      "Experience seamless management with advanced dashboards, AI-assisted optimization, and secure wallet funding. The ultimate bundler platform for modern operations.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN!,
  },
  category: "Finance",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("custom-scrollbars scroll-smooth", GeistSans.className)}
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Info /> {/* Add Info section here */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

