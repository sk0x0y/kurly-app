import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import { useLocalBannerEntity } from '../../infrastructure/zustand';

function Promotion() {
  const banners = useLocalBannerEntity();

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      {banners.map(banner => (
        <Content.Banner
          url={banner.url}
          image={banner.image}
          styles={css`
            margin-bottom: 10px;
            padding: 0;
          `}
        />
      ))}
    </Content.Section>
  );
}

export default Promotion;
