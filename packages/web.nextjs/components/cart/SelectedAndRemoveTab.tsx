import { css } from '@emotion/react';
import Button from '../designsystem/button';
import NotCheckedIcon from '../designsystem/icon/NotCheckedIcon';

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
          <NotCheckedIcon
            styles={css`
              vertical-align: middle;
            `}
            width={24}
            height={24}
            fill="#f2f2f2"
          />
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
