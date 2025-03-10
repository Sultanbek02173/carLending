import 'swiper/css';
import 'swiper/css/pagination';
import './swiperVideo.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { videoSwiperProps } from '../../types';

export const SwiperVideo = () => {

  const videoSwiper: videoSwiperProps[] = [
    {
      id: 0,
      link: 'https://www.youtube.com/embed/qSpwpMjuduc?si=4hLJnan_xX9iNfHp',
      title: 'Chen Xinwei',
      description: "I, Chen Xinwei, am extremely satisfied with Transfer24's service. Every journey was organized to perfection: the vehicles were always impeccably clean and comfortable, and the drivers were professional and punctual. Thanks to their attention to detail, my business trips were completely stress-free, allowing me to focus fully on important meetings. I highly recommend Transfer24 to anyone who values quality, reliability, and exceptional service.",
    },
    {
      id: 1,
      link: 'https://www.youtube.com/embed/qSpwpMjuduc?si=4hLJnan_xX9iNfHp',
      title: 'Chen Xinwei',
      description: "I, Chen Xinwei, am extremely satisfied with Transfer24's service. Every journey was organized to perfection: the vehicles were always impeccably clean and comfortable, and the drivers were professional and punctual. Thanks to their attention to detail, my business trips were completely stress-free, allowing me to focus fully on important meetings. I highly recommend Transfer24 to anyone who values quality, reliability, and exceptional service.",
    },
    {
      id: 2,
      link: 'https://www.youtube.com/embed/qSpwpMjuduc?si=4hLJnan_xX9iNfHp',
      title: 'Chen Xinwei',
      description: "I, Chen Xinwei, am extremely satisfied with Transfer24's service. Every journey was organized to perfection: the vehicles were always impeccably clean and comfortable, and the drivers were professional and punctual. Thanks to their attention to detail, my business trips were completely stress-free, allowing me to focus fully on important meetings. I highly recommend Transfer24 to anyone who values quality, reliability, and exceptional service.",
    },
    {
      id: 3,
      link: 'https://www.youtube.com/embed/qSpwpMjuduc?si=4hLJnan_xX9iNfHp',
      title: 'Chen Xinwei',
      description: "I, Chen Xinwei, am extremely satisfied with Transfer24's service. Every journey was organized to perfection: the vehicles were always impeccably clean and comfortable, and the drivers were professional and punctual. Thanks to their attention to detail, my business trips were completely stress-free, allowing me to focus fully on important meetings. I highly recommend Transfer24 to anyone who values quality, reliability, and exceptional service.",
    },
  ]
  return (
    <div id="review" className="review__section">
      <h2 className="title">What our customers say</h2>

      <div className="review__section__swiper">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true, el: '.custom-pagination' }} 
          modules={[Pagination]} 
          className="mySwiper"
        >
          {videoSwiper.map((swip, inx) => (
            <SwiperSlide key={inx}>
              <div className="swiper__item row">
                <div className="swiper__item__video">
                  <iframe src={swip.link}></iframe>
                </div>
                <div className="swiper__item__description">
                  <h3>{swip.title}</h3>
                  <p>{swip.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div> {/* Здесь будет рендериться кастомная пагинация */}
      </div>
    </div>
  )
}
