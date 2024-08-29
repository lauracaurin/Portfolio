import './styles/App.scss';
import React from "react";
import Menu from './components/Menu';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';

// Ej img: import logoMenu from '../images/ico-menu.svg';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={<About />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </div>
  );
}
export default App;
