import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';
import { CartEntity } from '../../application/entities/cart.entity';
import Button from '../designsystem/button';
import NotCheckedIcon from '../designsystem/icon/NotCheckedIcon';
import CheckedIcon from '../designsystem/icon/CheckedIcon';

interface IProps {
  cartEntity: CartEntity;
  cartDetail?: AxiosResponse<ICartDetail>;
  checkedAll: boolean;
  handleChange: (checked: boolean) => void;
}
function SelectedAndRemoveTab(props: IProps) {
  const { cartEntity, cartDetail, checkedAll, handleChange } = props;

  // TODO: 하나라도 체크 안되어있으면 전체선택풀림, 전체선택체크 안되어있어도 개별 상품 모두 체크시 전체선택체크

  const checkedProducts = useCallback(
    () =>
      cartEntity.entity.selectedProduct.reduce((acc, cur) => {
        if (cur.checked) {
          acc += 1;
        }

        return acc;
      }, 0),
    [cartEntity.entity.selectedProduct]
  );

  // console.log(checkedProducts());

  return (
    <div
      css={css`
        padding: 18px 10px 16px 2px;
        font-weight: 500;
        line-height: 26px;
      `}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        css={css`
          display: inline-flex;
        `}
      >
        <div
          css={css`
            margin-right: 12px;
          `}
        >
          {/* 전체선택 체크박스 */}
          <input
            css={css`
              display: none;
            `}
            onChange={() => {
              if (cartEntity.detail.data.dealProducts.length) {
                handleChange(checkedAll);
              }
            }}
            type="checkbox"
            checked={checkedAll}
          />

          {checkedProducts() ? (
            <CheckedIcon
              styles={css`
                vertical-align: middle;
              `}
              width={24}
              height={24}
              fill="#5f0080"
            />
          ) : (
            <NotCheckedIcon
              styles={css`
                vertical-align: middle;
              `}
              width={24}
              height={24}
              fill={cartEntity.detail.data.dealProducts.length ? 'none' : '#f2f2f2'}
            />
          )}
        </div>

        <span>
          전체선택 ({checkedProducts()}/{cartEntity?.detail.data.totalCount || 0})
        </span>
      </label>

      <span
        css={css`
          display: inline-block;
          width: 1px;
          height: 14px;
          background: rgb(221, 221, 221);
          margin: 6px 21px 0 22px;
          vertical-align: top;
        `}
      />

      <Button.Base
        styles={css`
          font-weight: 500;
        `}
      >
        선택삭제
      </Button.Base>
    </div>
  );
}

export default SelectedAndRemoveTab;
