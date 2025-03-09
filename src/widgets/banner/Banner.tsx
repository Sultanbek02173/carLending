import './banner.scss';

export const Banner = () => {
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
          <select name="tariff" id="0">
            <option value="0">Economy</option>
            <option value="1">Comfort</option>
            <option value="2">Premium</option>
            <option value="3">Premium+</option>
          </select>

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
