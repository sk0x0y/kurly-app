import { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import SiteMap from '../footer/SiteMap';
import Contact from '../footer/Contact';

export interface ISiteMap {
  id: number;
  name: string;
  href: string;
  isStrong?: boolean;
}
function Footer() {
  const [siteMaps] = useState<ISiteMap[]>([
    { id: 1, name: '컬리소개', href: '/introduce' },
    { id: 2, name: '컬리소개영상', href: '/introduce-media' },
    { id: 3, name: '인재채용', href: '/recruit' },
    { id: 4, name: '이용약관', href: '/agreement' },
    { id: 5, name: '개인정보처리방침', href: '/privacy', isStrong: true },
    { id: 6, name: '이용안내', href: '/guide' },
  ]);

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
          <Contact />

          {/* Footer 첫번째 라인 우측 컨텐츠 */}
          <div>
            {/* 사이트맵 */}
            <SiteMap siteMaps={siteMaps} />

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
