'use client';

import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';

export default function StartPage() {
  const router = useRouter();

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center">
            🔍ぜったい転職サイトに載ってない
          </h4>
          <h1 className="text-[64px] font-black leading-tight text-center">
            知らない<br />職業診断
          </h1>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            さぁ知らない職業を探そう！
          </h4>
          <button
            onClick={() => router.push('/input')}
            className="w-full max-w-[312px] bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
          >
            診断スタート
          </button>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-4 mt-auto">
        <div className="text-[100px] leading-[100px]">👨‍🍳</div>
        <div className="text-[100px] leading-[100px]">👩‍🎤</div>
        <div className="text-[100px] leading-[100px]">👩‍🚀</div>
        <div className="text-[100px] leading-[100px]">👨‍🎨</div>
      </div>
    </AppLayout>
  );
}
