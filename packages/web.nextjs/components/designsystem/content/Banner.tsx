import { css, SerializedStyles } from '@emotion/react';
import { IKurlyPromotionBannerData } from '../../../infrastructure/interface/banner.interface';

interface IProps {
  entity: IKurlyPromotionBannerData;
  styles?: SerializedStyles;
}
function Banner(props: IProps) {
  const { entity, styles } = props;

  return (
    <section
      css={[
        css`
          min-height: 140px;
          max-height: 200px;
          margin: 0 auto;
          padding: 40px 0;
        `,
        styles,
      ]}
    >
      <a
        href={entity.link}
        css={css`
          display: block;
        `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entity.image} alt="" />
      </a>
    </section>
  );
}

export default Banner;
