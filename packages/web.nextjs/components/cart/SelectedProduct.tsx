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
  const { cartEntity, cartDetail } = props;

  const reducedCartDetail = useCallback(
    (type?: typeof StoreType[keyof typeof StoreType]) =>
      cartDetail?.data.data.dealProducts.reduce(
        (
          acc: {
            [StoreType.AMBIENT_TEMPERATURE]: ICartProductDetailData[];
            [StoreType.COLD]: ICartProductDetailData[];
            [StoreType.FROZEN]: ICartProductDetailData[];
          },
          cur
        ) => {
          // 상온 보관
          if (cur.storageType === StoreType.AMBIENT_TEMPERATURE) {
            acc = { ...acc, [StoreType.AMBIENT_TEMPERATURE]: [...acc.AMBIENT_TEMPERATURE, cur] };
          }

          // 냉장 보관
          if (cur.storageType === StoreType.COLD) {
            acc = { ...acc, [StoreType.COLD]: [...acc.COLD, cur] };
          }

          // 냉동 보관
          if (cur.storageType === StoreType.FROZEN) {
            acc = { ...acc, [StoreType.FROZEN]: [...acc.FROZEN, cur] };
          }

          return acc;
        },
        {
          [StoreType.AMBIENT_TEMPERATURE]: [],
          [StoreType.COLD]: [],
          [StoreType.FROZEN]: [],
        }
      ),
    []
  );

  console.log(reducedCartDetail);

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
