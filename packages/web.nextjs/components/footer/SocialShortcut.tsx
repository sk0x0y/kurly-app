import Image from 'next/image';
import { css } from '@emotion/react';

function SocialShortcut() {
  const CommonIconStyle = css`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;

    img {
      max-width: 100%;
    }
  `;

  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
      `}
    >
      <a href="https://instagram.com/marketkurly" target="_blank" rel="noreferrer" css={CommonIconStyle}>
        <Image src="/ico_instagram.png" width={30} height={30} alt="마켓컬리 인스타그램 바로가기" />
      </a>
      <a href="https://www.facebook.com/marketkurly" target="_blank" rel="noreferrer" css={CommonIconStyle}>
        <Image src="/ico_fb.png" width={30} height={30} alt="마켓컬리 페이스북 바로가기" />
      </a>
      <a href="https://blog.naver.com/marketkurly" target="_blank" rel="noreferrer" css={CommonIconStyle}>
        <Image src="/ico_blog.png" width={30} height={30} alt="마켓컬리 네이버블로그 바로가기" />
      </a>
      <a href="https://m.post.naver.com/marketkurly" target="_blank" rel="noreferrer" css={CommonIconStyle}>
        <Image src="/ico_naverpost.png" width={30} height={30} alt="마켓컬리 네이버포스트 바로가기" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
        target="_blank"
        rel="noreferrer"
        css={CommonIconStyle}
      >
        <Image src="/ico_youtube.png" width={30} height={30} alt="마켓컬리 유튜브 바로가기" />
      </a>
    </ul>
  );
}

export default SocialShortcut;
