import { useState } from 'react';
import { css } from '@emotion/react';
import Typography from '../typography';
import Product from './index';
import { IProduct } from '../../../types/product/Product.interface';
import SpecialDealEntity from '../_entity/SpecialDeal.entity';
import { ICollectionOptions } from './Collection';

interface IProps {
  options?: ICollectionOptions;
}
function SpecialDeal(props: IProps) {
  const { options } = props;
  const [products] = useState<IProduct[]>(SpecialDealEntity);

  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 80px 0;
        `}
      >
        {/* 좌측 공간 */}
        <div>
          {/* 제목 및 부제목 h2, h3 */}
          <Typography.Title
            level="h2"
            options={{
              additionalStyle: [
                css`
                  margin-bottom: 10px;
                  font-weight: 500;
                  font-size: 28px;
                  color: rgb(51, 51, 51);
                  line-height: 1.1;
                  letter-spacing: -0.26px;
                `,
              ],
            }}
          >
            일일특가
          </Typography.Title>
          <Typography.Title
            level="h3"
            options={{
              additionalStyle: [
                css`
                  margin-bottom: 24px;
                  font-weight: 400;
                  font-size: 16px;
                  color: rgb(153, 153, 153);
                  line-height: 1.3;
                  letter-spacing: normal;
                `,
              ],
            }}
          >
            24시간 한정특가
          </Typography.Title>

          {/* 남은 시간 */}
          <div>남은 시간 표시 공간</div>

          {/* 멘트 */}
          <Typography.Text
            type="p"
            options={{
              additionalStyle: [
                css`
                  margin-top: 32px;
                  font-weight: 400;
                  font-size: 14px;
                  color: rgb(204, 204, 204);
                  line-height: 1.43;
                  letter-spacing: -0.4px;
                `,
              ],
            }}
          >
            망설이면 늦어요!
          </Typography.Text>
        </div>

        {/* 우측 공간 */}
        <div
          css={css`
            display: flex;
            gap: 18px;
          `}
        >
          {products.map(product => (
            <div key={product.id}>
              <Product.Collection product={product} options={options} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialDeal;
