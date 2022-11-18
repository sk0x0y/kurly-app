import 'normalize.css';
import '../styles/globals.css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/pagination';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
