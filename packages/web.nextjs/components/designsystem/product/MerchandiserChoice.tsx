import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './index';
import Typography from '../typography';
import Button from '../button';
import { ICollectionOptions } from '../../../infrastructure/interface/collectionOptions.interface';
import { RootState } from '../../../infrastructure/redux';
import { IKurlyProductData } from '../../../infrastructure/interface/product.interface';

interface IProps {
  products: AxiosResponse<{ data: IKurlyProductData[] }>;
  options?: ICollectionOptions;
}
function MerchandiserChoice(props: IProps) {
  const { products, options } = props;
  const categories = useSelector((state: RootState) => state.categoryAdaptor.entity);

  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
        padding: 40px 0;
      `}
    >
      {/* 제목 */}
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 27px;
        `}
      >
        <Typography.Title
          level="h2"
          options={{
            additionalStyle: [
              css`
                font-weight: 500;
                font-size: 28px;
                color: rgb(51, 51, 51);
                line-height: 1.15;
                letter-spacing: -0.26px;
              `,
            ],
          }}
        >
          MD의 추천
        </Typography.Title>
      </div>

      {/* 카테고리 리스트 */}
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          place-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        {categories.map(category => (
          <li
            key={category.categoryId}
            css={css`
              display: block;
              padding: 10px 20px;
              border-radius: 22px;
              margin: 0 5px 20px;
              font-size: 14px;
              height: 40px;
              line-height: 16px;
              background-color: rgb(247, 247, 247);
              color: rgb(51, 51, 51);
              cursor: pointer;
            `}
          >
            {category.name}
          </li>
        ))}
      </ul>

      <div
        css={css`
          margin: 20px 0 30px;
        `}
      >
        {/* 상품 컬렉션 아이템 */}
        <Swiper slidesPerView="auto" spaceBetween={18} navigation modules={[Navigation]}>
          {products &&
            products.data.data.map(product => (
              <SwiperSlide key={product.no} style={{ width: 249 }}>
                <Product.Collection product={product} options={options} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* 선택한 카테고리 전체보기 버튼 */}
      <Button.Anchor
        href="https://www.kurly.com/categories/910"
        options={{
          additionalStyle: [
            css`
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              width: 516px;
              height: 56px;
              border-radius: 3px;
              border: 1px solid rgb(227, 227, 227);
              font-size: 16px;
              letter-spacing: -0.27px;
              line-height: 15px;
            `,
          ],
        }}
      >
        생수·음료·우유·커피 전체보기
      </Button.Anchor>
    </section>
  );
}

export default MerchandiserChoice;
