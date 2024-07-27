import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  title = "SpaceTradeCore"
}: Readonly<{
  children: React.ReactNode;
  title?: string;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Marketplace for buying and selling goods" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
