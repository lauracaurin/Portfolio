import './styles/App.scss';
import React from "react";
import Menu from './components/Menu';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { cocktail, harry, cards, hangman, shop, number, power, friends, portfolio } from './components/compiled'
import About from './components/pages/About';



function App() {


  const projectsData = [
    {
      img: cocktail,
      title: 'Cocltail Finder',
      repo: 'https://github.com/lauracaurin/Cocktail-finder',
      demo: 'https://lauracaurin.github.io/Cocktail-finder/',
    },
    {
      img: friends,
      title: 'Friends Quotes',
      repo: 'https://github.com/lauracaurin/Friends-quotes',
      demo: 'https://lauracaurin.github.io/Friends-quotes/',
    },

    {
      img: portfolio,
      title: 'Portfolio',
      repo: 'https://github.com/lauracaurin/Portfolio',
      demo: 'https://lauracaurin.github.io/Friends-quotes/',
    },

    {
      img: harry,
      title: 'Harry Potter',
      repo: 'https://github.com/lauracaurin/Harry-Potter',
      demo: 'https://lauracaurin.github.io/Harry-Potter/',
    },
    {
      img: cards,
      title: 'Profile Cards',
      repo: 'https://github.com/lauracaurin/Awesome-cards-team-proyect',
      demo: 'https://beta.adalab.es/project-promo-s-module-2-team-4/',
    },
    {
      img: hangman,
      title: 'Hangman Game',
      repo: 'https://github.com/lauracaurin/Hangman-game',
      demo: 'https://lauracaurin.github.io/Hangman-game/',
    },
    {
      img: number,
      title: 'Guess the number',
      repo: 'https://github.com/lauracaurin/Guess-the-number',
      demo: 'https://lauracaurin.github.io/Guess-the-number/',
    },
    {
      img: power,
      title: 'Power team',
      repo: 'https://github.com/lauracaurin/Power-team-project',
      demo: 'https://beta.adalab.es/project-promo-s-module-1-team-2/',
    },
    {
      img: shop,
      title: 'Shopping',
      repo: 'https://github.com/lauracaurin/Shopping',
      demo: 'https://github.com/lauracaurin/Shopping',
    },

  ];

  const skillsData = [
    {
      title: "Desarrollo Frontend y Backend",
      skills: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "EJS", "Node.js", "Express.js", "SQL", "NoSQL", "APIs"]
    },
    {
      title: "Herramientas y Metodologías",
      skills: ["Git", "GitHub", "Gulp", "VS Code", "Zeplin", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Scrum", "Agile", "Material UI", "Linter"]
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
