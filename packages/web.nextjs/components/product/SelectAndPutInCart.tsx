import { css } from '@emotion/react';
import { IDealProductData } from '../../infrastructure/interface/product-detail.interface';
import Select from '../designsystem/select';
import InformationNoticeItem from './InformationNoticeItem';
import Amount from './Amount';
import ShoppingButton from './ShoppingButton';

interface IProps {
  dealProduct?: IDealProductData[];
}
function SelectAndPutInCart(props: IProps) {
  const { dealProduct } = props;

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
          <Select.Group dealProduct={dealProduct} />
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
