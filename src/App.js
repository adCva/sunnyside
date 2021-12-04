import About from './Components/About';
import Discover from './Components/Discover';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Images from './Components/Images';
import Footer from './Components/Footer';
import './Reset.css';
import './Scss/style.css';




function App() {
  return (
    <div>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <Discover />
        <Projects />
        <Testimonials />
        <Images />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
