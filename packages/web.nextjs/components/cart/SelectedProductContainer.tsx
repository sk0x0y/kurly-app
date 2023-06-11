import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';
import { CartEntity } from '../../application/entities/cart.entity';
import { actions } from '../../application/usecases/cart.usecase';
import SelectedProduct from './SelectedProduct';
import SelectedAndRemoveTab from './SelectedAndRemoveTab';

interface IProps {
  cartEntity: CartEntity;
  cartDetail?: AxiosResponse<ICartDetail>;
}
function SelectedProductContainer(props: IProps) {
  const { cartEntity, cartDetail } = props;

  const [checkedAll, setCheckedAll] = useState(false);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (checked: typeof checkedAll) => {
      setCheckedAll(!checkedAll);

      dispatch(actions.selectAll(checked));
    },
    [checkedAll, dispatch]
  );

  useEffect(() => {
    if (cartEntity.detail.data.dealProducts) {
      setCheckedAll(true);
    }
  }, []);

  return (
    <div
      css={css`
        width: 742px;
      `}
    >
      <SelectedAndRemoveTab
        cartEntity={cartEntity}
        cartDetail={cartDetail}
        checkedAll={checkedAll}
        handleChange={checked => handleChange(checked)}
        handleRemove={() => {
          const targets = cartEntity.entity.selectedProduct.filter(selected => selected.checked);

          targets.map(target => {
            dispatch(actions.remove(target.no));

            return [];
          });
        }}
      />

      <div
        css={css`
          border-top: 1px solid #333;
          border-bottom: 1px solid #f4f4f4;
        `}
      >
        {!cartEntity?.detail.data.dealProducts.length && (
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

        {!!cartEntity?.detail.data.dealProducts.length && <SelectedProduct cartEntity={cartEntity} />}
      </div>

      <SelectedAndRemoveTab
        cartEntity={cartEntity}
        cartDetail={cartDetail}
        checkedAll={checkedAll}
        handleChange={checked => handleChange(checked)}
        handleRemove={() => {
          const targets = cartEntity.entity.selectedProduct.filter(selected => selected.checked);

          targets.map(target => {
            dispatch(actions.remove(target.no));

            return [];
          });
        }}
      />
    </div>
  );
}

export default SelectedProductContainer;
