import { FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './footer.scss';
import { CiInstagram } from 'react-icons/ci';

export const Footer = () => {
  return (
    <footer className="main__footer">
      <div className='main__footer__links row'>
        <div className='main__footer__social'>
          <h3>Transfer <sup>24</sup></h3>
          <p>Your best partner for transportation services</p>

          <div className='social row'>
            <FaTelegram />
            <FaWhatsapp />
            <CiInstagram />
            <FaTiktok />
          </div>
        </div>

        <div className='main__footer__link row'>
          <div>
            <h3>Home</h3>
            <p>About Us</p>
            <p>Services</p>
            <p>Tariffs</p>
            <p>Reviews</p>
          </div>
          <div>
            <h3>About Us</h3>
            <p>Support</p>
            <p>Drivers</p>
          </div>
          <div>
            <h3>Services</h3>
            <p>Support</p>
            <p>Business Meetings</p>
            <p>Events</p>
          </div>
          <div>
            <h3>Tariffs</h3>
            <p>Economy</p>
            <p>Comfort</p>
            <p>Premium</p>
            <p>Premium+</p>
          </div>
          <div>
            <h3>Reviews</h3>
            <p>Video Reviews</p>
            <p>Text Reviews</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
