import { ServiceCart } from '../../features';
import './ourService.scss';
import arrow from '../../shared/imgs/Vector.png';
import { useTranslation } from 'react-i18next';
import { RootState, useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOurServiceData } from '../../app/store/reducer/ourServiceReducer';
import i18n from '../../i18next/i18n';


export const OurService = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const ourService = useSelector((state: RootState) => state.ourService.data);

  const fetchOurServiceData = () => {
    dispatch(getOurServiceData());
  } 

  useEffect(() => {
    fetchOurServiceData();
    i18n.on('languageChanged', fetchOurServiceData);
    return () => {
        i18n.off('languageChanged', fetchOurServiceData);
    };
  }, [i18n]);

  return (
    <div id="service" className="service__container">
      <h2 className='title'>{t('header.services')}</h2>

      <div className='service__container__carts row'>
        {
          ourService && 
          ourService.map((cart, index) => (
            <ServiceCart key={cart.id} id={index + 1} title={cart.title} description={cart.description} />
          ))
        }

        <div className='service__container__link'>
          <h2>We Help You Select the Service and Tariff</h2>
          <img src={arrow} alt="" />
        </div>
      </div>
      
    </div>
  )
}
