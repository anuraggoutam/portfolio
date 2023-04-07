import Conatct from './Pages/Contact/Conatct';
import Experience from './Pages/Experience/Experience';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Navbar from './Pages/Navbar/Navbar';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Conatct />
      <Footer />
    </>
  );
}

export default App;
