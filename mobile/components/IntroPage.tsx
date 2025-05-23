'use client';

import { useRouter } from 'next/navigation';
import AppLayout from '@components/AppLayout';
import { useEffect, useState } from 'react';

export default function IntroPage() {
  const router = useRouter();
  const [fontSize, setFontSize] = useState('20px');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setFontSize(window.innerWidth < 400 ? '16px' : '20px');
      };
      handleResize(); // 初期設定
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🕑まもなく診断スタート
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-left text-[#233506]">
            だれも知らない適職診断へようこそ！
          </h2>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            準備はできた？
          </h4>
          <div className="flex w-full flex-row items-center justify-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="w-full max-w-[150px] text-[#8C1751] text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, #FFF8FF 0%, #E3DAFF 50%, #ABC4FF 100%)',
              }}
            >
              もどる
            </button>
            <button
              onClick={() => router.push('/questions')}
              className="w-full max-w-[150px] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, #FC4CFF 0%, #CA00A5 100%)',
              }}
            >
              はい
            </button>
          </div>
        </>
      }
    >
      <div className="flex flex-col items-center justify-between flex-grow px-6 gap-6 mt-12">
        <p
          className="font-medium text-[#233506] leading-relaxed max-w-[312px]"
          style={{ fontSize }}
        >
          世の中にはまだだれも知らない職業があるかもしれません。<br />
          この診断では、簡単な質問に答えたあと、生年月日を入力するだけで、あなたにぴったり（かもしれない）職業が登場します。<br />
          あらたな職との出会いのきっかけに、ぜひ一度お試しください。<br />
          それでは、診断スタート！
        </p>
      </div>
    </AppLayout>
  );
}