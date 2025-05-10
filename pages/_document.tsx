// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* PWA設定 */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FC4CFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="description" content="簡単な質問に答えるだけで、だれも知らない適職診断ができちゃいます！" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}