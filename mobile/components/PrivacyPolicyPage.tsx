'use client';

import AppLayout from '@components/AppLayout';

export default function PrivacyPolicyPage() {
  return (
    <AppLayout
      header={
        <header className="flex flex-col items-center gap-2">
          <h1 className="text-[16px] font-black leading-tight text-center text-[#233506]">
            📝プライバシーポリシー
          </h1>
        </header>
      }
      footer={null}
    >
      <div className="flex flex-col items-center justify-start min-h-screen min-h-svh py-12 px-6 text-[#233506]">
        <div className="max-w-2xl w-full">
          <p className="mb-4">
            KATAYAMA Kiyoshi（以下「当方」といいます）は、当方が提供するスマートフォンアプリ（以下「本アプリ」といいます）において、ユーザーの個人情報の保護に最大限の注意を払います。
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. 取得する情報</h2>
          <p className="mb-4">本アプリでは、ユーザーの個人情報（氏名、住所、電話番号など）を一切取得いたしません。ただし、アプリの改善や広告配信のため、以下の情報を収集することがあります。</p>
          <ul className="list-disc list-inside mb-4">
            <li>端末情報（OSバージョン、端末機種など）</li>
            <li>アプリの利用状況（起動回数、利用時間など）</li>
            <li>広告ID（Google Advertising IDなど）</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. 情報の利用目的</h2>
          <p className="mb-4">取得した情報は、以下の目的のために利用します。</p>
          <ul className="list-disc list-inside mb-4">
            <li>本アプリの品質向上、機能改善のため</li>
            <li>ユーザーサポートのため</li>
            <li>広告配信およびその効果測定のため</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. 情報の第三者提供</h2>
          <p className="mb-4">当方は、法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. 利用している外部サービス</h2>
          <p className="mb-4">本アプリでは、以下の外部サービスを利用する場合があります。各サービスのプライバシーポリシーについては、各社のホームページをご確認ください。</p>
          <ul className="list-disc list-inside mb-4">
            <li>Google Analytics for Firebase</li>
            <li>Google AdMob</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. プライバシーポリシーの変更</h2>
          <p className="mb-4">本ポリシーの内容は、ユーザーに通知することなく変更されることがあります。変更後のプライバシーポリシーは、本アプリまたはウェブサイト上に掲載した時点で効力を生じます。</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. お問い合わせ</h2>
          <p className="mb-4">本ポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします。</p>
          <p className="mb-4">katayama.design@gmail.com</p>
        </div>
      </div>
    </AppLayout>
  );
}