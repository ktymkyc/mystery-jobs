'use client';

import { M_PLUS_Rounded_1c } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // ←これ追加！

const mplusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ここでGAのscriptタグを追加 */}
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-67H5JZG7DK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-67H5JZG7DK');
            `,
          }}
        />
      </Head>

      <main className={mplusRounded.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
