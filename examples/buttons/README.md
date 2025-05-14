# ボタンコンポーネントデモ

このディレクトリには、ボタンコンポーネントのデモと、将来的なStorybook連携のためのファイルが含まれています。

## 構成

- `ButtonDemo.tsx` - ボタンの使用例を示すデモコンポーネント
- `Button.stories.tsx` - Storybook用のストーリー定義（将来の連携用）
- `ButtonDemoApp.tsx` - デモ専用のアプリエントリーポイント

## デモの表示方法

### 方法1: Next.jsページとして表示（推奨）

1. プロジェクトルートで以下のコマンドを実行:
   ```bash
   npm run dev
   ```

2. ブラウザで以下のURLにアクセス:
   ```
   http://localhost:3000/button-demo
   ```

### 方法2: 専用アプリとして表示（一時的な方法）

1. `package.json`の`main`エントリを次のように変更:
   ```json
   "main": "./examples/buttons/ButtonDemoApp.tsx",
   ```

2. Expoを起動:
   ```bash
   npx expo start
   ```

3. **重要**: テスト後は`package.json`の`main`を元の値に戻してください:
   ```json
   "main": "./node_modules/expo/AppEntry.js",
   ```

## Storybook連携

将来的にStorybookを導入する際には、`Button.stories.tsx`が利用可能です。
このファイルには、様々なボタンの状態やバリエーションが含まれています。

## デザイントークン

ボタンコンポーネントで使用されている色やサイズは、Figmaのデザイントークンと同期させることができます。
figma-developer-mcpを使用して、デザイントークンを自動的に同期する予定です。 