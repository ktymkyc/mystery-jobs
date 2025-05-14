require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// 環境変数からトークンを取得（環境変数がない場合は直接指定）
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || 'figd_Qm2NDoDheKm3dB5Kkz3cL0rZEe_IUZ2PVayxtBkt';
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'jSoFo7uGRr7nYZOWgY11Na';

// 出力先ディレクトリのパス
const OUTPUT_DIR = path.join(__dirname, '../src/tokens');

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`📁 ディレクトリを作成しました: ${OUTPUT_DIR}`);
}

/**
 * Figmaファイルの基本情報を取得
 */
async function getFigmaFile() {
  console.log("📡 Figmaからファイル情報を取得中...");
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          "X-Figma-Token": FIGMA_ACCESS_TOKEN
        }
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Figma API エラー: ${response.status} - ${JSON.stringify(errorData)}`);
    }
    
    const data = await response.json();
    console.log(`✅ ファイル情報を取得しました: "${data.name || 'unnamed'}"`);
    
    // 完全なファイルデータを保存（デバッグ用）
    fs.writeFileSync(
      path.join(OUTPUT_DIR, "figma-data.json"), 
      JSON.stringify(data, null, 2)
    );
    
    return data;
  } catch (error) {
    console.error("❌ ファイル取得エラー:", error.message);
    return null;
  }
}

/**
 * Figmaからスタイル情報を取得
 */
async function getFigmaStyles() {
  console.log("📡 Figmaからスタイル情報を取得中...");
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`,
      {
        headers: {
          "X-Figma-Token": FIGMA_ACCESS_TOKEN
        }
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Figma API エラー (styles): ${response.status} - ${JSON.stringify(errorData)}`);
    }
    
    const data = await response.json();
    console.log(`✅ スタイル情報を取得しました: ${data.meta?.styles?.length || 0}個のスタイル`);
    return data;
  } catch (error) {
    console.error("❌ スタイル取得エラー:", error.message);
    return { meta: { styles: [] } };
  }
}

/**
 * カラー情報を抽出する関数
 */
function extractColors(figmaData) {
  const colors = {};
  
  // カラー情報を抽出する再帰関数
  function traverseNodes(node) {
    // カラー変数の抽出（命名規則に基づく）
    if (node.name && (node.name.startsWith('color/') || node.name.includes('Color'))) {
      const colorName = node.name.replace('color/', '').replace('Color', '').toLowerCase();
      
      // フィルから色情報を取得
      if (node.fills && node.fills.length > 0 && node.fills[0].type === 'SOLID' && node.fills[0].color) {
        const { r, g, b, a = 1 } = node.fills[0].color;
        const hex = rgbToHex(r, g, b);
        colors[colorName] = a < 1 ? `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})` : hex;
      }
    }
    
    // 子ノードを再帰的に処理
    if (node.children) {
      node.children.forEach(child => traverseNodes(child));
    }
  }
  
  // ドキュメントルートから処理開始
  if (figmaData && figmaData.document) {
    traverseNodes(figmaData.document);
  }
  
  // データがない場合はデフォルト値を設定
  if (Object.keys(colors).length === 0) {
    colors.primary = '#FC4CFF';
    colors.secondary = '#E5FF63';
    colors.background = '#FFFFFF';
    colors.disabled = '#E6C1E6';
    colors.disabledText = '#F7ECF7';
  }
  
  return colors;
}

/**
 * スペーシングとボーダー半径の情報を抽出
 */
function extractSpacingAndRadius(figmaData) {
  const spacing = {};
  const borderRadius = {};
  
  // 値を抽出する再帰関数
  function traverseNodes(node) {
    // スペーシング値の抽出
    if (node.name && (node.name.startsWith('spacing/') || node.name.includes('Spacing'))) {
      const spacingName = node.name.replace('spacing/', '').replace('Spacing', '').toLowerCase();
      if (node.absoluteBoundingBox && node.absoluteBoundingBox.width) {
        const value = Math.round(node.absoluteBoundingBox.width);
        spacing[spacingName] = `${value}px`;
      }
    }
    
    // ボーダー半径の抽出
    if (node.name && (node.name.startsWith('radius/') || node.name.includes('Radius'))) {
      const radiusName = node.name.replace('radius/', '').replace('Radius', '').toLowerCase();
      if (node.cornerRadius !== undefined) {
        borderRadius[radiusName] = `${Math.round(node.cornerRadius)}px`;
      }
    }
    
    // 子ノードを再帰的に処理
    if (node.children) {
      node.children.forEach(child => traverseNodes(child));
    }
  }
  
  // ドキュメントルートから処理開始
  if (figmaData && figmaData.document) {
    traverseNodes(figmaData.document);
  }
  
  // データがない場合はデフォルト値を設定
  if (Object.keys(spacing).length === 0) {
    spacing.small = '8px';
    spacing.medium = '16px';
    spacing.large = '24px';
  }
  
  if (Object.keys(borderRadius).length === 0) {
    borderRadius.small = '4px';
    borderRadius.medium = '8px';
    borderRadius.large = '16px';
  }
  
  return { spacing, borderRadius };
}

/**
 * RGB値をHEXカラーコードに変換
 */
function rgbToHex(r, g, b) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * トークンからJavaScriptファイルを生成
 */
function generateReactNativeTokens(tokens) {
  let tsContent = `// Figmaから自動生成されたデザイントークン
// 生成日時: ${new Date().toISOString()}
// ファイルID: ${FIGMA_FILE_KEY}

export const tokens = {
  colors: {
`;

  // 色情報
  Object.keys(tokens.color).forEach(colorName => {
    const colorValue = tokens.color[colorName].$value;
    tsContent += `    ${colorName}: '${colorValue}',\n`;
  });

  tsContent += `  },

  spacing: {
`;

  // スペーシング
  Object.keys(tokens.spacing).forEach(spacingName => {
    // pxを数値に変換
    const spacingValue = parseInt(tokens.spacing[spacingName].$value);
    tsContent += `    ${spacingName}: ${spacingValue},\n`;
  });

  tsContent += `  },

  radius: {
`;

  // ボーダー半径
  Object.keys(tokens.borderRadius).forEach(radiusName => {
    // pxを数値に変換
    const radiusValue = parseInt(tokens.borderRadius[radiusName].$value);
    tsContent += `    ${radiusName}: ${radiusValue},\n`;
  });

  tsContent += `  },
};

export default tokens;
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, "tokens.ts"), tsContent);
  console.log("✅ React Native用トークンを生成しました: tokens.ts");
}

/**
 * トークンからCSSを生成
 */
function generateCSSTokens(tokens) {
  let css = `:root {\n`;
  
  // 色変数
  Object.keys(tokens.color).forEach(colorName => {
    const color = tokens.color[colorName].$value;
    css += `  --color-${colorName}: ${color};\n`;
  });
  
  // デフォルトの色変数を追加（Figmaにない場合）
  const defaultColors = {
    primary: '#FC4CFF',
    secondary: '#E5FF63',
    background: '#FFFFFF',
    disabled: '#E6C1E6',
    disabledText: '#F7ECF7'
  };
  
  // 存在しない色を追加
  Object.keys(defaultColors).forEach(colorName => {
    if (!tokens.color[colorName]) {
      css += `  --color-${colorName}: ${defaultColors[colorName]};\n`;
    }
  });
  
  // 間隔
  Object.keys(tokens.spacing).forEach(spacingName => {
    const spacing = tokens.spacing[spacingName].$value;
    css += `  --spacing-${spacingName}: ${spacing};\n`;
  });
  
  // 角丸
  Object.keys(tokens.borderRadius).forEach(radiusName => {
    const radius = tokens.borderRadius[radiusName].$value;
    css += `  --radius-${radiusName}: ${radius};\n`;
  });
  
  css += `}\n`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, "tokens.css"), css);
  console.log("✅ CSS用トークンを生成しました: tokens.css");
}

/**
 * メイン処理
 */
async function main() {
  console.log("=== Figmaデザイントークン抽出 ===");
  
  // 1. Figmaファイル情報の取得
  const figmaData = await getFigmaFile();
  
  // 2. スタイル情報の取得
  const stylesData = await getFigmaStyles();
  
  // 3. トークンの生成（データがあればFigmaから、なければデフォルト値を使用）
  const colors = extractColors(figmaData);
  const { spacing, borderRadius } = extractSpacingAndRadius(figmaData);
  
  // 4. トークンの組み立て
  const tokens = {
    color: {},
    spacing: {},
    borderRadius: {}
  };
  
  // 色情報をトークンに変換
  Object.keys(colors).forEach(colorName => {
    tokens.color[colorName] = {
      $value: colors[colorName],
      $type: "color"
    };
  });
  
  // スペーシング情報をトークンに変換
  Object.keys(spacing).forEach(spacingName => {
    tokens.spacing[spacingName] = {
      $value: spacing[spacingName],
      $type: "spacing"
    };
  });
  
  // ボーダー半径情報をトークンに変換
  Object.keys(borderRadius).forEach(radiusName => {
    tokens.borderRadius[radiusName] = {
      $value: borderRadius[radiusName],
      $type: "borderRadius"
    };
  });
  
  // 5. JSONとして保存
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "tokens.json"),
    JSON.stringify(tokens, null, 2)
  );
  console.log("✅ JSONトークンを保存しました: tokens.json");
  
  // 6. React Native用のTSファイルとして保存
  generateReactNativeTokens(tokens);
  
  // 7. Web用のCSSファイルも生成
  generateCSSTokens(tokens);
  
  console.log("✅ 完了: デザイントークンを生成・保存しました");
  console.log(`   保存先: ${OUTPUT_DIR}`);
}

// スクリプトの実行
main().catch(error => {
  console.error("❌ 致命的なエラー:", error);
  process.exit(1);
}); 