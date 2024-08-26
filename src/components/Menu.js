
const Menu = ({ isOpen }) => {
  return (
    <nav className={`menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;