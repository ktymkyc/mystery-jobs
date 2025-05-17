'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AppLayout from '@components/AppLayout';

export default function AdPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const date = searchParams.get('date');

  useEffect(() => {
    if (!date || typeof date !== 'string') return;

    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('data-ad-client', 'ca-app-pub-2999212471027158/1754977902');
      document.head.appendChild(script);
    }

    const timer = setTimeout(() => {
      router.push(`/countdown?date=${date}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [date, router]);

  return (
    <AppLayout
      header={
        <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
          🧠データを集計中です
        </h4>
      }
    >
      <div className="flex flex-col items-center justify-center w-full flex-grow">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: 320, height: 50 }}
          data-ad-client="ca-app-pub-2999212471027158"
          data-ad-slot="1754977902"
          data-ad-format="auto"
        />
        <p className="text-[24px] font-extrabold text-[#233506] mt-4">Now Loading...</p>
      </div>
    </AppLayout>
  );
}