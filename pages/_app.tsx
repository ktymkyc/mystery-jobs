'use client';

import { M_PLUS_Rounded_1c } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// フォント設定
const mplusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) {
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=G-67H5JZG7DK`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-67H5JZG7DK', { page_path: '${pathname}' });
      `;
      document.head.appendChild(script2);
    } else {
      window.gtag('config', 'G-67H5JZG7DK', { page_path: pathname });
    }
  }, [pathname]);

  return (
    <main className={mplusRounded.className}>
      <Component {...pageProps} />
    </main>
  );
}
