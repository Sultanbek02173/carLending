import { ServiceCart } from '../../features';
import './ourService.scss';
import arrow from '../../shared/imgs/Vector.png';
import { Carts } from '../../types';
import { useTranslation } from 'react-i18next';



export const OurService = () => {
  const {t} = useTranslation();

  const carts: Carts[] = [
    {
      id: 1,
      title: 'Airport Transfers',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 2,
      title: 'City Tours',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 3,
      title: 'Event Transportation Services',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 4,
      title: 'Group Transfers',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 5,
      title: 'Private Transfers',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 6,
      title: 'Corporate Transportation',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
    {
      id: 7,
      title: 'Corporate Transportation',
      description: 'We offer reliable and convenient transfers to and from the airport, ensuring that your journey begins or ends without any hassle.'
    },
  ]
  return (
    <div id="service" className="service__container">
      <h2 className='title'>{t('header.services')}</h2>

      <div className='service__container__carts row'>
        {
          carts && 
          carts.map((cart) => (
            <ServiceCart key={cart.id} id={cart.id} title={cart.title} description={cart.description} />
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
