'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';
import { jobParts1 } from '@shared/data/jobParts1';
import { jobParts2 } from '@shared/data/jobParts2';

export default function ResultPage() {
  const router = useRouter();
  const { isReady, query } = router;
  const { date } = query;

  const [title, setTitle] = useState('');
  const [icon1, setIcon1] = useState('');
  const [icon2, setIcon2] = useState('');
  const [person, setPerson] = useState('');
  const [description, setDescription] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (!isReady || !date || typeof date !== 'string') return;
  
    const hashStringToNumber = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    };
  
    const seed1 = hashStringToNumber(date);
    const seed2 = hashStringToNumber(date + 'alt');
  
    const part1 = jobParts1[seed1 % jobParts1.length];
    const part2 = jobParts2[seed2 % jobParts2.length];
  
    setTitle(`${part1.text}${part2.text}`);
    setIcon1(part1.icon);
    setIcon2(part2.icon);
    setPerson(part2.person);
    setDescription(`${part1.description} ${part2.description}`);
  }, [isReady, date]);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 400);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🔍あなたに適した職業は...
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
            className="w-full max-w-[312px] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
            style={{
              background: 'linear-gradient(to bottom, #FC4CFF 0%, #CA00A5 100%)',
            }}
          >
            もう一度診断する
          </button>
        </>
      }
    >
      <div className="flex flex-col items-center justify-between flex-grow px-6 gap-6 mt-12">
        <p
          className="font-medium text-[#233506] leading-relaxed max-w-[312px]"
          style={{
            fontSize: isSmallScreen ? '16px' : '20px',
          }}
        >
          {description}
        </p>
        <div className="text-[100px] leading-[100px]">{person}</div>
      </div>
    </AppLayout>
  );
}