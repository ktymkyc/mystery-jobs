require('dotenv').config();
const fetch = require('node-fetch');

// 環境変数からトークンを取得（環境変数がない場合は直接指定）
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || 'figd_Qm2NDoDheKm3dB5Kkz3cL0rZEe_IUZ2PVayxtBkt';
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'jSoFo7uGRr7nYZOWgY11Na';

console.log('🔑 使用するトークン: ', FIGMA_ACCESS_TOKEN.substring(0, 5) + '...');

/**
 * Figma APIキーをテストする関数
 */
async function testFigmaAPI() {
  console.log('🔍 Figma API接続テストを開始します...');
  console.log(`🔑 使用するファイルキー: ${FIGMA_FILE_KEY}`);
  
  try {
    // ファイル情報の取得テスト
    console.log('\n📄 ファイル情報の取得テスト:');
    const fileResponse = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN
        }
      }
    );
    
    if (!fileResponse.ok) {
      const errorData = await fileResponse.json();
      throw new Error(`ファイル情報の取得に失敗: ${fileResponse.status} - ${JSON.stringify(errorData)}`);
    }
    
    const fileData = await fileResponse.json();
    console.log('✅ ファイル情報の取得に成功しました');
    console.log(`   ファイル名: ${fileData.name}`);
    console.log(`   最終更新日: ${new Date(fileData.lastModified).toLocaleString()}`);
    console.log(`   バージョン: ${fileData.version}`);
    
    // スタイル情報の取得テスト
    console.log('\n🎨 スタイル情報の取得テスト:');
    const stylesResponse = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN
        }
      }
    );
    
    if (!stylesResponse.ok) {
      const errorData = await stylesResponse.json();
      throw new Error(`スタイル情報の取得に失敗: ${stylesResponse.status} - ${JSON.stringify(errorData)}`);
    }
    
    const stylesData = await stylesResponse.json();
    const stylesCount = stylesData.meta?.styles?.length || 0;
    console.log(`✅ スタイル情報の取得に成功しました: ${stylesCount}個のスタイルが見つかりました`);
    
    if (stylesCount > 0) {
      console.log('   スタイルのサンプル:');
      stylesData.meta.styles.slice(0, 3).forEach(style => {
        console.log(`   - ${style.name} (${style.style_type})`);
      });
    }
    
    console.log('\n✨ APIテストが正常に完了しました！');
    console.log('   Figma APIへの接続とデータ取得に成功しました。');
    return true;
  } catch (error) {
    console.error(`\n❌ エラー: ${error.message}`);
    
    if (error.message.includes('403')) {
      console.error('   APIキーが無効または期限切れの可能性があります。');
      console.error('   Figmaで新しいアクセストークンを生成してください。');
    } else if (error.message.includes('404')) {
      console.error('   指定されたファイルIDが見つからないか、アクセス権がありません。');
      console.error('   FigmaファイルIDとアクセス権を確認してください。');
    } else if (error.message.includes('429')) {
      console.error('   APIレート制限を超えました。しばらく待ってから再試行してください。');
    }
    
    console.error('\n🔍 トラブルシューティング:');
    console.error('   1. APIキーが正しいか確認');
    console.error('   2. FigmaファイルIDが正しいか確認');
    console.error('   3. あなたのFigmaアカウントがこのファイルにアクセスできるか確認');
    console.error('   4. Figmaで新しいアクセストークンを生成して試してみる');
    
    return false;
  }
}

// スクリプトの実行
testFigmaAPI(); 