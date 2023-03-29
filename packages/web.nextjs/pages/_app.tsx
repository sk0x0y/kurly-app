import 'normalize.css';
import '../styles/globals.css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/pagination';
import type { AppProps } from 'next/app';
import wrapper from '../infrastructure/redux/store';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
