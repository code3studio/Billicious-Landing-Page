import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://billcious.vercel.app"),
  keywords: [
    "Bill Splitting App",
    "Split Bills Online",
    "Expense Sharing App",
    "Group Payment Tool",
    "Shared Expenses Manager",
    "Split the Bill",
    "Group Expense Tracker",
    "Split Bills with Friends",
    "Group Finance App",
    "Roommate Expense Tracker",
    "Trip Expense Manager",
    "Shared Bills Calculator",
    "Automated Bill Splitting",
    "Settle Up Payments",
    "Group Spending Tracker",
    "Split Dinner Bill",
    "Shared Payment App",
    "Bill Splitting Made Easy",
    "Expense Splitter",
    "Group Cost Sharing",
  ],
  title: "Billcious | Simplify the calculation of splitting group expenses",
  description:
    "Split your bills easily! Billicious is an open-source Webapp built for tracking debts and payments quickly",
  applicationName: "Billicious",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="dark">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
