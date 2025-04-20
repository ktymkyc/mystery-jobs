// components/AppLayout.tsx
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export default function AppLayout({ children, header, footer }: AppLayoutProps) {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen pt-14 pb-14 px-6 text-[#233506]"
      style={{
        background: 'linear-gradient(180deg, #E5FF63 0%, #F0FFD0 15%, #FFFBF0 60%, #E3DAFF 80%, #ABC4FF 100%)',
      }}
    >
      {header && (
        <header className="flex flex-col items-center gap-4">
          {header}
        </header>
      )}
      <main className="flex flex-col items-center justify-start w-full min-h-[300px]">
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