import React from 'react';
import Head from 'next/head';
import Header from './common/Header';
import Footer from './common/Footer';

interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  return (
    <>
      <Head>
        <title>마켓컬리 :: 내일의 장보기, 마켓컬리</title>
        <meta
          name="description"
          content="Love Food, Love Life. 마켓컬리! 당일 수확 채소, 과일, 맛집 음식까지 내일 아침 문 앞에서 만나요!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
