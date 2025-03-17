import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './modalOrder.scss';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FaInstagram, FaPhoneAlt, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { contactState } from '../../types';
import axiosApi from '../../shared/api/axiosApi';
import { useTranslation } from 'react-i18next';

interface ModalOrderProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalOrder: FC<ModalOrderProps> = ({isOpen, setIsOpen}) => {
  const { t } = useTranslation();
  const [contact, setContact] = useState<contactState>({
    name: '',
    phone_number: '',
    email: '',
  });

  const getContact = (contact: contactState) => {
    axiosApi.post('/api/v1/base/contact/', contact).
    then(() => {setContact({
        name: '',
        phone_number: '',
        email: '',
    })})
  }

  const handlerContact = () => {
    const {name, phone_number, email} = contact;
    if (name === '' || phone_number === '' || email === ''){
      return alert(t('error'));
    }

    getContact(contact);
    return alert(t('succes'));
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal__container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="modal__container__item row"
      >
        <div className='modal__container__item__form'>
          <h2>{t('modal.title')}</h2>
          <p>{t('modal.description')}</p>
          <div className='input'>
            <input value={contact.name} type="text" placeholder={t('modal.nameInp')} onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} />
          </div>
          <div className='flex__input row'>
            <div className='input__container input'>
              <input value={contact.phone_number} type="text" placeholder={t('modal.phoneInp')} onChange={(e) => { setContact({ ...contact, phone_number: e.target.value }) }} />
            </div>
            <div className='input__container input'>
              <input value={contact.email} type="email" placeholder={t('modal.Email')} onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} />
            </div>
          </div>
          <button onClick={handlerContact} className='modal__container__item__form_button'>{t('header.Send')}</button>
        </div>

        <div className='modal__container__item__social'>
          <h2>{t('modal.Info')}</h2>
          <div className='modal__container__item__social__item row'>
            <MdLocationPin />
            <p>{t('modal.loc')}</p>
          </div>
          <div className='modal__container__item__social__item row'>
            <FaPhoneAlt />
            <p>+996 505 00 12 45</p>
          </div>
          <div className='modal__container__item__social__item row'>
            <MdEmail />
            <p>transfer24@gmail.com</p>
          </div>
          <div className='modal__container__item__social__item row'>
            <GoClockFill />
            <p>09:00 - 20:00</p>
          </div>
          <div className='modal__container__item__social__links row'>
            <FaTelegram />
            <FaWhatsapp />
            <FaInstagram />
            <FaPhoneAlt />
          </div>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='modal__container__item__close'>
          <IoMdClose />
        </div>
      </motion.div>
    </div>
  )
}

