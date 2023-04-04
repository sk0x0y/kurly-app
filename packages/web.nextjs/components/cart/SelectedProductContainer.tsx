import { css } from '@emotion/react';
import { ICart } from '../../infrastructure/interface/cart.interface';
import SelectedAndRemoveTab from './SelectedAndRemoveTab';
import SelectedProduct from './SelectedProduct';

interface IProps {
  cartEntity: ICart;
}
function SelectedProductContainer(props: IProps) {
  const { cartEntity } = props;

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
        {!cartEntity.selectedProduct.length && (
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

        {cartEntity.selectedProduct.length && <SelectedProduct cartEntity={cartEntity} />}
      </div>

      <SelectedAndRemoveTab />
    </div>
  );
}

export default SelectedProductContainer;
