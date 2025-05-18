// components/MetaHead.tsx
import Head from 'next/head';

export default function MetaHead() {
  return (
    <Head>
      <title>MYSTERY JOBS | だれも知らない適職診断</title>
      <meta property="og:title" content="MYSTERY JOBS | だれも知らない適職診断" />
      <meta property="og:description" content="いくつか項目を入力するだけで   あなたにぴったり（？）な未知の職業を提案してくれるアプリです。" />
      <meta property="og:image" content="https://mystery-jobs.vercel.app/ogp.jpg" />
      <meta property="og:url" content="https://mystery-jobs.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}