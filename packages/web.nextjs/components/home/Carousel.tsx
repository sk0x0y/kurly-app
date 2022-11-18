import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper';
import { useState } from 'react';

interface ISlide {
  id: number;
  src: string;
}
function Carousel() {
  const [slides] = useState<ISlide[]>([
    { id: 1, src: '/slides/home/fb48459f-7eec-43f4-8e49-70000abfb260.jpg' },
    { id: 2, src: '/slides/home/f2578f82-310b-4d00-b58b-cbfe6d989c18.jpg' },
    { id: 3, src: '/slides/home/6bf2cc46-33b5-4857-8424-a32a403e17e2.jpg' },
    { id: 4, src: '/slides/home/2ab7d341-ee9e-4e28-bf4d-01bf593756b6.jpg' },
    { id: 5, src: '/slides/home/83a9e3a9-0b65-46bc-b235-7bcbabedd08b.jpg' },
    { id: 6, src: '/slides/home/c0fdd0cc-775e-4e22-ae38-dc00e2d57389.jpg' },
    { id: 7, src: '/slides/home/3593cafd-f12c-456f-b9f6-b17d920d49d5.jpg' },
    { id: 8, src: '/slides/home/3d686425-6f3e-4ed3-a6fa-d71b010a9ecc.jpg' },
    { id: 9, src: '/slides/home/a886ba38-9076-443d-ba2a-3b3db0dcb3fa.jpg' },
    { id: 10, src: '/slides/home/f544d4dd-8231-427d-ae5a-a7b1d2b06454.jpg' },
    { id: 11, src: '/slides/home/a8d92637-d2a1-4826-ae7e-1bce1d53f480.jpg' },
    { id: 12, src: '/slides/home/1fb72bce-523e-4928-8bd9-6842e5035268.jpg' },
    { id: 13, src: '/slides/home/96f6cdf9-2dfe-4281-a741-35bdc6e636cc.jpg' },
    { id: 14, src: '/slides/home/38a8d940-9c4a-479a-bf7d-ccc567d0f866.jpg' },
    { id: 15, src: '/slides/home/aae0e009-d906-49d4-aec6-3d828b0a7cb7.jpg' },
    { id: 16, src: '/slides/home/c6297ba3-f8da-495c-b01d-67d6dfe919b8.jpg' },
    { id: 17, src: '/slides/home/39c28de9-2a7f-43bc-9e41-648befae3c95.jpg' },
    { id: 18, src: '/slides/home/cb7bd55a-61b3-4f55-bd4e-87ef4160da7b.jpg' },
    { id: 19, src: '/slides/home/f3dc61b3-068e-433e-a02d-c508a21cd578.jpg' },
    { id: 20, src: '/slides/home/f69e8e21-2119-429f-8721-72ecf4003120.jpg' },
  ]);

  return (
    <Swiper
      slidesPerView="auto"
      loop
      navigation
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperClass) => console.log(swiper)}
      style={{ height: 370 }}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <Image src={slide.src} layout="fill" priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
