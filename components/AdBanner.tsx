'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // すでにスクリプトが読み込まれている場合は何もしない
    if (document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous'; // セキュリティ強化のため追加
    script.setAttribute('data-ad-client', 'ca-app-pub-2999212471207158/1754977902');
    document.head.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: 320, height: 50 }}
        data-ad-client="ca-app-pub-2999212471207158/1754977902"
        data-ad-slot="1754977902"
        data-ad-format="auto"
      />
    </div>
  );
}
