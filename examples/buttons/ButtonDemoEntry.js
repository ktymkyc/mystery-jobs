import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import ButtonDemoApp from './ButtonDemoApp';
import ButtonDemoWeb from './ButtonDemoWeb';

// Web環境とNative環境で適切なコンポーネントを選択
const App = Platform.OS === 'web' ? ButtonDemoWeb : ButtonDemoApp;

// Expoアプリのルートコンポーネントを登録
registerRootComponent(App); 