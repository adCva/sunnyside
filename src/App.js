

import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Images from './Components/Images';
import Footer from './Components/Footer';
import './Reset.css';
import './Scss/style.css';
import CardOutside from './Components/CardOutside';




function App() {
  return (
    <div>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <CardOutside cardName="about" images={["./images/mobile/image-transform.jpg", "./images/desktop/image-transform.jpg"]} title="Transform your brand" description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." />
        <CardOutside cardName="projects" images={["./images/mobile/image-stand-out.jpg", "./images/desktop/image-stand-out.jpg"]} title="Stand out to the right audience" description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." />
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
