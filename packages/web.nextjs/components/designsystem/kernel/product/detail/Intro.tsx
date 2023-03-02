import Image from 'next/image';
import { css } from '@emotion/react';
import { IntroType } from '../../../../../infrastructure/interface/product.interface';

interface IProps {
  intro: IntroType;
}
function Intro(props: IProps) {
  const { intro } = props;

  return (
    <div
      css={css`
        margin-bottom: 170px;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 673px;
        `}
      >
        <Image src={(intro && intro.image?.src) ?? '/dummy/1050x673.png'} layout="fill" />
      </div>

      <h3
        css={css`
          margin: 75px 0 0 0;
          padding-bottom: 35px;
          font-size: 38px;
          line-height: 46px;
          text-align: center;
          border-bottom: 1px solid #c1c1c1;
          color: #666;
        `}
      >
        <small
          css={css`
            display: block;
            font-size: 24px;
            margin-bottom: 14px;
            line-height: 15px;
          `}
        >
          {(intro && intro.subTitle) ?? '상품 부제목'}
        </small>
        {(intro && intro.title) ?? '상품 제목'}
      </h3>
      <p
        css={css`
          margin-top: 55px;
          margin-top: 28px;
          font-size: 18px;
          line-height: 32px;
          color: #373737;
        `}
      >
        {(intro && intro.description) ?? '상품 설명'}
      </p>
    </div>
  );
}

export default Intro;
