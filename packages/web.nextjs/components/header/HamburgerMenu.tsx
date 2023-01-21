import { css } from '@emotion/react';
import Image from 'next/image';

function HamburgerMenu() {
  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        bottom: -42px;
        z-index: 10;
        width: 250px;
        border: 1px solid rgb(221, 221, 221);
        background-color: #fff;
      `}
    >
      <ul
        css={css`
          margin: 0;
          padding: 0;
        `}
      >
        <li
          css={css`
            list-style: none;
            padding: 7px 0 9px 14px;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <Image
              src="/hamburger/a5tXHWOGWZXPvBA1KVTQpIjCGDYHOOPRVRJBail4.png"
              alt="2023 설 선물세트"
              width={24}
              height={24}
            />
            <span>
              2023 설 선물세트
              <span />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
