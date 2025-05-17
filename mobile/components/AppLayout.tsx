'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface AppLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export default function AppLayout({ children, header, footer }: AppLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const showBackButton = pathname !== '/';
  const isCountdownPage = pathname.startsWith('/countdown');
  const isAdPage = pathname.startsWith('/ad');
  const disableBack = isCountdownPage || isAdPage;

  const [paddingStyle, setPaddingStyle] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPaddingStyle({
        paddingTop: window.innerHeight < 700 ? '24px' : '56px',
        paddingBottom: window.innerHeight < 700 ? '24px' : '56px',
        paddingLeft: window.innerWidth < 700 ? '0' : '24px',
        paddingRight: window.innerWidth < 700 ? '0' : '24px',
      });
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen min-h-svh px-6 text-[#233506] relative"
      style={{
        background: 'linear-gradient(180deg, #E5FF63 0%, #F0FFD0 15%, #FFFFFB 60%, #E3DAFF 80%, #ABC4FF 100%)',
        ...paddingStyle,
      }}
    >
      {/* 戻るボタン（ホーム以外） */}
      {showBackButton && (
        <button
          onClick={() => {
            if (!disableBack) router.push('/');
          }}
          disabled={disableBack}
          className={`absolute top-4 left-4 text-xs font-bold px-2 py-[6px] rounded-full ${
            disableBack
              ? 'text-[#D2CEBD] bg-[#F0FFDB] cursor-not-allowed'
              : 'text-[#233566] bg-[#F0FFDB] shadow-md shadow-black/25 cursor-pointer'
          }`}
        >
          ◀︎
        </button>
      )}

      {header && (
        <header className="flex flex-col items-center gap-3 w-full max-w-[312px]">
          {header}
        </header>
      )}
      <main className="flex flex-col items-center w-full flex-grow min-h-full">
        {children}
      </main>
      {footer && (
        <footer className="flex flex-col items-center justify-end gap-3 mt-8 w-full min-h-[101px]">
          {footer}
        </footer>
      )}
    </div>
  );
}