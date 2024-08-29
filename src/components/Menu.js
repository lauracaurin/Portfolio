import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (

    <nav>
      <Link to="/" className="logo" onClick={closeMenu}>Laura Caurín</Link>
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
          <NavLink to="/about" onClick={closeMenu}>
            Sobre mi
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" onClick={closeMenu}>
            Experiencia
          </NavLink>
        </li> <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Proyectos
          </NavLink>
        </li> <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default Menu;