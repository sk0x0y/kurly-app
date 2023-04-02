import { css } from '@emotion/react';
import Button from '../designsystem/button';

function SelectedAndRemoveTab() {
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
          <svg
            css={css`
              vertical-align: middle;
            `}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
              stroke="#ddd"
              fill="#f2f2f2"
            />
            <path
              d="M7 12.6667L10.3846 16L18 8.5"
              stroke="#ddd"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span>전체선택 (0/0)</span>
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
