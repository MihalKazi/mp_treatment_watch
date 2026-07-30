import type { Metadata } from "next";
import { Noto_Serif_Bengali, Noto_Sans_Bengali, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/components/LanguageProvider";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bn-serif",
  subsets: ["bengali"],
  weight: ["500", "600", "700"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bn-sans",
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-en-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-en-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "এমপি চিকিৎসা নজরদারি — MP Treatment Watch",
  description:
    "Tracking Bangladeshi politicians and MP/central party leaders who took medical treatment abroad after 5 August 2024, comparing what they spent abroad against equivalent treatment costs in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} ${notoSansBengali.variable} ${sourceSerif.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
