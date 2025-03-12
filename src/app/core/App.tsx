import { useState } from 'react';
import { ModalOrder, ScrollButton, SwiperVideo } from '../../entities';
import { Banner, Footer, Header, OurService, Tariffs, TransferService } from '../../widgets';
import '../styles/App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container'>
      <ModalOrder isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <TransferService />
      <OurService />
      <Tariffs />
      <SwiperVideo />
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
