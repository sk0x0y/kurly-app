import { css } from '@emotion/react';
import { ICart } from '../../infrastructure/interface/cart.interface';
import Button from '../designsystem/button';

interface IProps {
  cartEntity: ICart;
}
function Proceed(props: IProps) {
  const { cartEntity } = props;

  return (
    <div
      css={css`
        margin-top: 20px;
      `}
    >
      <Button.Common
        styles={css`
          height: 56px;
          border: 0;
          background-color: ${cartEntity.selectedProduct.length ? 'rgb(95, 0, 128)' : 'rgb(221, 221, 221)'};
          color: #fff;
        `}
      >
        {cartEntity.selectedProduct.length ? '주문하기' : '상품을 담아주세요'}
      </Button.Common>

      <ul
        css={css`
          margin-top: 16px;
          font-size: 12px;
          line-height: 16px;
          color: #666;

          > li {
            padding: 4px 0 0 0;

            &:before {
              content: '';
              position: absolute;
              width: 1px;
              height: 1px;
              margin: 6px 0 0 -6px;
              border-radius: 50%;
              background: #999;
            }
          }
        `}
      >
        <li>쿠폰/적립금은 주문서에서 사용 가능합니다</li>
        <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
        <li>[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
        <li>쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.</li>
        <li>상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서 확인 가능합니다)</li>
      </ul>
    </div>
  );
}

export default Proceed;
