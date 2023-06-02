import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';
import { StoreType } from '../../infrastructure/interface/product-detail.interface';
import SelectedProductList from './SelectedProductList';
import { CartEntity } from '../../application/entities/cart.entity';

interface IProps {
  cartEntity: CartEntity;
}
function SelectedProduct(props: IProps) {
  const { cartEntity } = props;

  return (
    <div
      css={css`
        &:not(:first-of-type) {
          border-top: 1px solid #333;
        }
      `}
    >
      {/* 냉장 상품 */}
      <SelectedProductList cartEntity={cartEntity} type={StoreType.COLD} />

      {/* 냉동 상품 */}
      <SelectedProductList cartEntity={cartEntity} type={StoreType.FROZEN} />

      {/* 상온 상품 */}
      <SelectedProductList cartEntity={cartEntity} type={StoreType.AMBIENT_TEMPERATURE} />
    </div>
  );
}

export default SelectedProduct;
