import Adjectives from "./components/Adjectives";
import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import Home from "./sections/Home";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Adjectives />
      <Services />
      <AboutMe />
    </>
  );
}

export default App;
