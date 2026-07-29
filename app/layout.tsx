import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import FloatingContact from "@/components/FloatingContact";
import ScrollToTop from "@/components/ScrollToTop";
import GroundingStone from "@/components/GroundingStone";
import A11yScaler from "@/components/A11yScaler";
import JsonLdSchema from "@/components/JsonLdSchema";
import SoundscapePlayer from "@/components/SoundscapePlayer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Maya Reynolds | Holistic Therapy & Trauma Recovery",
    template: "%s | Dr. Maya Reynolds"
  },
  description: "Specializing in holistic, body-centered therapy and EMDR for trauma recovery, anxiety, and relationship issues in Seattle, WA and online.",
  keywords: ["holistic therapy", "trauma recovery", "EMDR", "Seattle therapist", "anxiety counseling", "couples therapy"],
  authors: [{ name: "Dr. Maya Reynolds" }],
  creator: "Dr. Maya Reynolds",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    title: "Dr. Maya Reynolds | Holistic Therapy & Trauma Recovery",
    description: "Specializing in holistic, body-centered therapy and EMDR for trauma recovery, anxiety, and relationship issues.",
    siteName: "Dr. Maya Reynolds Therapy"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <JsonLdSchema />
        <Providers>
          {children}
          <FloatingContact />
          <ScrollToTop />
          <GroundingStone />
          <A11yScaler />
          <SoundscapePlayer />
        </Providers>
      </body>
    </html>
  );
}
