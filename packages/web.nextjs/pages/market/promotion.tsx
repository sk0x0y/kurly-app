import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import Content from '../../components/designsystem/content';
import { RootState } from '../../infrastructure/redux';

function Promotion() {
  const banners = useSelector((state: RootState) => state.bannerAdaptor.entity);

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      {banners.map(banner => (
        <Content.Banner
          key={banner.id}
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
