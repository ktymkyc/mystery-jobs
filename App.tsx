import React from 'react';
import { View, StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const topPadding = Platform.OS === 'ios' ? 44 : RNStatusBar.currentHeight || 0;

  return (
    <View style={[styles.container, { paddingTop: topPadding }]}>
      <LinearGradient
        colors={['#E5FF63', '#F0FFD0', '#FFFFFB', '#E3DAFF', '#ABC4FF']}
        locations={[0, 0.15, 0.6, 0.8, 1]}
        style={StyleSheet.absoluteFill}
      />

      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <WebView
        source={{ uri: 'https://mystery-jobs.vercel.app' }}
        style={styles.webview}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});