import React from 'react';
import ButtonDemo from './ButtonDemo';

/**
 * Web環境専用のボタンデモアプリ
 * 純粋なReactコンポーネントでWebに対応
 */
export default function ButtonDemoWeb() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <header style={{ 
        padding: '16px', 
        backgroundColor: '#FC4CFF', 
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>ボタンコンポーネントデモ</h1>
      </header>
      
      <main style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <ButtonDemo />
        
        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginTop: 0 }}>使用方法</h2>
          <p>以下のように利用できます：</p>
          <pre style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '10px', 
            borderRadius: '4px',
            overflowX: 'auto'
          }}>
            {`import { Button } from './components/ui/Button';

// プライマリボタン
<Button>ボタンテキスト</Button>

// セカンダリボタン
<Button variant="secondary">ボタンテキスト</Button>

// サイズ
<Button size="sm">小</Button>
<Button>中（デフォルト）</Button>
<Button size="lg">大</Button>`}
          </pre>
        </div>
      </main>
      
      <footer style={{ 
        padding: '16px', 
        backgroundColor: '#f0f0f0', 
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        color: '#666'
      }}>
        <p style={{ margin: 0 }}>Figma Design Tokens + React Componentサンプル</p>
      </footer>
    </div>
  );
} 