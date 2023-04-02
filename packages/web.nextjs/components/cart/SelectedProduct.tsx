import Image from 'next/image';
import { css } from '@emotion/react';
import { ICart } from '../../infrastructure/interface/cart.interface';
import Button from '../designsystem/button';
import SelectedAndRemoveTab from './SelectedAndRemoveTab';
import { actions } from '../../application/usecases/local/selectedProduct.local.usecase';

interface IProps {
  cartEntity: ICart;
}
function SelectedProduct(props: IProps) {
  const { cartEntity } = props;

  return (
    <div
      css={css`
        width: 742px;
      `}
    >
      <SelectedAndRemoveTab />

      <div
        css={css`
          border-top: 1px solid #333;
          border-bottom: 1px solid #f4f4f4;
        `}
      >
        {!cartEntity.selectedProduct.length && (
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

        {cartEntity.selectedProduct.length && (
          <div
            css={css`
              &:not(:first-of-type) {
                border-top: 1px solid #333;
              }
            `}
          >
            <h4
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 60px;
                margin: 0;
                padding: 13px 5px 13px 0;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <span
                  css={css`
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    margin-right: 8px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNSA0KSIgc3Ryb2tlPSIjRkY5QjVDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMSIgcj0iNiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMS41IDB2Mk0xOS4yNzggMy4yMjJsLTEuNDE0IDEuNDE0TTIyLjUgMTFoLTJNMTkuMjc4IDE4Ljc3OGwtMS40MTQtMS40MTRNMTEuNSAyMnYtMk0zLjcyMiAxOC43NzhsMS40MTQtMS40MTRNLjUgMTFoMk0zLjcyMiAzLjIyMmwxLjQxNCAxLjQxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
                    background-size: cover;
                    background-position: center center;
                  `}
                />
                <span
                  css={css`
                    display: inline-block;
                    margin-top: 4px;
                    font-weight: 500;
                    font-size: 18px;
                  `}
                >
                  상온 상품
                </span>
              </div>

              <Button.Base
                styles={css`
                  height: 30px;
                  padding-top: 1px;
                `}
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                  alt="접기"
                  width={30}
                  height={30}
                />
              </Button.Base>
            </h4>

            <ul>
              <li
                css={css`
                  display: flex;
                  align-items: center;
                  padding: 20px 0;
                `}
              >
                <label
                  css={css`
                    margin-right: 12px;
                  `}
                >
                  <input
                    css={css`
                      display: none;
                    `}
                    type="checkbox"
                    checked
                  />
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                        fill="#5f0080"
                      />
                      <path
                        d="M7 12.6667L10.3846 16L18 8.5"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span />
                </label>

                <a
                  css={css`
                    display: inline-block;
                    width: 60px;
                    height: 78px;
                    margin-right: 20px;
                    background: url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) center center
                      no-repeat rgb(245, 245, 245);
                  `}
                >
                  <span
                    css={css`
                      display: block;
                      height: 100%;
                      background-image: url(https://product-image.kurly.com/product/image/6a6d9f40-c145-4892-a142-5cc2854f5bfa.jpg);
                      background-size: cover;
                      background-position: center center;
                      background-repeat: no-repeat;
                    `}
                  />
                </a>

                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    width: 345px;
                    margin-right: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    word-break: break-all;
                  `}
                >
                  <a>
                    <p>[몬] 라이스누들 1mm</p>
                    <p>[몬] 동남아 라이스누들 5종</p>
                  </a>
                  <div />
                </div>

                <div
                  css={css`
                    display: inline-flex;
                    justify-content: space-between;
                    width: 100%;
                    margin-top: 12px;
                  `}
                >
                  <div
                    css={css`
                      display: inline-flex;
                      width: 88px;
                      border: 1px solid rgb(221, 223, 225);
                      border-radius: 3px;
                    `}
                  >
                    {/* 선택한 상품 감소 */}
                    <Button.Base
                      onClick={() => {}}
                      styles={css`
                        width: 28px;
                        height: 28px;
                        background-size: cover;
                        background-color: transparent;
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
                      `}
                      nomessage
                    />

                    <span
                      css={css`
                        font-size: 14px;
                        text-align: center;
                        width: 31px;
                        height: 28px;
                        line-height: 28px;
                      `}
                    >
                      1
                    </span>

                    {/* 선택한 상품 증가 */}
                    <Button.Base
                      onClick={() => {}}
                      styles={css`
                        width: 28px;
                        height: 28px;
                        background-size: cover;
                        background-color: transparent;
                        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
                      `}
                      nomessage
                    />
                  </div>
                </div>

                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    width: 127px;
                    text-align: right;
                    word-break: break-all;
                  `}
                >
                  <span aria-label="판매 가격" data-testid="product-price">
                    2,180원
                  </span>
                </div>

                <Button.Base
                  onClick={() => {}}
                  styles={css`
                    width: 24px;
                    height: 24px;
                  `}
                >
                  <i
                    css={css`
                      display: inline-block;
                      width: 100%;
                      height: 100%;
                      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTAuOTEgMTAuOTEgMCAwIiBpZD0iMDMxNHo5c3Z0YSIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDEwLjkxIDEwLjkxIDAiIGlkPSJ6cjgxbTJkYXZiIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41NDUgNi41NDUpIj4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iLjU0NSIgeGxpbms6aHJlZj0iIzAzMTR6OXN2dGEiLz4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMS4wOTEiIHhsaW5rOmhyZWY9IiMwMzE0ejlzdnRhIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTQ1IDYuNTQ1KSI+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9Ii41NDUiIHhsaW5rOmhyZWY9IiN6cjgxbTJkYXZiIi8+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjEuMDkxIiB4bGluazpocmVmPSIjenI4MW0yZGF2YiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
                    `}
                  />
                </Button.Base>
              </li>
            </ul>
          </div>
        )}
      </div>

      <SelectedAndRemoveTab />
    </div>
  );
}

export default SelectedProduct;
