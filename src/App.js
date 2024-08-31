import './styles/App.scss';
import React from "react";
import Menu from './components/Menu';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { cocktail } from './components/compiled'
import About from './components/pages/About';



function App() {


  const projectsData = [
    {
      img: cocktail,
      title: 'Friends Quotes',
      repo: 'https://github.com/lauracaurin/Cocktail-finder',
      demo: 'https://github.com/lauracaurin/Cocktail-finder',
    },
    {
      img: 'ruta/a/la/imagen2.jpg',
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    // Añade más proyectos aquí
  ];
  return (


    <div className="App">
      <Menu />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects projectsData={projectsData} />
        <Contact />
      </main>
    </div>



  );
}
export default App;

/* 
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          
        </Routes>
      </main>


    </div>

    */
