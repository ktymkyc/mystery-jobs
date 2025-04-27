'use client';

import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface AppLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export default function AppLayout({ children, header, footer }: AppLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const showBackButton = pathname !== '/'; // ホーム以外なら表示

  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen pt-14 pb-14 px-6 text-[#233506] relative"
      style={{
        background: 'linear-gradient(180deg, #E5FF63 0%, #F0FFD0 15%, #FFFBF0 60%, #E3DAFF 80%, #ABC4FF 100%)',
      }}
    >
      {/* 戻るボタン（ホーム以外） */}
      {showBackButton && (
        <button
          onClick={() => router.push('/')}
          className="absolute top-4 left-4 text-xs font-bold text-[#233506] bg-[#F0FFD0] rounded-full px-2 py-[6px] shadow-md shadow-black/25 cursor-pointer"
        >
          ◀︎
        </button>
      )}

      {header && (
        <header className="flex flex-col items-center gap-3 w-full max-w-[312px]">
          {header}
        </header>
      )}
      <main className="flex flex-col items-center justify-start w-full flex-grow">
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