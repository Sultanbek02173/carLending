import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './footer.scss';
import { CiInstagram } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

export const Footer = () => {
  const header = useSelector((state: RootState) => state.setting.data);
  const filterHeader = header[0];
  return (
    <footer className="main__footer">
      <div className='main__footer__links row'>
        <div className='main__footer__social'>
          <h3>Transfer <sup>24</sup></h3>
          <p>{filterHeader?.description}</p>

          <div className='social row'>
            <a href={filterHeader?.telegram} target='_black'><FaTelegram /></a>
            <a href={filterHeader?.watapp} target='_black'><FaWhatsapp /></a>
            <a href={filterHeader?.insta} target='_black'><CiInstagram /></a>
          </div>
        </div>

        <div className='main__footer__link row'>
          <div>
            <h3>{filterHeader?.tariff}</h3>
            <p>{filterHeader?.about}</p>
            <p>{filterHeader?.services}</p>
            <p>{filterHeader?.tariff}</p>
            <p>{filterHeader?.review}</p>
          </div>
          <div>
            <h3>{filterHeader?.about}</h3>
            <p>{filterHeader?.support}</p>
            <p>{filterHeader?.drivers}</p>
          </div>
          <div>
            <h3>{filterHeader?.services}</h3>
            <p>{filterHeader?.support}</p>
            <p>{filterHeader?.business}</p>
            <p>{filterHeader?.event}</p>
          </div>
          <div>
            <h3>{filterHeader?.tariff}</h3>
            <p>Economy</p>
            <p>Comfort</p>
            <p>Premium</p>
            <p>Premium+</p>
          </div>
          <div>
            <h3>{filterHeader?.review}</h3>
            <p>{filterHeader?.video}</p>
            <p>{filterHeader?.text}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
