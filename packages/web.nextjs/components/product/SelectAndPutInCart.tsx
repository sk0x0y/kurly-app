import { css } from '@emotion/react';
import Select from '../designsystem/select';
import InformationNoticeItem from './InformationNoticeItem';
import Amount from './Amount';
import ShoppingButton from './ShoppingButton';

function SelectAndPutInCart() {
  return (
    <div>
      <div
        css={css`
          border-bottom: 1px solid rgb(244, 244, 244);
        `}
      >
        <InformationNoticeItem
          label="상품 선택"
          styles={{
            container: css`
              overflow: initial;
            `,
            title: css`
              line-height: 40px;
            `,
          }}
        >
          <Select.Group />
        </InformationNoticeItem>
      </div>

      {/* 적립 혜택 및 총 상품 금액 안내 */}
      <Amount />

      {/* 찜하기, 알림받기, 장바구니 담기 버튼 */}
      <ShoppingButton />
    </div>
  );
}

export default SelectAndPutInCart;
