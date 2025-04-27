'use client';

import { useEffect, useState } from 'react';
import SplashPage from '@/components/SplashPage';
import StartPage from '@/components/StartPage'; // これまで使っていた診断スタート画面

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2秒間だけスプラッシュ

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <SplashPage /> : <StartPage />}
    </>
  );
}