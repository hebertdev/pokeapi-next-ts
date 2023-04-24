import '../styles/globals.css'
import '../styles/sections.css'
import { NextUIProvider } from '@nextui-org/react'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <Component {...pageProps} />
  )
}
