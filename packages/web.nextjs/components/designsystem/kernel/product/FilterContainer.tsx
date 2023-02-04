import React from 'react';
import { css } from '@emotion/react';
import ResetIcon from '../../icon/ResetIcon';

interface IProps {
  children?: React.ReactNode;
}
function FilterContainer(props: IProps) {
  const { children } = props;

  return (
    <div
      css={css`
        width: 220px;
        max-height: calc(100vh - 120px);
        margin-right: 47px;
        flex-shrink: 0;
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <div
        css={css`
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid rgb(238, 238, 238);
          background-color: #fff;
        `}
      >
        <span
          css={css`
            font-weight: 500;
            font-size: 15px;
          `}
        >
          필터
        </span>
        <button
          type="button"
          css={css`
            appearance: none;
            padding: 0;
            border: 0;
            background-color: transparent;
            cursor: pointer;
          `}
        >
          <ResetIcon />
          <span
            css={css`
              margin-left: 5px;
              font-weight: 500;
              color: rgb(221, 221, 221);
            `}
          >
            초기화
          </span>
        </button>
      </div>

      {children ?? 'Not have children'}
    </div>
  );
}

export default FilterContainer;
