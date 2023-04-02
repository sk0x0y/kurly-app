import { css } from '@emotion/react';
import { ICart } from '../../infrastructure/interface/cart.interface';
import CheckPriceItem from './CheckPriceItem';

interface IProps {
  cartEntity: ICart;
}
function CheckPrice(props: IProps) {
  const { cartEntity } = props;

  return (
    <div
      css={css`
        padding: 19px 18px 18px 20px;
        border: 1px solid #f2f2f2;
        background-color: #fafafa;
      `}
    >
      <CheckPriceItem name="상품금액" value={cartEntity.productPrice} />

      <CheckPriceItem name="상품할인금액" value={cartEntity.salePrice} />

      <CheckPriceItem name="배송비" value={cartEntity.deliverFee} />

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 18px;
          border-top: 1px solid #f4f4f4;
        `}
      >
        <span
          css={css`
            font-size: 16px;
            line-height: 24px;
          `}
        >
          결제예정금액
        </span>

        <span
          css={css`
            font-size: 18px;
            line-height: 24px;
          `}
        >
          <strong
            css={css`
              font-weight: 700;
              font-size: 20px;
              line-height: 28px;
            `}
          >
            {cartEntity.productPrice - cartEntity.salePrice + cartEntity.deliverFee}
          </strong>

          <span
            css={css`
              padding-left: 4px;
              font-size: 16px;
            `}
          >
            원
          </span>
        </span>
      </div>
    </div>
  );
}

export default CheckPrice;
