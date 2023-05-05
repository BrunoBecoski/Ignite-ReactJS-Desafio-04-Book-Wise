import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Head from 'next/head'

const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
