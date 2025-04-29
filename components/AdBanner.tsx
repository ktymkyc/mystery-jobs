'use client';
import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.setAttribute('data-ad-client', 'ca-app-pub-2999212471207815');
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: 320, height: 50 }}
        data-ad-client="ca-app-pub-2999212471207815"
        data-ad-slot="1754977902"
        data-ad-format="auto"
      />
    </div>
  );
}