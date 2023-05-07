import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import Button from '../designsystem/button';
import { RootState } from '../../infrastructure/redux';

function Cart() {
  const [mouseOver, setMouserOver] = useState(false);

  const cartEntity = useSelector((state: RootState) => state.cartAdaptor.entity);

  return (
    <Link href="/cart" passHref>
      <a
        css={css`
          position: relative;
        `}
      >
        <Button.Base
          styles={css`
            margin-left: 20px;
            background-color: transparent;
          `}
        >
          <Image
            onMouseEnter={() => {
              setMouserOver(true);
            }}
            onMouseLeave={() => {
              setMouserOver(false);
            }}
            src={
              mouseOver
                ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzVmMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
                : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
            }
            width={36}
            height={36}
          />

          {/* 장바구니에 담은 아이템 갯수 */}
          {!!cartEntity.selectedProduct.length && (
            <span
              css={css`
                position: absolute;
                right: -4px;
                min-width: 20px;
                height: 20px;
                padding: 0 5px;
                border: 2px solid rgb(255, 255, 255);
                border-radius: 10px;
                background-color: rgb(95, 0, 128);
                font-size: 9px;
                color: rgb(255, 255, 255);
                line-height: 17px;
                text-align: center;
                white-space: nowrap;
              `}
            >
              {cartEntity.selectedProduct.length}
            </span>
          )}
        </Button.Base>
      </a>
    </Link>
  );
}

export default Cart;
