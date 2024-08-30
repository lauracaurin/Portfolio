import { useState, useRef, useEffect } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic ocurrió fuera del menú y del ícono de la hamburguesa
      if (menuRef.current && !menuRef.current.contains(event.target) &&
        burgerRef.current && !burgerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Agrega el evento de clic
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el evento cuando el componente se desmonte
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Maneja el clic en el ícono de la hamburguesa
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  // Cierra el menú cuando se hace clic en un enlace
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <a href="#home" className="logo">LC</a>
      <div
        className="menu"
        onClick={toggleMenu}
        ref={burgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} ref={menuRef}>
        <li>
          <a href="#about" onClick={closeMenu}>Sobre mí</a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>Experiencia</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Proyectos</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
