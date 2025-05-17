'use client';

import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';
import { useEffect, useState } from 'react';

export default function StartPage() {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth < 400);
    }
  }, []);

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center">
            🔍ぜったい転職サイトに載ってない
          </h4>
          <div className="flex flex-col items-center gap-2 relative pt-5">
            <h1 className="text-[64px] font-black leading-tight text-center">
              <span className="absolute -left-4 -top-1 text-[22px] font-black text-[#233506] -rotate-6">だれも</span>
              知らない<br />適職診断
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-[24px] font-black">
              MYSTERY JOBS
            </p>
          </div>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            だれも知らない職業を探そう！
          </h4>
          <button
            onClick={() => router.push('/start')}
            className="w-full max-w-[312px] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
            style={{
              background: 'linear-gradient(to bottom, #FC4CFF 0%, #CA00A5 100%)',
            }}
          >
            診断スタート
          </button>
        </>
      }
    >
        {isSmallScreen ? (
          <div className="grid grid-cols-1 gap-4 mt-auto">
            <div className="text-[100px] leading-[100px]">👩‍🎤</div>
          </div>
          
        ) : (
          <>
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="text-[100px] leading-[100px]">👨‍🍳</div>
            <div className="text-[100px] leading-[100px]">👩‍🎤</div>
            <div className="text-[100px] leading-[100px]">👩‍🚀</div>
            <div className="text-[100px] leading-[100px]">👨‍🎨</div>
          </div>
          </>
        )}
    </AppLayout>
  );
}