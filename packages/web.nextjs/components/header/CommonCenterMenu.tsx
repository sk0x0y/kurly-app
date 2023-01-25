import Link from 'next/link';
import { css } from '@emotion/react';

function CommonCenterMenu() {
  return (
    <ul
      css={css`
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      <li
        css={css`
          width: 150px;
          padding-top: 5px;
          text-align: center;
        `}
      >
        <Link href="/">
          <button
            type="button"
            css={css`
              padding: 0;
              border: 0;
              background-color: transparent;
              font-weight: 500;
              font-size: 16px;
              cursor: pointer;

              &:hover {
                border-bottom: 1px solid rgb(95, 0, 128);
                color: rgb(95, 0, 128);
              }
            `}
          >
            신상품
          </button>
        </Link>
      </li>

      <li
        css={css`
          width: 150px;
          padding-top: 5px;
          text-align: center;
        `}
      >
        <Link href="/">
          <button
            type="button"
            css={css`
              padding: 0;
              border: 0;
              background-color: transparent;
              font-weight: 500;
              font-size: 16px;
              cursor: pointer;

              &:hover {
                border-bottom: 1px solid rgb(95, 0, 128);
                color: rgb(95, 0, 128);
              }
            `}
          >
            베스트
          </button>
        </Link>
      </li>

      <li
        css={css`
          width: 150px;
          padding-top: 5px;
          text-align: center;
        `}
      >
        <Link href="/">
          <button
            type="button"
            css={css`
              padding: 0;
              border: 0;
              background-color: transparent;
              font-weight: 500;
              font-size: 16px;
              cursor: pointer;

              &:hover {
                border-bottom: 1px solid rgb(95, 0, 128);
                color: rgb(95, 0, 128);
              }
            `}
          >
            알뜰쇼핑
          </button>
        </Link>
      </li>

      <li
        css={css`
          width: 150px;
          padding-top: 5px;
          text-align: center;
        `}
      >
        <Link href="/">
          <button
            type="button"
            css={css`
              padding: 0;
              border: 0;
              background-color: transparent;
              font-weight: 500;
              font-size: 16px;
              cursor: pointer;

              &:hover {
                border-bottom: 1px solid rgb(95, 0, 128);
                color: rgb(95, 0, 128);
              }
            `}
          >
            특가/혜택
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default CommonCenterMenu;
