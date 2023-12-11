import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Molecules/Footer/Footer";
import Header from "@/components/Molecules/Header/Header";
import { footer } from "@/components/Molecules/Footer/config";
import CookieBanner from "@/components/Molecules/CookeBanner/CookieBanner";
import Container from "@/components/Atoms/Container/Container";
import Breadcrumbs from "@/components/Molecules/Breadcrumbs/Breadcrumbs";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real-Estate",
  description: "Real estate website",
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className='bg-white tracking-normal'>{children}</main>
        <Footer {...footer} />
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
