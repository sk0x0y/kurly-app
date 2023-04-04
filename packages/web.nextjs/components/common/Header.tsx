import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../designsystem/button';
import Divider from '../header/Divider';
import HamburgerMenuWrapper from '../header/HamburgerMenuWrapper';
import CommonCenterMenu from '../header/CommonCenterMenu';
import DeliveryInformation from '../header/DeliveryInformation';

function Header() {
  return (
    <header
      css={css`
        position: relative;
        z-index: 1000;
        box-shadow: rgb(0 0 0 / 7%) 0 3px 4px 0;
      `}
    >
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
          <Link href="/signup">
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

          <Divider />

          {/* 로그인 */}
          <Link href="/signin">
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

          <Divider />

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
            <Link href="/">
              <a>
                <Image src="/logo.svg" width="82" height="42" style={{ cursor: 'pointer' }} />
              </a>
            </Link>

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
            {/* 주소지 설정 */}
            <Button.Base
              styles={css`
                margin-left: 20px;
                background-color: transparent;
              `}
            >
              <Image src="/address.svg" width={36} height={36} />
            </Button.Base>

            {/* 찜하기 */}
            <Button.Base
              styles={css`
                margin-left: 20px;
                background-color: transparent;
              `}
            >
              <Image src="/dibs_on.svg" width={36} height={36} />
            </Button.Base>

            {/* 장바구니 */}
            <Link href="/cart" passHref>
              <a>
                <Button.Base
                  styles={css`
                    margin-left: 20px;
                    background-color: transparent;
                  `}
                >
                  <Image src="/cart.svg" width={36} height={36} />
                </Button.Base>
              </a>
            </Link>
          </div>
        </div>

        {/* 헤더 세번째 상단 공통 메뉴 */}
        <div
          css={css`
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 56px;
          `}
        >
          {/* 카테고리 햄버거 메뉴 */}
          <HamburgerMenuWrapper />

          {/* 중앙 공통 메뉴 */}
          <CommonCenterMenu />

          {/* 우측 배송 안내 */}
          <DeliveryInformation />
        </div>
      </div>
    </header>
  );
}

export default Header;
