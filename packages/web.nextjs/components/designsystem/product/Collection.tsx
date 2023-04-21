import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';
import Typography from '../typography';
import CartIcon from '../icon/CartIcon';
import { DeliverType, IKurlyProductData, IProduct } from '../../../infrastructure/interface/product.interface';
import { ICollectionOptions } from '../../../infrastructure/interface/collectionOptions.interface';
import CommentIcon from '../icon/CommentIcon';

interface IProps {
  // product: Omit<IProduct, 'id'>;
  // product: IProduct;
  product: IKurlyProductData;
  options?: ICollectionOptions;
}
function Collection(props: IProps) {
  const { product, options } = props;

  return (
    <Link href={`/product/${product.no}`} passHref>
      <a
        css={css`
          appearance: none;
          cursor: pointer;
          text-decoration: none;
          color: #333;
        `}
      >
        {/* 상품 이미지 */}
        <div
          css={css`
            position: relative;
            width: 249px;
            height: 320px;
          `}
        >
          <Image src={product.list_image_url} alt={`상품 ${product.no}번 이미지`} layout="fill" />

          {/* {options && options.imageSize ? ( */}
          {/*  <Image src={product.list_image_url} width={options.imageSize.width} height={options.imageSize.height} /> */}
          {/* ) : ( */}
          {/*  <div */}
          {/*    css={css` */}
          {/*      font-weight: 600; */}
          {/*      font-size: 18px; */}
          {/*      color: #0070f3; */}
          {/*    `} */}
          {/*  > */}
          {/*    이미지 사이즈를 설정해주세요 */}
          {/*  </div> */}
          {/* )} */}

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
          {product.delivery_type_names && (
            <p
              css={css`
                padding-bottom: 2px;
                color: rgb(153, 153, 153);
                line-height: 19px;
                letter-spacing: -0.5px;
              `}
            >
              {/* {product.deliver.type === DeliverType.FAST ? '샛별배송' : '택배'} */}
              {product.delivery_type_names[0]}
            </p>
          )}

          {/* 상품명 */}
          <Typography.Title
            level="h3"
            options={{
              additionalStyle: [
                css`
                  margin-bottom: ${!product.short_description && '8px'};
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
          {product.short_description && (
            <p
              css={css`
                padding-top: 4px;
                padding-bottom: 8px;
                font-size: 12px;
                color: rgb(153, 153, 153);
                line-height: 18px;
              `}
            >
              {product.short_description}
            </p>
          )}

          {/* 상품 가격 및 할인율 */}
          <div>
            <div>
              {product.discounted_price && (
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
                  {product.discount_rate}%
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
                {product.discounted_price ? product.discounted_price : product.sales_price}
                <span> 원</span>
              </Typography.Text>
            </div>

            {product.discounted_price && (
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
                {product.sales_price}
                <span> 원</span>
              </Typography.Text>
            )}

            {/* 리뷰 */}
            {product.review_count && (
              <div
                css={css`
                  display: flex;
                  padding-top: 8px;
                  font-weight: 500;
                  font-size: 12px;
                  color: rgb(153, 153, 153);
                  line-height: 17px;
                `}
              >
                <span
                  css={css`
                    width: 15px;
                    height: 15px;
                  `}
                >
                  <CommentIcon />
                </span>
                <span>후기</span>
                <span
                  css={css`
                    padding-left: 3px;
                    font-weight: 400;
                  `}
                >
                  {product.review_count}
                </span>
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Collection;
