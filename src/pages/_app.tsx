import '../styles/global.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='dark:bg-neutral-900 bg-gray-200'><Component {...pageProps} /></div>
}
