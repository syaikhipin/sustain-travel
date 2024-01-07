import "../styles/globals.css";
import Navigation from "@/components/navigation";
import { Metadata } from "next/types";
import { Inter } from "next/font/google";
import { seoConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
