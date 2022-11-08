import { css } from '@emotion/react';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      css={css`
        padding-top: 29px;
        border-top: 1px solid rgb(247, 247, 247);
      `}
    >
      {/* 가운데 정렬 컨테이너 */}
      <div
        css={css`
          width: 1050px;
          margin: 0 auto;
        `}
      >
        {/* Footer 첫번째 라인 */}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            padding-bottom: 67px;
          `}
        >
          {/* Footer 첫번째 라인 좌측 컨텐츠 */}
          <div>
            <h2
              css={css`
                display: inline;
              `}
            >
              고객행복센터
            </h2>
            <span>365일 오전 7시 - 오후 7시</span>
            <p
              css={css`
                margin: 0;
              `}
            >
              <strong>1644-1107</strong>
            </p>

            {/* B2C 문의하기 버튼 */}
            <div>
              <Link href="/kakao">
                <button type="button">카카오톡 문의</button>
              </Link>
            </div>

            {/* B2B 비회원 문의하기 */}
            <div>
              <p>
                비회원 문의 : &nbsp;
                <Link href="mailto:help@kurlycorp.com">
                  <button type="button">help@kurlycorp.com</button>
                </Link>
              </p>
            </div>
          </div>

          {/* Footer 첫번째 라인 우측 컨텐츠 */}
          <div>
            <ul
              css={css`
                list-style: none;
                margin: 0;
                padding: 0 0 29px;
              `}
            >
              <li>
                <Link href="/">
                  <button type="button">컬리소개</button>
                </Link>
              </li>
            </ul>

            <div>회사정보</div>

            <ul
              css={css`
                list-style: none;
                margin: 0;
                padding: 28px 0 0;
              `}
            >
              <li>
                <Link href="/kakao">
                  <button type="button">카카오톡 문의</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer 두번째 라인 */}
        <div>두번째</div>
      </div>
    </footer>
  );
}

export default Footer;
