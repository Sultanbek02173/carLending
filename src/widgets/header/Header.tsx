import './header.scss';
import russianFlag from '../../shared/imgs/Russia.png';
import usaFlag from '../../shared/imgs/usa.png';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Header = () => {

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleToggle = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <header className="main__header row">
      <div className="main__header__logo">
        Transfer <sup>24</sup>
      </div>
      
      <ul className="main__header__links row">
        <a href="#about"><li>About</li></a>
        <a href="#service"><li>Services</li></a>
        <a href="#tariff"><li>Tariffs</li></a>
        <a href="#review"><li>Reviews</li></a>
      </ul>

      <div onClick={handleToggle} className="main__header__language">
        <div className='row'>
          <img src={russianFlag} alt="" /> 
          <IoIosArrowDown size={18} />
        </div>

        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="dropdown"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={usaFlag} alt="USA Flag" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      

      <button className="main__header__contacts row">
        <p>Contacts</p> 
        <FaPhoneAlt size={15} />
      </button>
    </header>
  )
}
