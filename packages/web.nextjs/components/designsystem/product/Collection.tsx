import Image from 'next/image';
import { css } from '@emotion/react';
import Typography from '../typography';
import CartIcon from '../icon/CartIcon';
import { DeliverType, IProduct } from '../../../infrastructure/interface/product.interface';
import { ICollectionOptions } from '../../../infrastructure/interface/collectionOptions.interface';

interface IProps {
  // product: Omit<IProduct, 'id'>;
  product: IProduct;
  options?: ICollectionOptions;
}
function Collection(props: IProps) {
  const { product, options } = props;

  return (
    <div>
      {/* 상품 이미지 */}
      <div
        css={css`
          position: relative;
        `}
      >
        {options && options.imageSize ? (
          <Image src={product.image.src} width={options.imageSize.width} height={options.imageSize.height} />
        ) : (
          <div
            css={css`
              font-weight: 600;
              font-size: 18px;
              color: #0070f3;
            `}
          >
            이미지 사이즈를 설정해주세요
          </div>
        )}
        <div
          css={css`
            position: absolute;
            right: 16px;
            bottom: 16px;
          `}
        >
          <CartIcon />
        </div>
      </div>

      <div
        css={css`
          padding: 14px 10px 0 0;
        `}
      >
        {/* 배송 타입 */}
        {product.deliver && (
          <p
            css={css`
              padding-bottom: 2px;
              color: rgb(153, 153, 153);
              line-height: 19px;
              letter-spacing: -0.5px;
            `}
          >
            {product.deliver.type === DeliverType.FAST ? '샛별배송' : '택배'}
          </p>
        )}

        {/* 상품명 */}
        <Typography.Title
          level="h3"
          options={{
            additionalStyle: [
              css`
                margin-bottom: 8px;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.45;
              `,
            ],
          }}
        >
          {product.name}
        </Typography.Title>

        {/* 상품 설명 */}
        {product.description && (
          <p
            css={css`
              padding-top: 4px;
              padding-bottom: 8px;
              font-size: 12px;
              color: rgb(153, 153, 153);
              line-height: 18px;
            `}
          >
            {product.description}
          </p>
        )}

        {/* 상품 가격 및 할인율 */}
        <div>
          <div>
            {product.price.discount && (
              <Typography.Text
                type="span"
                options={{
                  additionalStyle: [
                    css`
                      margin-right: 7px;
                      font-weight: 800;
                      font-size: 16px;
                      color: rgb(250, 98, 47);
                      line-height: 1.5;
                      white-space: nowrap;
                    `,
                  ],
                }}
              >
                {product.price.discount.rate}%
              </Typography.Text>
            )}

            <Typography.Text
              type="span"
              options={{
                additionalStyle: [
                  css`
                    font-weight: 800;
                    font-size: 16px;
                    line-height: 1.5;
                    white-space: nowrap;
                  `,
                ],
              }}
            >
              {product.price.discount ? product.price.discount.price : product.price.original}
              <span> 원</span>
            </Typography.Text>
          </div>

          {product.price.discount && (
            <Typography.Text
              type="span"
              options={{
                additionalStyle: [
                  css`
                    margin-top: 2px;
                    font-weight: 400;
                    font-size: 14px;
                    color: rgb(181, 181, 181);
                    line-height: normal;
                    text-decoration: line-through;
                  `,
                ],
              }}
            >
              {product.price.original}
              <span> 원</span>
            </Typography.Text>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
