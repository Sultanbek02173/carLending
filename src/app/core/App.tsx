import { ScrollButton, SwiperVideo } from '../../entities';
import { Banner, Footer, Header, OurService, Tariffs, TransferService } from '../../widgets';
import '../styles/App.scss';

function App() {

  return (
    <div className='container'>
      <Header />
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
