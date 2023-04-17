import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { IKurlyBannerData } from '../../infrastructure/interface/banner.interface';
import { ISection, ISectionData } from '../../infrastructure/interface/section.interface';

interface IProps {
  slides: AxiosResponse<ISection<ISectionData<IKurlyBannerData[]>>>;
  isLoading: boolean;
}
function Carousel(props: IProps) {
  const { slides, isLoading } = props;

  return (
    <Swiper
      slidesPerView="auto"
      loop
      navigation
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay]}
      style={{ height: 370 }}
    >
      {isLoading && <SwiperSlide />}

      {slides &&
        slides.data.data.data.map(slide => (
          <SwiperSlide key={Number(slide.id)}>
            <img
              css={css`
                width: 0;
                height: 0;
                min-width: 100%;
                min-height: 100%;
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
              `}
              src={slide.image_url}
              alt={`메인 배너 ${slide.id}번 이미지`}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Carousel;
