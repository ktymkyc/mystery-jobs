module.exports = {
    // FigmaファイルのURL
    figmaUrl: 'https://www.figma.com/design/jSoFo7uGRr7nYZOWgY11Na/%E3%81%A0%E3%82%8C%E3%82%82%E7%9F%A5%E3%82%89%E3%81%AA%E3%81%84%E9%81%A9%E8%81%B7%E8%A8%BA%E6%96%AD?node-id=0-1&t=i3KOpPZVeieJT4BG-1',
    // 出力ディレクトリ
    outputDir: './src/tokens',
  
    // アクセストークン（追加する部分）
    figmaApiKey: 'figd_zy309zbgR1D33Xg1xp_rd0LclyhRaRvYR7a8P91t',

    // トークンの設定
    tokens: {
        colors: true,
        typography: true,
        spacing: true,
        effects: true,
    },
    
    // 出力形式
    format: 'json',
    
    // カスタムトランスフォーマー
    transformers: {
        // 必要に応じてカスタムトランスフォーマーを追加
    }
};