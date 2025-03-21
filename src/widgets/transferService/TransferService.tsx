import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../app/store/store';
import bgTitle from '../../shared/imgs/Maskgroup.png';
import bgMobTitle from '../../shared/imgs/transfer.png';
import './transferService.scss';
import { useEffect } from 'react';
import { getTransferData } from '../../app/store/reducer/transferReducer';
import i18n from '../../i18next/i18n';

export const TransferService = () => {
  const dispatch = useAppDispatch();

  const serviceData = useSelector((state: RootState) => state.service.data);

  const fetchTransferData = () => {
    dispatch(getTransferData());
  } 

  useEffect(() => {
    fetchTransferData();
    i18n.on('languageChanged', fetchTransferData);
    return () => {
        i18n.off('languageChanged', fetchTransferData);
    };
  }, [i18n]);

  const service = serviceData[0]; 
  
  
  return (
    <div id="about" className='about__section row'>
      <div className='about__section__img'>
        <img src={bgTitle} alt="bgTitle" />
        <img src={bgMobTitle} alt="" />
        <h1 className='about__section__img_title'>{service?.title}</h1>
      </div>
      <div className='about__section__texts'>
        <h1 className='about__section__texts_title'>{service?.title}</h1>
        <p className='about__section__texts_paragraph' dangerouslySetInnerHTML={{ __html: service?.description }}></p>
      </div>
    </div>
  )
}
