import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import CheckedIcon from '../designsystem/icon/CheckedIcon';
import Button from '../designsystem/button';
import { ICartProductDetailData } from '../../infrastructure/interface/cart.interface';
import NotCheckedIcon from '../designsystem/icon/NotCheckedIcon';

interface IProps {
  data: ICartProductDetailData;
  handleRemove: () => void;
}
function SelectedProductItem(props: IProps) {
  const { data, handleRemove } = props;

  const [checked, setChecked] = useState(true);

  return (
    <li
      key={data.dealProductNo}
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
          onChange={() => {
            setChecked(!checked);
          }}
          type="checkbox"
          checked={checked}
        />

        <div>
          {checked ? (
            <CheckedIcon width={24} height={24} fill="#5f0080" />
          ) : (
            <NotCheckedIcon width={24} height={24} fill="none" />
          )}
        </div>

        <span />
      </label>

      <Link href={`/product/${data.contentsProductNo}`} passHref>
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
          <Image src={data.imageUrl} width={60} height={78} />
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
        <Link href={`/product/${data.contentsProductNo}`} passHref>
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
              {data.dealProductName}
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
              {data.masterProductName}
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
            {data.quantity}
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
          {data.discountPrice
            ? (data.productPrice - data.discountPrice) * data.quantity
            : data.productPrice * data.quantity}
          원
        </span>

        {/* 할인 전 가격 */}
        <span
          css={css`
            padding-top: 4px;
            font-size: 14px;
            line-height: 24px;
            color: rgb(181, 181, 181);
            text-decoration: line-through;
          `}
        >
          {data.retailPrice * data.quantity}원
        </span>
      </div>

      <Button.Base
        onClick={handleRemove}
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
  );
}

export default SelectedProductItem;
