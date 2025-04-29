'use client';

import Script from 'next/script';

export default function AdBanner() {
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        onLoad={() => {
          try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error('Ad init error:', e);
          }
        }}
      />
      <div className="flex justify-center my-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: 320, height: 50 }}
          data-ad-client="ca-app-pub-2999212471207815"
          data-ad-slot="1754977902"
          data-ad-format="auto"
          data-adtest="on" // ← 表示確認用。あとで削除
        />
      </div>
    </>
  );
}