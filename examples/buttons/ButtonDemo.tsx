import React from 'react';
import { Button } from '../../components/ui/Button';

// アイコンの例
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/>
  </svg>
);

/**
 * ボタンコンポーネントのデモ
 * 
 * このコンポーネントは、Buttonコンポーネントの様々な使用例を示します。
 * - バリエーション (プライマリ/セカンダリ)
 * - サイズ (小/中/大)
 * - 状態 (通常/無効/ローディング)
 * - アイコン配置 (左/右)
 * - 幅 (通常/全幅)
 */
export default function ButtonDemo() {
  return (
    <div className="space-y-8 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">プライマリボタン</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">小</Button>
          <Button>中（デフォルト）</Button>
          <Button size="lg">大</Button>
          <Button disabled>無効</Button>
          <Button isLoading>ローディング</Button>
          <Button leftIcon={<SendIcon />}>アイコン（左）</Button>
          <Button rightIcon={<SendIcon />}>アイコン（右）</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">セカンダリボタン</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm">小</Button>
          <Button variant="secondary">中（デフォルト）</Button>
          <Button variant="secondary" size="lg">大</Button>
          <Button variant="secondary" disabled>無効</Button>
          <Button variant="secondary" isLoading>ローディング</Button>
          <Button variant="secondary" leftIcon={<SendIcon />}>アイコン（左）</Button>
          <Button variant="secondary" rightIcon={<SendIcon />}>アイコン（右）</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">全幅ボタン</h2>
        <div className="space-y-4">
          <Button fullWidth>プライマリ（全幅）</Button>
          <Button variant="secondary" fullWidth>セカンダリ（全幅）</Button>
        </div>
      </div>
    </div>
  );
}

/**
 * 個別のボタン使用例 - Storybook向けに分離したサンプル
 * これらは単体テストやStorybookでの表示に役立ちます
 */
export function PrimaryButton() {
  return <Button>プライマリボタン</Button>;
}

export function SecondaryButton() {
  return <Button variant="secondary">セカンダリボタン</Button>;
}

export function SmallButton() {
  return <Button size="sm">小さいボタン</Button>;
}

export function LoadingButton() {
  return <Button isLoading>ローディング</Button>;
}

export function IconButton() {
  return <Button leftIcon={<SendIcon />}>アイコン付き</Button>;
} 