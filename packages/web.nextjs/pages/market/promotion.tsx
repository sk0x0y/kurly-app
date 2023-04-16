import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import { usePromotion } from '../../hooks';

function Promotion() {
  // const banners = useSelector((state: RootState) => state.bannerAdaptor.entity);
  const { data: banners } = usePromotion();

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      {banners &&
        banners.data.data.map(banner => (
          <Content.Banner
            key={banner.id}
            entity={banner}
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
