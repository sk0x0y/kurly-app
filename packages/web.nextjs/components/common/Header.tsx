import { css } from '@emotion/react';
import Link from 'next/link';
// import Image from 'next/image';

function Header() {
  return (
    <header>
      <div
        css={css`
          width: 1050px;
          margin: 0 auto;
        `}
      >
        {/* 헤더 첫번째 라인 부가 메뉴 */}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 12px;
          `}
        >
          {/* 회원가입 */}
          <Link href="/">
            <button
              type="button"
              css={css`
                padding: 0;
                border: 0;
                background-color: transparent;
                color: rgb(95, 0, 128);
              `}
            >
              회원가입
            </button>
          </Link>

          {/* Divider */}
          <div
            css={css`
              display: inline-block;
              width: 1px;
              height: 13px;
              margin: 0 12px;
              background-color: rgb(217, 217, 217);
            `}
          />

          {/* 로그인 */}
          <Link href="/">
            <button
              type="button"
              css={css`
                padding: 0;
                border: 0;
                background-color: transparent;
              `}
            >
              로그인
            </button>
          </Link>

          {/* Divider */}
          <div
            css={css`
              display: inline-block;
              width: 1px;
              height: 13px;
              margin: 0 12px;
              background-color: rgb(217, 217, 217);
            `}
          />

          {/* 고객센터 */}
          <div
            css={css`
              line-height: 35px;
            `}
          >
            <Link href="/">
              <button
                type="button"
                css={css`
                  padding: 0;
                  border: 0;
                  background-color: transparent;
                `}
              >
                고객센터
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>2</div>

      <div>3</div>
    </header>
  );
}

export default Header;
