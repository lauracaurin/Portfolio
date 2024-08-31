import './styles/App.scss';
import React from "react";
import Menu from './components/Menu';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { cocktail, harry, cards, hangman, shop, number, power, friends } from './components/compiled'
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
      img: friends,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: harry,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: cards,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: hangman,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: number,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: power,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },
    {
      img: shop,
      title: 'Project 2',
      repo: 'https://github.com/lauracaurin/otro-repo',
      demo: 'https://github.com/lauracaurin/otro-demo',
    },

  ];

  const skillsData = [
    {
      title: "Desarrollo Frontend",
      skills: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "EJS",]
    },
    {
      title: "Desarrollo Backend",
      skills: ["Node JS", "Express JS", "SQL", "PostgreSQL", "Git", "Gulp", "APIs", "SQLite", "MongoDB"]
    },
    {
      title: "Metodologías y otras herramientas",
      skills: ["Scrum", "Agile", "Git", "Material UI", "GItHub", " VS Code", "Zeplin", "MySql", "Linter"]
    }
  ];


  return (


    <div className="App">
      <Menu />
      <main>
        <Home />
        <About />
        <Experience skillsData={skillsData} />
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
