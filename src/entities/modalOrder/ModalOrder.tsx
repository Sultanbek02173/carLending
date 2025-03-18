import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './modalOrder.scss';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { contactState } from '../../types';
import axiosApi from '../../shared/api/axiosApi';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../app/store/store';
import { useSelector } from 'react-redux';
import { CiInstagram } from 'react-icons/ci';

interface ModalOrderProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalOrder: FC<ModalOrderProps> = ({isOpen, setIsOpen}) => {
  const { t } = useTranslation();
  const header = useSelector((state: RootState) => state.setting.data);
  const filterHeader = header[0];
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
    return alert(t('success'));
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setContact((prev) => ({...prev, [name]: value}))
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
              <input name='phone_number' value={contact.phone_number} type="text" placeholder={t('modal.phoneInp')} onChange={onChange} />
            </div>
            <div className='input__container input'>
              <input value={contact.email} type="email" placeholder={t('modal.Email')} onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} />
            </div>
          </div>
          <button onClick={handlerContact} className='modal__container__item__form_button'>{t('header.Send')}</button>
        </div>

        <div className='modal__container__item__social'>
          <h2>{filterHeader.info}</h2>
          <div className='modal__container__item__social__item row'>
            <MdLocationPin />
            <p>{filterHeader.location}</p>
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
            <a href={filterHeader?.telegram} target='_black'><FaTelegram /></a>
            <a href={filterHeader?.watapp} target='_black'><FaWhatsapp /></a>
            <a href={filterHeader?.insta} target='_black'><CiInstagram /></a>
            <a href={`tel:${filterHeader?.phone_number_2}`} target='_black'><FaPhoneAlt /></a>
          </div>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='modal__container__item__close'>
          <IoMdClose />
        </div>
      </motion.div>
    </div>
  )
}

