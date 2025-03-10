import { useEffect, useState } from 'react';
import './scrollButton.scss';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <IoIosArrowUp />
    </div>
  );
}