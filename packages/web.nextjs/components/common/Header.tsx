import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

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
                margin-top: 2px;
                padding: 0;
                border: 0;
                background-color: transparent;
                color: rgb(95, 0, 128);
                cursor: pointer;
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
                margin-top: 2px;
                padding: 0;
                border: 0;
                background-color: transparent;
                cursor: pointer;
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
                  margin-top: 2px;
                  padding: 0;
                  border: 0;
                  background-color: transparent;
                  cursor: pointer;
                `}
              >
                고객센터
              </button>
            </Link>
          </div>
        </div>

        {/* 헤더 두번째 로고 및 검색창 */}
        <div
          css={css`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 64px;
          `}
        >
          {/* 로고 및 바로가기 */}
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            {/* 컬리 로고 */}
            <Image src="/logo.svg" width="82" height="42" style={{ cursor: 'pointer' }} />

            {/* 로고 옆 마켓컬리, 뷰티컬리 페이지 바로가기 */}
            <div
              css={css`
                margin-left: 15px;
              `}
            >
              {/* 마켓컬리 바로가기 */}
              <Link href="/">
                <button
                  type="button"
                  css={css`
                    border: 0;
                    background-color: transparent;
                    font-weight: 500;
                    font-size: 18px;
                    color: rgb(181, 181, 181);
                    cursor: pointer;

                    &:hover {
                      color: rgb(95, 0, 128);
                    }
                  `}
                >
                  마켓컬리
                </button>
              </Link>

              {/* Divider */}
              <div
                css={css`
                  display: inline-block;
                  width: 1px;
                  height: 14px;
                  margin: 5px 3px 0;
                  background-color: rgb(226, 226, 226);
                `}
              />

              {/* 뷰티컬리 바로가기 */}
              <Link href="/beauty">
                <button
                  type="button"
                  css={css`
                    border: 0;
                    background-color: transparent;
                    font-weight: 500;
                    font-size: 18px;
                    color: rgb(181, 181, 181);
                    cursor: pointer;

                    &:hover {
                      color: rgb(95, 0, 128);
                    }
                  `}
                >
                  뷰티컬리
                </button>
              </Link>
            </div>
          </div>

          {/* 상단 중앙 검색창 */}
          <div
            css={css`
              position: absolute;
              left: 325px;
              bottom: 6px;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                width: 400px;
                height: 48px;
                border: 1px solid rgb(95, 0, 128);
                border-radius: 6px;
              `}
            >
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                css={css`
                  width: 300px;
                  margin-left: 14px;
                  appearance: none;
                  border: 0;
                  font-size: 16px;
                  letter-spacing: -0.33px;

                  &:focus {
                    outline: none;
                  }
                `}
              />
              <button
                type="button"
                css={css`
                  padding-top: 5px;
                  border: 0;
                  background-color: transparent;
                  cursor: pointer;
                `}
              >
                <Image src="/search.svg" width={36} height={36} />
              </button>
            </div>
          </div>

          {/* 사용자 개인화 메뉴 */}
          <div css={css``}>
            <button
              type="button"
              css={css`
                margin-right: 20px;
                padding: 0;
                border: 0;
                background-color: transparent;
              `}
            >
              <Image src="/address.svg" width={36} height={36} />
            </button>
            <button
              type="button"
              css={css`
                padding: 0;
                border: 0;
                background-color: transparent;
              `}
            >
              <Image src="/dibs_on.svg" width={36} height={36} />
            </button>
            <button
              type="button"
              css={css`
                margin-left: 20px;
                padding: 0;
                border: 0;
                background-color: transparent;
              `}
            >
              <Image src="/cart.svg" width={36} height={36} />
            </button>
          </div>
        </div>

        {/* 헤더 세번째 상단 공통 메뉴 */}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 56px;
          `}
        >
          {/* 카테고리 햄버거 메뉴 */}
          <div
            css={css`
              display: flex;
              cursor: pointer;

              &:hover {
                color: rgb(95, 0, 128);
              }
            `}
          >
            <Image src="/hamburger.svg" width={16} height={16} />
            <span
              css={css`
                margin-left: 12px;
                padding-top: 2px;
                font-weight: 500;
                font-size: 16px;
                letter-spacing: -0.3px;
              `}
            >
              카테고리
            </span>
          </div>

          {/* 중앙 공통 메뉴 */}
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

          {/* 우측 배송 안내 */}
          <div
            css={css`
              line-height: 56px;
            `}
          >
            <Link href="/delivery/guide">
              <button
                type="button"
                css={css`
                  padding: 6px 16px;
                  border: 1px solid rgb(238, 238, 238);
                  border-radius: 18px;
                  background-color: transparent;
                  font-size: 13px;
                  letter-spacing: -0.32px;
                  color: rgb(102, 102, 102);
                `}
              >
                <span
                  css={css`
                    font-weight: 500;
                    color: rgb(95, 0, 128);
                  `}
                >
                  샛별・낮
                </span>
                &nbsp;
                <span>배송안내</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
