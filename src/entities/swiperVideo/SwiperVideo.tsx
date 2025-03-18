import 'swiper/css';
import 'swiper/css/pagination';
import './swiperVideo.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { RootState, useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSwiperData } from '../../app/store/reducer/swiperReducer';
import i18n from '../../i18next/i18n';
import ReactPlayer from 'react-player'

export const SwiperVideo = () => {
  const dispatch = useAppDispatch();

  const swiper = useSelector((state: RootState) => state.swiper.data);
  const header = useSelector((state: RootState) => state.setting.data);
  const filterHeader = header[0];

  const fetchSwiperDat = () => {
    dispatch(getSwiperData());
  } 

  useEffect(() => {
    fetchSwiperDat();
    i18n.on('languageChanged', fetchSwiperDat);
    return () => {
        i18n.off('languageChanged', fetchSwiperDat);
    };
  }, [i18n]);
  
  return (
    <div id="review" className="review__section">
      <h2 className="title">{filterHeader?.sviper}</h2>

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
                    <ReactPlayer url={swiper.links}  />
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
