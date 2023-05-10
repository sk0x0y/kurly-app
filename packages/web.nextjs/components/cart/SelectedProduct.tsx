import Link from 'next/link';
import Image from 'next/image';
import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { useCallback } from 'react';
import { ICart, ICartDetail, ICartProductDetailData } from '../../infrastructure/interface/cart.interface';
import Button from '../designsystem/button';
import SelectedProductStoreType from './SelectedProductStoreType';
import CheckedIcon from '../designsystem/icon/CheckedIcon';
import { StoreType } from '../../infrastructure/interface/product-detail.interface';
import SelectedProductItem from './SelectedProductItem';

interface IProps {
  cartEntity: ICart;
  cartDetail?: AxiosResponse<ICartDetail>;
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
      {/* 상온 상품 */}
      {!!reducedCartDetail()?.AMBIENT_TEMPERATURE.length && (
        <>
          <SelectedProductStoreType type={StoreType.AMBIENT_TEMPERATURE} />
          <ul>
            {reducedCartDetail()?.AMBIENT_TEMPERATURE.map(data => (
              <SelectedProductItem data={data} />
            ))}
          </ul>
        </>
      )}

      {/* 냉장 상품 */}
      {!!reducedCartDetail()?.COLD.length && (
        <>
          <SelectedProductStoreType type={StoreType.COLD} />
          <ul>
            {reducedCartDetail()?.COLD.map(data => (
              <SelectedProductItem data={data} />
            ))}
          </ul>
        </>
      )}

      {/* 냉동 상품 */}
      {!!reducedCartDetail()?.FROZEN.length && (
        <>
          <SelectedProductStoreType type={StoreType.FROZEN} />
          <ul>
            {reducedCartDetail()?.FROZEN.map(data => (
              <SelectedProductItem data={data} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SelectedProduct;
