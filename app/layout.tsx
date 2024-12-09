import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
  title: {
    default: "Billicious | Simplify Group Expense Splitting",
    template: "%s | Billicious",
  },
  description:
    "Effortlessly split bills, track group expenses, and settle debts with our user-friendly open-source expense sharing app.",
  applicationName: "Billicious",
  keywords: [
    "Bill Splitting App",
    "Split Bills Online",
    "Expense Sharing",
    "Group Payment Tool",
    "Debt Tracker",
    "Expense Management",
    "Split Bills with Friends",
    "Trip Expense Splitter",
    "Roommate Bill Sharing",
    "Group Finance Tracker",
  ],
  authors: [
    {
      name: "Mohd Zaid and Keshav Singh",
      url: "https://github.com/BioHazard786",
    },
  ],
  creator: "Mohd Zaid and Keshav Singh",
  publisher: "Mohd Zaid and Keshav Singh",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.png",
        href: "/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png",
        href: "/favicon-dark.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_DOMAIN!,
    title: "Billicious | Simplify Group Expense Splitting",
    description:
      "Effortlessly split bills, track group expenses, and settle debts with our user-friendly open-source expense sharing app.",
    siteName: "Billicious",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Billicious - Group Expense Splitting App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billicious | Simplify Group Expense Splitting",
    description:
      "Effortlessly split bills, track group expenses, and settle debts with our user-friendly open-source expense sharing app.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
