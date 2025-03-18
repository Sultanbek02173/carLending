import { FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './footer.scss';
import { CiInstagram } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="main__footer">
      <div className='main__footer__links row'>
        <div className='main__footer__social'>
          <h3>Transfer <sup>24</sup></h3>
          <p>{t('footer.description')}</p>

          <div className='social row'>
            <FaTelegram />
            <FaWhatsapp />
            <CiInstagram />
            <FaTiktok />
          </div>
        </div>

        <div className='main__footer__link row'>
          <div>
            <h3>{t('footer.Home')}</h3>
            <p>{t('header.about')}</p>
            <p>{t('header.Services')}</p>
            <p>{t('header.Tariffs')}</p>
            <p>{t('header.Reviews')}</p>
          </div>
          <div>
            <h3>{t('header.about')}</h3>
            <p>{t('footer.Support')}</p>
            <p>{t('footer.Drivers')}</p>
          </div>
          <div>
            <h3>{t('header.Services')}</h3>
            <p>{t('footer.Support')}</p>
            <p>{t('footer.Business')}</p>
            <p>{t('footer.Events')}</p>
          </div>
          <div>
            <h3>{t('header.Tariffs')}</h3>
            <p>Economy</p>
            <p>Comfort</p>
            <p>Premium</p>
            <p>Premium+</p>
          </div>
          <div>
            <h3>{t('header.Reviews')}</h3>
            <p>{t('footer.Video')}</p>
            <p>{t('footer.Text')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
