import 'swiper/css';
import 'swiper/css/pagination';
import './swiperVideo.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { RootState, useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSwiperData } from '../../app/store/reducer/swiperReducer';

export const SwiperVideo = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const swiper = useSelector((state: RootState) => state.swiper.data);

  useEffect(() => {
    dispatch(getSwiperData())
  }, [dispatch])

  console.log(swiper);
  
  return (
    <div id="review" className="review__section">
      <h2 className="title">{t('header.costumers')}</h2>

      <div className="review__section__swiper ">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true, el: '.custom-pagination' }} 
          modules={[Pagination]} 
          className="mySwiper"
        >
          {
            swiper &&
            swiper.map((swiper, inx) => (
              <SwiperSlide key={inx}>
                <div className="swiper__item row">
                  <div className="swiper__item__video">
                    <iframe src={swiper.links}></iframe>
                  </div>
                  <div className="swiper__item__description">
                    <h3>{swiper.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: swiper.description }}></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="custom-pagination"></div> 
      </div>
    </div>
  )
}
