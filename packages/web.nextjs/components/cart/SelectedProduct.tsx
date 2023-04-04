import Link from 'next/link';
import { css } from '@emotion/react';
import { ICart } from '../../infrastructure/interface/cart.interface';
import Button from '../designsystem/button';
import SelectedProductStoreType from './SelectedProductStoreType';
import CheckedIcon from '../designsystem/icon/CheckedIcon';

interface IProps {
  cartEntity: ICart;
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
      <SelectedProductStoreType type={0} />

      <ul>
        {cartEntity.selectedProduct.map(entity => (
          <li
            key={entity.id}
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
              />

              <div>
                <CheckedIcon width={24} height={24} fill="#5f0080" />
              </div>

              <span />
            </label>

            <Link href="/" passHref>
              <a
                css={css`
                  display: inline-block;
                  width: 60px;
                  height: 78px;
                  margin-right: 20px;
                  background: url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff85dca3193dfce31add0852dbb.svg)
                    center center no-repeat rgb(245, 245, 245);
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
            </Link>

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
              <Link href="/" passHref>
                <a
                  css={css`
                    color: inherit;
                    text-decoration: inherit;
                  `}
                >
                  <p
                    css={css`
                      max-height: 54px;
                      padding-top: 8px;
                      font-weight: 500;
                      font-size: 16px;
                      line-height: 22px;
                      display: -webkit-box;
                      overflow: hidden;
                      word-break: break-all;
                      white-space: normal;
                    `}
                  >
                    [몬] 라이스누들 1mm
                  </p>

                  <p
                    css={css`
                      max-height: 38px;
                      margin-top: 8px;
                      margin-bottom: 2px;
                      font-size: 14px;
                      line-height: 19px;
                      color: rgb(153, 153, 153);
                      display: -webkit-box;
                      overflow: hidden;
                      word-break: break-all;
                      white-space: normal;
                    `}
                  >
                    {entity.name}
                  </p>
                </a>
              </Link>
              <div />
            </div>

            <div
              css={css`
                display: inline-flex;
                justify-content: space-between;
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
              <span
                css={css`
                  margin-top: 3px;
                  font-weight: 700;
                  font-size: 16px;
                  color: rgb(51, 51, 51);
                  line-height: 24px;
                `}
                aria-label="판매 가격"
                data-testid="product-price"
              >
                {!entity.price.discount && entity.price.original}
                {entity.price.discount && entity.price.original - entity.price.discount.price}원
              </span>
            </div>

            <Button.Base
              onClick={() => {
                window.alert('삭제하지마');
              }}
              styles={css`
                width: 30px;
                height: 30px;
                margin-left: 9px;
              `}
            >
              <i
                css={css`
                  width: 30px;
                  height: 30px;
                  display: inline-block;
                  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
                  background-size: cover;
                  background-position: center center;
                `}
              />
            </Button.Base>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedProduct;
