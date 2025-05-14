import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <LinearGradient
      colors={['#E5FF63', '#F0FFD0', '#FFFFFB', '#E3DAFF', '#ABC4FF']}
      locations={[0, 0.15, 0.6, 0.8, 1]}
      style={{ flex: 1 }}
    >
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://mystery-jobs.vercel.app' }}
          style={{ flex: 1, backgroundColor: 'transparent' }}
          originWhitelist={['*']}
          allowsInlineMediaPlayback
        />
      </SafeAreaView>
    </LinearGradient>
  );
} 