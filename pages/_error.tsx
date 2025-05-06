'use client';

import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';

function CustomErrorPage({ statusCode }: { statusCode?: number }) {
  const router = useRouter();

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🙏ごめんなさい
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-center text-[#233506]">
            📶通信エラー📶
          </h2>
        </>
      }
      footer={
        <button
          onClick={() => router.push('/')}
          className="w-full max-w-[312px] bg-gradient-to-b from-[#FC4CFF] to-[#CA00A5] text-white text-[22px] font-bold py-4 rounded-[24px] shadow-md shadow-black/25 cursor-pointer"
        >
          診断スタートにもどる
        </button>
      }
    >
      <div className="flex flex-col items-center justify-between flex-grow px-6 gap-6 mt-12">
        {/* サブテキスト */}
        <p className="text-[20px] font-medium text-center text-[#233506] leading-relaxed max-w-[312px]">
          🙇‍♂️しばらくお待ちください🙇‍♀️
        </p>
        {/* 4人イラスト */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="text-[100px] leading-[100px]">👨‍🍳</div>
          <div className="text-[100px] leading-[100px]">👩‍🎤</div>
          <div className="text-[100px] leading-[100px]">👩‍🚀</div>
          <div className="text-[100px] leading-[100px]">👨‍🎨</div>
        </div>
      </div>
    </AppLayout>
  );
}

// Next.js の要件に応じて getInitialProps を追加
CustomErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default CustomErrorPage;