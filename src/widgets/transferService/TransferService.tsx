import bgTitle from '../../shared/imgs/Maskgroup.png';
import bgMobTitle from '../../shared/imgs/transfer.png';
import './transferService.scss';

export const TransferService = () => {
  return (
    <div id="about" className='about__section row'>
      <div className='about__section__img'>
        <img src={bgTitle} alt="bgTitle" />
        <img src={bgMobTitle} alt="" />
        <h1 className='about__section__img_title'>Your Trusted Partner in Transfer Services</h1>
      </div>
      <div className='about__section__texts'>
        <h1 className='about__section__texts_title'>Your Trusted Partner in Transfer Services</h1>
        <p className='about__section__texts_paragraph'>
          At Transfer24, our dedicated team of highly qualified professionals is committed to delivering safe, comfortable, and memorable journeys across Kyrgyzstan. We take immense pride in our extensive experience and relentless pursuit of excellence, which enables us to offer premium transfer services that meet the highest quality standards. Our fleet comprises modern, meticulously maintained vehicles equipped with the latest technology, ensuring maximum comfort and safety for every passenger.
        </p>
        <p className='about__section__texts_paragraph'>
          Our commitment goes beyond just providing a transfer service; we strive to create an atmosphere of comfort and reliability that makes every client feel valued and special. We recognize that every journey is unique, so we pay close attention to the individual needs of each client—whether it’s for business, sightseeing, or personal travel. With Transfer24, you are choosing not only a high-quality transfer experience but also a partner who cares about every detail of your journey and is dedicated to making your travel experience truly unforgettable.
        </p>
      </div>
    </div>
  )
}
