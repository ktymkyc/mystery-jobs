'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import AppLayout from '@/components/AppLayout';

export default function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  // 引数なしバージョンに変更
  const handleAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push('/birth'); // 最後の質問後に生年月日入力へ
    }
  };

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🔍【質問{currentQuestionIndex + 1}】
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-left text-[#233506]">
            {questions[currentQuestionIndex].text}
          </h2>
        </>
      }
      footer={
        <>
          <h4 className="text-[16px] font-extrabold text-[#4D0532] text-center">
            ↙️どちらか答えてね↘️
          </h4>
          <div className="flex w-full flex-row items-center justify-center gap-3">
            <button
              onClick={handleAnswer} // ← ここをシンプルに
              className="w-full max-w-[150px] bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
            >
              いいえ
            </button>
            <button
              onClick={handleAnswer} // ← ここもシンプルに
              className="w-full max-w-[150px] bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
            >
              はい
            </button>
          </div>
        </>
      }
    >
      <div className="flex flex-col items-center justify-end flex-grow px-6 gap-6 mt-12">
        <div className="text-[100px] leading-[100px]">{questions[currentQuestionIndex].icon}</div>
      </div>
    </AppLayout>
  );
}