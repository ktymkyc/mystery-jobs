'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';
import AdBanner from '@/components/AdBanner';
import { jobParts1 } from '@/data/jobParts1';
import { jobParts2 } from '@/data/jobParts2';

export default function ResultPage() {
  const router = useRouter();
  const { date } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [icon1, setIcon1] = useState('');
  const [icon2, setIcon2] = useState('');
  const [person, setPerson] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (date && typeof date === 'string') {
      const seed = parseInt(date.replaceAll('-', ''));

      const part1 = jobParts1[seed % jobParts1.length];
      const part2 = jobParts2[(seed * 3) % jobParts2.length];

      setTitle(`${part1.text}${part2.text}`);
      setIcon1(part1.icon);
      setIcon2(part2.icon);
      setPerson(part2.person);
      setDescription(`${part1.description} ${part2.description}`);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000); // 5秒間ローディング（＝広告スペース表示）
      
      return () => clearTimeout(timer);
    }
  }, [date]);

  if (isLoading) {
    // Now Loading...画面を広告スペースに見立てる
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #E5FF63 0%, #F0FFD0 15%, #FFFBF0 60%, #E3DAFF 80%, #ABC4FF 100%)',
        }}
      >
        <div className="text-center">
          <AdBanner />
          <p className="text-lg font-bold text-[#233506] mb-4">Now Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🔍だれも知らない職業は...
          </h4>
          <h2 className="flex items-center justify-center text-[28px] font-black leading-tight text-left text-[#233506] gap-2">
            <span>{icon1}</span>
            <span>{title}</span>
            <span>{icon2}</span>
          </h2>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            今すぐ転職？それとも
          </h4>
          <button
            onClick={() => router.push('/')}
            className="w-full max-w-[312px] bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
          >
            もう一度診断する
          </button>
        </>
      }
    >
      <div className="flex flex-col items-center justify-between flex-grow px-6 gap-6 mt-12">
        <p className="text-[20px] font-medium text-[#233506] leading-relaxed max-w-[312px]">
          {description}
        </p>
        <div className="text-[100px] leading-[100px]">{person}</div>
      </div>
    </AppLayout>
  );
}