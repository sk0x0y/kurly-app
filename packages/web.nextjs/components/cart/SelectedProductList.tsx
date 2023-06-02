import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StoreType } from '../../infrastructure/interface/product-detail.interface';
import { ICartProductDetailData } from '../../infrastructure/interface/cart.interface';
import { actions } from '../../application/usecases/cart.usecase';
import SelectedProductStoreType from './SelectedProductStoreType';
import SelectedProductItem from './SelectedProductItem';
import { CartEntity } from '../../application/entities/cart.entity';

interface IProps {
  cartEntity: CartEntity;
  type: typeof StoreType[keyof typeof StoreType];
}
function SelectedProductList(props: IProps) {
  const { cartEntity, type } = props;

  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();

  const reducedCartDetail = useCallback(
    () =>
      cartEntity.detail.data.dealProducts.reduce(
        (
          acc: {
            [StoreType.AMBIENT_TEMPERATURE]: ICartProductDetailData[];
            [StoreType.COLD]: ICartProductDetailData[];
            [StoreType.FROZEN]: ICartProductDetailData[];
          },
          cur
        ) => {
          if (cur.storageType === StoreType[type]) {
            acc = { ...acc, [type]: [...acc[type], cur] };
          }

          return acc;
        },
        {
          [StoreType.AMBIENT_TEMPERATURE]: [],
          [StoreType.COLD]: [],
          [StoreType.FROZEN]: [],
        }
      ),
    [cartEntity.detail?.data?.dealProducts, type]
  );
  const calculateCheckStatus = useCallback(
    (dealProductNo: number) =>
      cartEntity.entity.selectedProduct.reduce((acc, cur) => {
        if (cur.no === dealProductNo) {
          acc = cur.checked;
        }

        return acc;
      }, false),
    [cartEntity.entity.selectedProduct]
  );

  if (reducedCartDetail()?.[type].length) {
    return (
      <>
        <SelectedProductStoreType
          type={StoreType[type]}
          isOpen={isOpen}
          handleClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        {isOpen &&
          reducedCartDetail()?.[type].map(data => (
            <SelectedProductItem
              key={data.dealProductNo}
              handleChange={checked => {
                dispatch(actions.select({ entity: data, checked: !checked }));
              }}
              handleRemove={() => {
                dispatch(actions.remove(data.dealProductNo));
              }}
              checked={calculateCheckStatus(data.dealProductNo)}
              data={data}
            />
          ))}
      </>
    );
  }

  return null;
}

export default SelectedProductList;
