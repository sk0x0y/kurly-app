import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { ICart, ICartDetail } from '../../infrastructure/interface/cart.interface';
import SelectedAndRemoveTab from './SelectedAndRemoveTab';
import SelectedProduct from './SelectedProduct';

interface IProps {
  cartEntity: ICart;
  cartDetail?: AxiosResponse<ICartDetail>;
}
function SelectedProductContainer(props: IProps) {
  const { cartEntity, cartDetail } = props;

  return (
    <div
      css={css`
        width: 742px;
      `}
    >
      <SelectedAndRemoveTab />

      <div
        css={css`
          border-top: 1px solid #333;
          border-bottom: 1px solid #f4f4f4;
        `}
      >
        {!cartDetail?.data.data.totalCount && (
          <p
            css={css`
              padding: 115px 0;
              font-size: 16px;
              color: #b5b5b5;
              line-height: 24px;
              text-align: center;
            `}
          >
            장바구니에 담긴 상품이 없습니다
          </p>
        )}

        {!!cartDetail?.data.data.dealProducts.length && (
          <SelectedProduct cartEntity={cartEntity} cartDetail={cartDetail} />
        )}
      </div>

      <SelectedAndRemoveTab />
    </div>
  );
}

export default SelectedProductContainer;
