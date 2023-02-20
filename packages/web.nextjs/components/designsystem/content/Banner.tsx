import { css, SerializedStyles } from '@emotion/react';
import { IBanner } from '../../../infrastructure/interface/banner.interface';

interface IProps extends Omit<IBanner, 'id'> {
  styles?: SerializedStyles;
}
function Banner(props: IProps) {
  const { url, image, styles } = props;

  return (
    <section
      css={[
        css`
          width: ${image?.size?.width ?? 1050}px;
          height: ${image?.size?.height}px;
          margin: 0 auto;
          padding: 40px 0;
        `,
        styles,
      ]}
    >
      <a
        href={url ?? 'https://www.kurly.com/main/beauty'}
        css={css`
          display: block;
          height: ${image?.size?.height ?? 140}px;
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image?.src}
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
