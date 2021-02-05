import { AppProps } from 'next/app';
import '../styles/global.css';

export default function Page({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};
