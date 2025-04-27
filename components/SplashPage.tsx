'use client';

import Image from 'next/image';

export default function SplashPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#FC4CFF]">
      <Image
        src="/splash-screen-logo.png"
        alt="だれも知らない適職診断"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}