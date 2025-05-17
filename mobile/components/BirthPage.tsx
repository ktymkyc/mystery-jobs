'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '@components/AppLayout';

export default function BirthPage() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  const past = new Date();
  past.setFullYear(today.getFullYear() - 150);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const minDate = formatDate(past);
  const maxDate = formatDate(today);

  const handleSubmit = () => {
    if (birthDate) {
      router.push(`/ad?date=${birthDate}`);
    }
  };

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            📅さいごに
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-center text-[#233506]">
            生年月日を入力
          </h2>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            あなたにマッチした職業を
          </h4>
          <button
            onClick={handleSubmit}
            disabled={!birthDate}
            className={`w-full max-w-[312px] text-[22px] font-bold py-4 rounded-[24px] ${
              birthDate
                ? 'text-white shadow-md shadow-black/25 cursor-pointer'
                : 'text-[#F7ECF7] cursor-not-allowed'
            }`}
            style={{
              background: birthDate
                ? 'linear-gradient(to bottom, #FC4CFF 0%, #CA00A5 100%)'
                : '#E6C1E6',
              WebkitAppearance: 'none',
              border: 'none',
            }}
          >
            診断する
          </button>
        </>
      }
    >
      <div
        onClick={() => inputRef.current?.focus()}
        className="w-full max-w-[312px] flex flex-col items-center justify-between flex-grow gap-6 mt-12"
      >
        <input
          ref={inputRef}
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          min={minDate}
          max={maxDate}
          className="w-full min-h-[71px] border-2 border-black bg-white text-center text-[22px] px-4 py-4 rounded-[16px] cursor-pointer appearance-none focus:outline-none"
        />
        <div className="text-[100px] leading-[100px]">👩‍🍼</div>
      </div>
    </AppLayout>
  );
}