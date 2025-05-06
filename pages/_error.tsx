'use client';

import { useRouter } from 'next/router';
import AppLayout from '@/components/AppLayout';
import { errorMessages, ErrorKey } from '@/data/error';

function CustomErrorPage({ statusCode }: { statusCode?: number }) {
  const router = useRouter();

  const { emoji, title, message } =
    errorMessages[(statusCode as ErrorKey) || 'unknown'];

  return (
    <AppLayout
      header={
        <>
          <h4 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🙏ごめんなさい
          </h4>
          <h2 className="text-[28px] font-black leading-tight text-center text-[#233506]">
            {emoji}{title}{emoji}
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
      <div className="flex flex-col justify-between flex-grow px-6 gap-6 mt-12">
        <p className="text-[20px] font-medium text-[#233506] leading-relaxed max-w-[312px]">
          {message}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-auto text-center">
        <div className="text-[100px] leading-[100px]">👨‍🍳</div>
        <div className="text-[100px] leading-[100px]">👩‍🎤</div>
        <div className="text-[100px] leading-[100px]">👩‍🚀</div>
        <div className="text-[100px] leading-[100px]">👨‍🎨</div>
      </div>
    </AppLayout>
  );
}

CustomErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default CustomErrorPage;