import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../infrastructure/redux';
import Content from '../components/designsystem/content';
import SelectedProduct from '../components/cart/SelectedProduct';
import CheckAddress from '../components/cart/CheckAddress';
import CheckPrice from '../components/cart/CheckPrice';
import Proceed from '../components/cart/Proceed';

function Cart() {
  const cartEntity = useSelector((state: RootState) => state.cartAdaptor.entity);

  return (
    <Content.Section>
      <h2
        css={css`
          margin: 0 0 48px 0;
          font-weight: 500;
          font-size: 28px;
          line-height: 35px;
          text-align: center;
        `}
      >
        장바구니
      </h2>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          letter-spacing: -0.5px;
        `}
      >
        {/* 페이지 좌측 선택된 상품 리스트 */}
        <SelectedProduct cartEntity={cartEntity} />

        <div
          css={css`
            width: 284px;
            padding-top: 60px;
          `}
        >
          <CheckAddress />

          <CheckPrice cartEntity={cartEntity} />

          <Proceed cartEntity={cartEntity} />
        </div>
      </div>
    </Content.Section>
  );
}

export default Cart;
