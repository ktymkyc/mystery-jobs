// カスタムExpo設定

module.exports = {
  name: "Button Demo",
  slug: "button-demo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "../../assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "../../assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FC4CFF"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "../../assets/adaptive-icon.png",
      backgroundColor: "#FC4CFF"
    }
  },
  web: {
    favicon: "../../assets/favicon.png"
  },
  // これが重要: カスタムエントリーポイントを指定
  entryPoint: "./examples/buttons/ButtonDemoEntry.js"
}; 