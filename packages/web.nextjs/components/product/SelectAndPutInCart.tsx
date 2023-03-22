import Image from 'next/image';
import { css } from '@emotion/react';
import Button from '../designsystem/button';
import Select from '../designsystem/select';
import InformationNoticeItem from './InformationNoticeItem';

function SelectAndPutInCart() {
  return (
    <div>
      <div
        css={css`
          border-bottom: 1px solid rgb(244, 244, 244);
        `}
      >
        <InformationNoticeItem
          label="상품 선택"
          styles={{
            container: css`
              overflow: initial;
            `,
            title: css`
              line-height: 40px;
            `,
          }}
        >
          <Select.Container />
        </InformationNoticeItem>
      </div>

      <div
        css={css`
          padding-top: 30px;
          letter-spacing: -0.5px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `}
        >
          <span
            css={css`
              padding-right: 12px;
              font-size: 13px;
              font-weight: 500;
              color: #333;
              line-height: 20px;
            `}
          >
            총 상품금액 :
          </span>

          <span
            css={css`
              font-weight: bold;
              font-size: 32px;
              color: #333;
              line-height: 32px;
            `}
          >
            0
          </span>

          <span
            css={css`
              padding-left: 5px;
              font-size: 20px;
              font-weight: 600;
              color: #333;
              line-height: 30px;
            `}
          >
            원
          </span>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            padding-top: 10px;
          `}
        >
          <span
            css={css`
              background-color: #ffbf00;
              margin: 1px 6px 0 0;
              padding: 0 7px;
              border-radius: 10px;
              font-size: 11px;
              font-weight: 500;
              color: #fff;
              line-height: 20px;
            `}
          >
            적립
          </span>

          <span
            css={css`
              line-height: 1.45;
              color: #666;
            `}
          >
            로그인 후, 적립 혜택 제공
          </span>
        </div>
      </div>

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
    </div>
  );
}

export default SelectAndPutInCart;
