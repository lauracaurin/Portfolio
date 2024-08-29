import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>
      <Link to="/" className="title">Laura Caurín</Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
      }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">
            Sobre mi
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience">
            Experiencia
          </NavLink>
        </li> <li>
          <NavLink to="/projects">
            Proyectos
          </NavLink>
        </li> <li>
          <NavLink to="/contact">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default Menu;