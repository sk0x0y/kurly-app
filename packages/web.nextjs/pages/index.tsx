import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HomeMain from '../components/home/HomeMain';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
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

    <main>
      <HomeMain />
    </main>

    <Footer />
  </>
);

export default Home;
