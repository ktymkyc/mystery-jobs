import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from '../components/ui/ButtonNative';

export default function ButtonTest() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ボタンコンポーネントテスト</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>プライマリボタン</Text>
          <View style={styles.row}>
            <Button size="sm">小</Button>
            <Button>標準</Button>
            <Button size="lg">大</Button>
          </View>
          <View style={styles.row}>
            <Button disabled>無効</Button>
            <Button isLoading>ロード中</Button>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>セカンダリボタン</Text>
          <View style={styles.row}>
            <Button variant="secondary" size="sm">小</Button>
            <Button variant="secondary">標準</Button>
            <Button variant="secondary" size="lg">大</Button>
          </View>
          <View style={styles.row}>
            <Button variant="secondary" disabled>無効</Button>
            <Button variant="secondary" isLoading>ロード中</Button>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>全幅ボタン</Text>
          <Button fullWidth>プライマリ全幅</Button>
          <View style={styles.spacer} />
          <Button variant="secondary" fullWidth>セカンダリ全幅</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  spacer: {
    height: 12,
  },
}); 