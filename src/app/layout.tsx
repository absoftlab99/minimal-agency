import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "@/components/Common/HeaderTop";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import FooterStripe from "@/components/Common/FooterStripe";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const anikBangla = localFont({
  src: "./fonts/AnekBangla-VariableFont_wdth,wght.ttf",
  weight: "100 900"
});


export const metadata: Metadata = {
  title: "Minimal Agency Website",
  description: "build with next.js, typescript, tailwindcss, daisyui, tablericons, reacticons,",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang='en' suppressHydrationWarning>
      <head>
        <meta property="twitter:image" content="./assets/logo.png"></meta>
        <meta property="twitter:card" content="./assets/logo.png"></meta>
        <meta property="twitter:card" content="./assets/logo.png"></meta>
        <meta property="twitter:title" content="Minimal Agency Website"></meta>
        <meta property="twitter:description" content="build with next.js, typescript, tailwindcss, daisyui, tablericons, reacticons,"></meta>
        <meta property="og:image" content="./assets/logo.png"></meta>
        <meta property="og:site_name" content="Minimal Agency Website"></meta>
        <meta property="og:title" content="Minimal Agency Website"></meta>
        <meta property="og:description" content="build with next.js, typescript, tailwindcss, daisyui, tablericons, reacticons," />
        <meta property="og:url" content="https://minimal-agency.vercel.app/"></meta>
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} ${anikBangla.className} antialiased w-full`}
      >
        <HeaderTop></HeaderTop>
        <Header></Header>
        <div className="w-full">
          {children}
        </div>
        <Footer></Footer>
        <FooterStripe></FooterStripe>
      </body>
    </html>
  );
}
