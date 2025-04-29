'use client';

import { M_PLUS_Rounded_1c } from 'next/font/google';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Script from 'next/script';

const mpPlusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics スクリプト（推奨形式） */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-67H5JZG7DK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-67H5JZG7DK');
        `}
      </Script>

      <main className={mpPlusRounded.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}