import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { DehydratedState } from '@tanstack/react-query';
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
import './style.scss';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hydrate state={pageProps?.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Layout>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
