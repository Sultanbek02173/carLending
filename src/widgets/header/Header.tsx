import './header.scss';
import russianFlag from '../../shared/imgs/Russia.png';
import usaFlag from '../../shared/imgs/usa.png';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RootState, useAppDispatch } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { getSettingData } from '../../app/store/reducer/settingReducer';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const header = useSelector((state: RootState) => state.setting.data);
  const filterHeader = header[0];
  const handlerModal = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsAnimating(!isAnimating);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changLang = (lang: string) => {
    i18n.changeLanguage(lang);
  }  

  const fetchHeader = () => {
    dispatch(getSettingData());
  }

  useEffect(() => {
    fetchHeader()
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    i18n.on('languageChanged', fetchHeader);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
      i18n.off('languageChanged', fetchHeader);
    };
  }, [i18n]);

  return (
    <header className="main">
      <div className='main__header row'>
        <div className="main__header__logo">
          <h3>Transfer <sup>24</sup></h3>
        </div>

        <ul className="main__header__links row">
          <a href="#about"><li>{filterHeader?.about}</li></a>
          <a href="#service"><li>{filterHeader?.services}</li></a>
          <a href="#tariff"><li>{filterHeader?.tariff}</li></a>
          <a href="#review"><li>{filterHeader?.review}</li></a>
        </ul>
        

        <div onClick={handleToggle} className="main__header__language">
          <div className="row">
            <img src={currentLanguage === 'ru' ? russianFlag : usaFlag} alt="Russian flag" /> 
            <IoIosArrowDown
              size={18}
              style={isAnimating ? { rotate: '180deg' } : { rotate: '0deg' }}
            />
          </div>

          <AnimatePresence>
            {isAnimating && (
              <motion.div
                className="dropdown"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img onClick={() => {
                  changLang(currentLanguage === 'ru' ? 'en' : 'ru') 
                }} src={currentLanguage === 'en' ? russianFlag : usaFlag} alt="USA Flag" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button onClick={handlerModal} className="main__header__contacts row">
          <p>{filterHeader?.contact}</p>
          <FaPhoneAlt size={15} />
        </button>

        <div className="burger" onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </div>
      </div>

      <div className=''>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu__close" onClick={toggleMenu}>
                <HiX size={30} color="white" />
              </div>

              <ul className="mobile-menu__links">
                <a href="#about" onClick={toggleMenu}><li>{filterHeader?.about}</li></a>
                <a href="#service" onClick={toggleMenu}><li>{filterHeader?.services}</li></a>
                <a href="#tariff" onClick={toggleMenu}><li>{filterHeader?.tariff}</li></a>
                <a href="#review" onClick={toggleMenu}><li>{filterHeader?.review}</li></a>
              </ul>

              <button onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                handlerModal()
                }} className="mobile-menu__links_contact row">
                <p>{t('header.Contacts')}</p>
                <FaPhoneAlt size={15} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
