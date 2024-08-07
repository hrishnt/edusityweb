import './App.css';
import About from './components/About';
import Campus from './components/Campus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import Title from './components/Title';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subtitle="OUR PROGRAM" title="What We Offer"/>
    <Programs/>
    </div>
    <About subtitle="Nurturing Tomorrow's Leaders Today" title="ABOUT UNIVERSITY"/>
    <Title subtitle="Campus Photos" title="GALLERY"/>
    <Campus/>
    <Title subtitle="Get in Touch" title="CONTACT US"/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
