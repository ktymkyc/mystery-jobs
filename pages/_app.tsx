// pages/_app.tsx
import { M_PLUS_Rounded_1c } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const mplusRounded = M_PLUS_Rounded_1c({
  weight: ['400', '700', '900'], // 必要なウェイトだけ
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mplusRounded.className}>
      <Component {...pageProps} />
    </main>
  )
}