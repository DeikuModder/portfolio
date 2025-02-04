import Adjectives from "./components/Adjectives";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Adjectives />
      <Services />
      <WorkExperience />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
