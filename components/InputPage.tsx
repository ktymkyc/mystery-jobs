'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';

export default function InputPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [birthDate, setBirthDate] = useState('');

  const handleClick = () => {
    // ブラウザが対応していればカレンダーポップアップ
    if (inputRef.current) {
      if (inputRef.current.showPicker) {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  const handleSubmit = () => {
    if (birthDate) {
      router.push(`/result?date=${birthDate}`);
    }
  };

  return (
    <AppLayout
      header={
        <header className="flex flex-col items-center gap-2">
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🔍職業を見つけるには？
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-center text-[#233506]">
            📅生年月日を入力📅
          </h2>
        </header>
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
                ? 'bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white shadow-md shadow-black/25 cursor-pointer'
                : 'bg-[#E6C1E6] text-[#F7ECF7] cursor-default'
            }`}            
          >
            診断する
          </button>
        </>
      }
    >
      <div className="w-full flex justify-center mt-12">
        <div
          onClick={handleClick}
          className="w-full max-w-[312px] border-2 border-black bg-white text-center text-[22px] px-4 py-4 rounded-[16px] cursor-pointer"
        >
          <input
            ref={inputRef}
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full bg-transparent text-center appearance-none focus:outline-none cursor-pointer"
          />
        </div>
      </div>
    </AppLayout>
  );
}