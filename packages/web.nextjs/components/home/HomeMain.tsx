import Product from '../designsystem/product';
import Content from '../designsystem/content';
import Carousel from './Carousel';

function HomeMain() {
  return (
    <>
      {/* Swiper Container */}
      <div>
        <Carousel />
      </div>

      <Product.Section title="이 상품 어때요?" />

      <Content.Banner src="https://product-image.kurly.com/banner/random-band/pc/img/7c298e33-7ece-4a2c-b654-32e9658522bd.jpg" />

      <Product.SpecialDeal />

      <Product.Section title="놓치면 후회할 가격" href="https://www.kurly.com" />

      <Product.Section
        title="6년차 워킹맘이 자주 구매하는"
        subTitle="컬리 MD가 직접 구매하는 상품들을 추천해요"
        href="https://www.kurly.com"
      />
    </>
  );
}

export default HomeMain;
