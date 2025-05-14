import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonDemo from './ButtonDemo';

/**
 * ボタンデモ専用のアプリエントリーポイント
 * 
 * 使用方法:
 * 1. package.jsonの"main"を"./examples/buttons/ButtonDemoApp.tsx"に変更
 * 2. npx expo start
 * 
 * テスト後は元のmain値に戻すのを忘れないでください。
 */
export default function ButtonDemoApp() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <View style={{ padding: 16, backgroundColor: '#FC4CFF' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
            ボタンコンポーネントデモ
          </Text>
        </View>
        
        <ScrollView 
          style={{ flex: 1 }} 
          contentContainerStyle={{ padding: 16 }}
        >
          {Platform.OS === 'web' ? (
            // Webの場合そのまま表示
            <ButtonDemo />
          ) : (
            // NativeではReactNative対応のラッパーが必要
            <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 8 }}>
              <Text style={{ marginBottom: 20, textAlign: 'center' }}>
                モバイル環境ではボタンデモはNext.jsページで表示してください。
                詳細は「examples/buttons/README.md」を参照してください。
              </Text>
            </View>
          )}
          
          <View style={{ marginTop: 20, padding: 16, backgroundColor: 'white', borderRadius: 8 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>使用方法</Text>
            <Text>1. このデモは「ButtonDemoApp.tsx」から実行されています</Text>
            <Text>2. 通常のアプリに戻すには、package.jsonの"main"を元に戻してください</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
} 