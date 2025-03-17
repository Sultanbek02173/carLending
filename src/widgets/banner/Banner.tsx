import { AnimatePresence, motion } from 'framer-motion';
import './banner.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { getBannerData } from '../../app/store/reducer/homeReducer';
import { feedbackState } from '../../types';
import axiosApi from '../../shared/api/axiosApi';

export const Banner = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const [selected, setSelected] = useState('Economy');
  
  const [feedback, setFeedback] = useState<feedbackState>({
    title: '',
    description: '',
    tariff: 'Economy',
    date: '',
    phone_number: ''
  });

  const bannerData = useSelector((state: RootState) => state.banner.data);
  
  const getFeedback = (feedback: feedbackState) => {
    axiosApi.post('/api/v1/base/feedback/', feedback).then(() => {setFeedback({
      title: '',
      description: '',
      tariff: 'Economy',
      date: '',
      phone_number: ''
    })}).catch((error) => console.log(error))
  }

  const handlerFeed = () => {
    const { title, description, tariff, date, phone_number } = feedback;
    if (title === '' || description === '' || tariff === '' || date === '' || phone_number === '') {
      return alert(t('error'));
    }
    getFeedback(feedback);
    return alert(t('succes'));
  }

  useEffect(() => {
    dispatch(getBannerData());
  }, [dispatch]);

  const data = bannerData[0];

  return (
    <div className='banner__section'>
      <div className='banner__section__description'>
        <h1>{data?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
      </div>

      <div className='banner__section__order row'>
        <div className='banner__section__order__item'>
          <p>{t('banner.PickUp')}</p>
          <input onChange={(e) => { setFeedback({ ...feedback, title: e.target.value }) }} type="text" placeholder='Manas Airpot' />
        </div>
        <div className='banner__section__order__item line'>
          <p>{t('banner.destination')}</p>
          <input onChange={(e) => { setFeedback({ ...feedback, description: e.target.value }) }} type="text" placeholder='Oligarkh Hotel' />
        </div>
        <div className='banner__section__order__item line'>
          <p>{t('banner.Tariff')}</p>
          <div className='select row'>
            <h3 onClick={() => setIsAnimating(!isAnimating)}>{selected}</h3>

            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="dropdown"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 onClick={() => {
                    setSelected('Economy');
                    setFeedback({ ...feedback, tariff: 'Economy' });
                    setIsAnimating(!isAnimating);
                  }}>Economy</h3>
                  <h3 onClick={() => {
                    setSelected('Comfort');
                    setFeedback({ ...feedback, tariff: 'Comfort' });
                    setIsAnimating(!isAnimating);
                  }}>Comfort</h3>
                  <h3 onClick={() => {
                    setSelected('Premium');
                    setFeedback({ ...feedback, tariff: 'Premium' });
                    setIsAnimating(!isAnimating);
                  }}>Premium</h3>
                  <h3 onClick={() => {
                    setSelected('Premium+');
                    setFeedback({ ...feedback, tariff: 'Premium+' });
                    setIsAnimating(!isAnimating);
                  }}>Premium+</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='banner__section__order__item line'>
          <p>{t('banner.date')}</p>
          <input onChange={(e) => { setFeedback({ ...feedback, date: e.target.value }) }} type="datetime-local" placeholder='11/03/2025' className='date' />
        </div>
        <div className='banner__section__order__item line'>
          <p>{t('banner.Phone')}</p>
          <input onChange={(e) => { setFeedback({ ...feedback, phone_number: e.target.value }) }} type="text" placeholder='0990-090-086' />
        </div>
        <div className='banner__section__order__item line'>
          <button onClick={handlerFeed} className='order_btn'>{t('banner.Order')}</button>
        </div>
      </div>
    </div>
  );
}
