// data/error.ts

export type ErrorKey = number | 'unknown' | 'adError';

export const errorMessages: Record<ErrorKey, {
  emoji: string;
  title: string;
  message: string;
}> = {
  404: {
    emoji: '🙇',
    title: '見つかりません',
    message: 'ページにアクセスできませんでした。URLの間違い、削除された可能性があります。',
  },
  500: {
    emoji: '💥',
    title: '問題が発生中',
    message: 'アクセスが集中しているか、予期せぬ不具合が起きています。',
  },
  adError: {
    emoji: '❌',
    title: '読込失敗',
    message: '診断できますが、一部表示できない可能性があります。',
  },
  unknown: {
    emoji: '🛜',
    title: '通信エラー',
    message: 'ネットワークが不安定です。時間をおいて再度お試しください。',
  },
};