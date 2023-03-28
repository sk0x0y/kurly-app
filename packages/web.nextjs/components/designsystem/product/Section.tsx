import { css } from '@emotion/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import Typography from '../typography';
import Button from '../button';
import Product from './index';
import ArrowRight from '../icon/ArrowRight';
import { ICollectionOptions } from '../../../infrastructure/interface/collectionOptions.interface';
import { RootState } from '../../../infrastructure/redux';

interface IProps {
  title: string;
  subTitle?: string;
  href?: string;
  options?: ICollectionOptions;
}
function Section(props: IProps) {
  const { title, subTitle, href, options } = props;
  const products = useSelector((state: RootState) => state.productAdaptor.entity);

  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          padding: 40px 0;
        `}
      >
        {/* 상품 컬렉션 제목, 부제목 */}
        <div
          css={[
            css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 27px;
            `,
          ]}
        >
          {/* 상품 컬렉션 제목 */}
          {href ? (
            <Button.Anchor href={href}>
              <Typography.Title
                level="h2"
                options={{
                  additionalStyle: [
                    css`
                      position: relative;
                      padding: 8px 0;
                      font-weight: 500;
                      font-size: 28px;
                      color: rgb(51, 51, 51);
                      line-height: 1.15;
                      letter-spacing: -0.26px;
                    `,
                  ],
                }}
              >
                {title}

                {/* 제목 링크 있을 때 화살표 아이콘 */}
                <span
                  css={css`
                    position: absolute;
                    top: 7px;
                    width: 32px;
                    height: 32px;
                  `}
                >
                  <ArrowRight />
                </span>
              </Typography.Title>
            </Button.Anchor>
          ) : (
            <Typography.Title
              level="h2"
              options={{
                additionalStyle: [
                  css`
                    position: relative;
                    padding: 8px 0;
                    font-weight: 500;
                    font-size: 28px;
                    color: rgb(51, 51, 51);
                    line-height: 1.15;
                    letter-spacing: -0.26px;
                  `,
                ],
              }}
            >
              {title}
            </Typography.Title>
          )}

          {/* 상품 컬렉션 부제목 */}
          <Typography.Text
            type="p"
            options={{
              additionalStyle: [
                css`
                  font-size: 16px;
                  font-weight: normal;
                  line-height: 1.45;
                  letter-spacing: -0.2px;
                  text-align: center;
                  color: rgb(153, 153, 153);
                  margin-top: 2px;
                `,
              ],
            }}
          >
            {subTitle}
          </Typography.Text>
        </div>

        {/* 상품 컬렉션 아이템 */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={18}
          navigation
          modules={[Navigation]}
          onSlideChange={() => window.console.log('slide change')}
          onSwiper={(swiper: SwiperClass) => window.console.log(swiper)}
        >
          {products.map(product => (
            <SwiperSlide key={product.id} style={{ width: 249 }}>
              <Product.Collection product={product} options={options} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section;
