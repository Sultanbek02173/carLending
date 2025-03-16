import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import {motion} from 'framer-motion';
import './modalOrder.scss';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { FaInstagram, FaPhoneAlt, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

interface ModalOrderProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalOrder: FC<ModalOrderProps> = ({isOpen, setIsOpen}) => {

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
    <div className="modal__container container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="modal__container__item row"
      >
        <div className='modal__container__item__form'>
          <h2>
            We’ll Help You Resolve All Your Questions
          </h2>
          <p>
            If you want to learn more about our services or aren’t sure which rate or route is best for you, just leave a request and we’ll give you a call back.
          </p>
          <div className='input'>
            <input type="text" placeholder='Name' />
          </div>
          <div className='flex__input row'>
            <div className='input__container input'>
              <input type="text" placeholder='Phone namber' />
            </div>
            <div className='input__container input'>
              <input type="email" placeholder='Email' />
            </div>
          </div>
          <button className='modal__container__item__form_button'>Send</button>
        </div>

        <div className='modal__container__item__social'>
          <h2>Info</h2>
          <div className='modal__container__item__social__item row'>
            <MdLocationPin />
            <p>Bishkek, Toktogulova st. 23/a</p>
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

