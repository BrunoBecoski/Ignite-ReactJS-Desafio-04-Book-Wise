import { globalStyles } from '@/styles/stitches.config'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Head from 'next/head'

const nunito = Nunito({
  subsets: ['latin'],
})

// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function () {
  return Number(this)
}

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <main className={nunito.className}>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
