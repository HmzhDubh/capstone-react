import HomeHero from './HomeHero'
import Specials from './Specials'
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import Header from '../ReservationPage/Header';
import Footer from '../ReservationPage/Footer';

function HomePage() {
  return (
    <main>
        <Header />
        <HomeHero />
        <Specials />
        <Testimonials />
        <AboutUs />
        <Footer />
    </main>
  );
}
export default HomePage;