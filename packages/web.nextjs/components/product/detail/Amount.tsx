import { css } from '@emotion/react';

function Amount() {
  return (
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
  );
}

export default Amount;
