import './styles/App.scss';
import React from "react";
import Menu from './components/Menu';
import Technologies from './components/pages/Technologies';
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
      demo: 'https://lauracaurin.github.io/Portfolio/',
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
      demo: 'https://lauracaurin.github.io/Shopping/',
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

  const contactData = [
    {
      iconClass: "fa-regular fa-envelope",
      link: "mailto:laura.caurin@gmail.com",
      text: "laura.caurin@gmail.com",
    },
    {
      iconClass: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/laura-caurin/",
      text: "linkedin.com/in/laura-caurin/",
    },
    {
      iconClass: "fa-brands fa-github-alt",
      link: "https://github.com/lauracaurin",
      text: "github.com/lauracaurin",
    },
  ];
  const menuItems = [
    { text: "Inicio", id: "home" },
    { text: "Sobre mi", id: "about" },
    { text: "Tecnologías", id: "technologies" },
    { text: "Proyectos", id: "projects" },
    { text: "Contacto", id: "contact" }
  ];

  return (
    <>
      <Menu menuItems={menuItems} />
      <main>
        <Home />
        <About />
        <Technologies skillsData={skillsData} />
        <Projects projectsData={projectsData} />
        <Contact contactData={contactData} />
      </main>
    </>
  );
}
export default App;