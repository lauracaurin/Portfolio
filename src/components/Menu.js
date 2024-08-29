import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (

    <nav>
      <Link to="/" className="title">Laura Caurín</Link>
      <ul>
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