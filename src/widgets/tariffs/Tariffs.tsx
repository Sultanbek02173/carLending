import { useEffect, useState } from 'react';
import { CarCarts } from '../../features';
import './tariffs.scss';
import { RootState, useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { getTariffsData } from '../../app/store/reducer/tariffsReducer';
import i18n from '../../i18next/i18n';


export const Tariffs = () => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<string>('Economy');

  const tariffs = useSelector((state: RootState) => state.tariffs.data);
  const header = useSelector((state: RootState) => state.setting.data);
  const filterHeader = header[0];

  const fetchTariffsData = () => {
    dispatch(getTariffsData());
  } 

  useEffect(() => {
    fetchTariffsData();
    i18n.on('languageChanged', fetchTariffsData);
    return () => {
        i18n.off('languageChanged', fetchTariffsData);
    };
  }, [i18n]);

  return (
    <div id="tariff" className="tariff__section">
      <div className='tariff__section__navigate row'>
        <h2 className="title">{filterHeader?.tariff}</h2>

        <div className="tariff__section__navigate__catalog row">
          <p onClick={() => setActive('Economy')} className={active === 'Economy' ? 'active' : ''}>Economy</p>
          <p onClick={() => setActive('Comfort')} className={active === 'Comfort' ? 'active' : ''}>Comfort</p>
          <p onClick={() => setActive('Premium')} className={active === 'Premium' ? 'active' : ''}>Premium</p>
          <p onClick={() => setActive('Premium+')} className={active === 'Premium+' ? 'active' : ''}>Premium+</p>
        </div>
      </div>
      

      <div className='tariff__section__cars row'> 
        {
          tariffs &&
          tariffs.map((car, index) => {
            if (car.type === active) {
              return (
                <CarCarts key={index} description={car.title} img={car.image} />
              );
            }
            return null;
          })
        }
      </div>
    </div>
  )
}
