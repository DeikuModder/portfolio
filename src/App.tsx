import Footer from "./components/Footer";
import Header from "./components/Header";
import Squares from "./components/Squares";
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
      <Services />
      <WorkExperience />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor={"#e5982581"}
      />
    </>
  );
}

export default App;
