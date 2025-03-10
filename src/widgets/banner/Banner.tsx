import { AnimatePresence, motion } from 'framer-motion';
import './banner.scss';
import { useState } from 'react';

export const Banner = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selected, setSelected] = useState('Economy');

  return (
    <div className='banner__section'>

      <div className='banner__section__description'>
        <h1>
          Exclusive Transfers, 
          Premier Service
        </h1>
        <p>
          Transfer24 is your trusted partner for transfers across Kyrgyzstan. We provide luxurious rides with professional drivers, ensuring utmost comfort, safety, and punctuality. Trust us to take care of every detail so you can enjoy a journey marked by excellence.
        </p>
      </div>

      <div className='banner__section__order row'>
        <div className='banner__section__order__item'>
          <p>Pick Up</p>
          <input type="text" placeholder='Manas Airpot' />
        </div>
        <div className='banner__section__order__item line'>
          <p>Enter destination</p>
          <input type="text" placeholder='Oligarkh Hotel' />

        </div>
        <div className='banner__section__order__item line'>
          <p>Tariff</p>
          <div className='select row'>
            <h3 onClick={() => setIsAnimating(!isAnimating)}>{selected}</h3>

            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="dropdown"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 onClick={() => {
                    setSelected('Economy')
                    setIsAnimating(!isAnimating)
                  }}>Economy</h3>
                  <h3 onClick={() => {
                    setSelected('Comfort')
                    setIsAnimating(!isAnimating)
                  }}>Comfort</h3>
                  <h3 onClick={() => {
                    setSelected('Premium')
                    setIsAnimating(!isAnimating)
                  }}>Premium</h3>
                  <h3 onClick={() => {
                    setSelected('Premium+')
                    setIsAnimating(!isAnimating)
                  }}>Premium+</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
        </div>
        <div className='banner__section__order__item line '>
          <p>Pick Up</p>
          <input type="datetime-local" placeholder='11/03/2025' className='date' />
        </div>
        <div className='banner__section__order__item line'>
          <p>Pick Up</p>
          <input type="text" placeholder='0990-090-086' />
        </div>
        <div className='banner__section__order__item line'>
          <button className='order_btn'>Order</button>
        </div>
      </div>
    </div>
  )
}
