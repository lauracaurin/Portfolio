import '../styles/App.scss';
import React from "react";
import Header from './Header';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />

    </div>
  );
}
export default App;
