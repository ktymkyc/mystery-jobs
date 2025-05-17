'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';

export default function CountdownPage() {
  const router = useRouter();
  const { isReady, query } = router;
  const { date } = query;
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (!isReady || !date || typeof date !== 'string') return;
  
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push(`/result?date=${date}`);
    }
  }, [count, isReady, date, router]); // ← router を追加
  return (
    <AppLayout
      header={
        <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
          🔍あなたに適した職業は...
        </h4>
      }
    >
      <div className="flex flex-col items-center justify-center w-full flex-grow">
        <div
          className="text-[100px] font-black text-center bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #FC4CFF, #CA00A5)',
          }}
        >
          {count}
        </div>
      </div>
    </AppLayout>
  );
}