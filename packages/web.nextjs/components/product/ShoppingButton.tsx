import Image from 'next/image';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../designsystem/button';
import { RootState } from '../../infrastructure/redux';
import { actions } from '../../application/usecases/local/cart.local.usecase';

function ShoppingButton() {
  const dispatch = useDispatch();
  const selectedProductEntity = useSelector((state: RootState) => state.selectedProductAdaptor.entity);

  return (
    <div
      css={css`
        display: flex;
        gap: 8px;
        margin-top: 20px;
      `}
    >
      <Button.Base
        styles={css`
          display: block;
          padding: 0 10px;
          text-align: center;
          overflow: hidden;
          width: 56px;
          height: 56px;
          border-radius: 3px;
          color: #333;
          background-color: #fff;
          border: 1px solid #ddd;
        `}
      >
        <span
          css={css`
            position: relative;
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
            width: 32px;
            height: 32px;
            vertical-align: top;
          `}
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
            alt=""
            layout="fill"
          />
        </span>
      </Button.Base>

      <Button.Base
        styles={css`
          display: block;
          padding: 0 10px;
          text-align: center;
          overflow: hidden;
          width: 56px;
          height: 56px;
          border-radius: 3px;
          color: #333;
          background-color: #fff;
          border: 1px solid #ddd;
        `}
      >
        <span
          css={css`
            position: relative;
            display: inline-block;
            width: 32px;
            height: 32px;
            vertical-align: top;
          `}
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt=""
            layout="fill"
          />
        </span>
      </Button.Base>

      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <Button.Common
          onClick={() => {
            dispatch(actions.put(selectedProductEntity));
          }}
          styles={css`
            height: 100%;
            background-color: #5f0080;
            color: #fff;
            cursor: pointer;
          `}
        >
          <span
            css={css`
              font-weight: 500;
              font-size: 16px;
            `}
          >
            장바구니 담기
          </span>
        </Button.Common>
      </div>
    </div>
  );
}

export default ShoppingButton;
