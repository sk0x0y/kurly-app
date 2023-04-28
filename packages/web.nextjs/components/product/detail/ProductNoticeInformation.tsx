import { Fragment } from 'react';
import { css } from '@emotion/react';
import { IProductDetail } from '../../../infrastructure/interface/product-detail.interface';

interface IProps {
  product: IProductDetail;
}
function ProductNoticeInformation(props: IProps) {
  const { product } = props;

  return (
    <div
      css={css`
        padding: 72px 0;
        border-top: 1px solid #eee;
      `}
    >
      <h3
        css={css`
          margin: 0;
          font-weight: 500;
          font-size: 28px;
          line-height: 41px;
          text-align: center;
          letter-spacing: -0.5px;
          color: #666;
        `}
      >
        상품고시정보
      </h3>

      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding-top: 36px;
          font-size: 13px;
          color: #333;
          line-height: 18px;
          letter-spacing: -0.5px;

          > li {
            padding-top: 18px;
          }
        `}
      >
        {product.productNotice.map(notice =>
          notice.notices.map(item => (
            <Fragment key={notice.dealProductNo + item.title.length}>
              <li
                css={css`
                  width: 180px;
                  padding: 0 18px 18px;
                  background-color: #f7f7f7;
                  word-break: break-all;
                  white-space: pre-line;
                `}
              >
                {item.title}
              </li>
              <li
                css={css`
                  display: flex;
                  width: 325px;
                  padding: 0 18px 18px;
                  color: #666;
                  white-space: pre-line;
                `}
              >
                {item.description}
              </li>
            </Fragment>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductNoticeInformation;
