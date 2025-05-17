'use client';

import AppLayout from '@components/AppLayout';

export default function SupportPage() {
  return (
    <AppLayout
      header={
        <header className="flex flex-col items-center gap-2">
          <h1 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            🛠サポート情報
          </h1>
        </header>
      }
      footer={null}
    >
      <div className="flex flex-col items-center justify-start min-h-screen min-h-svh py-12 px-6 text-[#233506]">
        <div className="max-w-2xl w-full">
          <p className="mb-4">
            「だれも知らない適職診断」に関するご質問・ご要望がございましたら、以下のメールアドレスまでご連絡ください。
          </p>

          <p className="mb-8 text-left font-mono">katayama.design@gmail.com</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">よくあるご質問（FAQ）</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Q: 個人情報は取得されますか？</strong><br />
              A: いいえ。一切の個人情報は取得していません。
            </li>
            <li>
              <strong>Q: 診断結果は本当に正確ですか？</strong><br />
              A: いいえ。本アプリはエンタメ目的のネタ診断です。
            </li>
            <li>
              <strong>Q: アプリが動かない・読み込めない場合</strong><br />
              A: 通信環境や端末の状態をご確認の上、再度お試しください。
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">ご注意</h2>
          <p className="mb-4">
            本アプリは個人が運営する無料の診断アプリです。内容は予告なく変更されることがあります。
          </p>
        </div>
      </div>
    </AppLayout>
  );
}