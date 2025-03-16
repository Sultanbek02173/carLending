import { useState } from 'react';
import { CarCarts } from '../../features';
import car from '../../shared/imgs/car.png';
import './tariffs.scss';
import { useTranslation } from 'react-i18next';

interface carsProps {
  id: number;
  img: string;
  description: string;
}

export const Tariffs = () => {
  const {t} = useTranslation();
  const [active, setActive] = useState<string>('Economy');
  const cars: carsProps[] = [
    {
      id: 0,
      img: car,
      description: 'Lexus 570, 2020+'
    },
    {
      id: 1,
      img: car,
      description: 'Toyota LC 200, 2020+'
    },
    {
      id: 2,
      img: car,
      description: 'Toyota LC 200, 2020+'
    },
    {
      id: 3,
      img: car,
      description: 'BMW 7 Series, 2020+'
    },
    {
      id: 4,
      img: car,
      description: 'BMW X7, 2020+'
    },
    {
      id: 5,
      img: car,
      description: 'Mercedes GLE, 2020+'
    },
  ]
  return (
    <div id="tariff" className="tariff__section">
      <div className='tariff__section__navigate row'>
        <h2 className="title">{t('header.Tariffs2')}</h2>

        <div className="tariff__section__navigate__catalog row">
          <p onClick={() => setActive('Economy')} className={active === 'Economy' ? 'active' : ''}>Economy</p>
          <p onClick={() => setActive('Comfort')} className={active === 'Comfort' ? 'active' : ''}>Comfort</p>
          <p onClick={() => setActive('Premium')} className={active === 'Premium' ? 'active' : ''}>Premium</p>
          <p onClick={() => setActive('Premium+')} className={active === 'Premium+' ? 'active' : ''}>Premium+</p>
        </div>
      </div>
      

      <div className='tariff__section__cars row'> 
        {
          cars && 
          cars.map((car) => (
            <CarCarts key={car.id} id={car.id} description={car.description} img={car.img} />
          ))
        }
      </div>
    </div>
  )
}
