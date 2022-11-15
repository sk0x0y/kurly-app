import { css } from '@emotion/react';

interface IProps {
  src: string;
}
function Banner(props: IProps) {
  const { src } = props;

  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
        padding: 40px 0;
      `}
    >
      <a
        href="https://www.kurly.com/main/beauty"
        css={css`
          display: block;
          height: 140px;
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      </a>
    </section>
  );
}

export default Banner;
