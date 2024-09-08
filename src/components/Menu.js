import { useState, useRef, useEffect } from "react";

const Menu = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      burgerRef.current && !burgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => { setMenuOpen(!menuOpen); }

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <li key={index}>
        <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
          {item.text}
        </a>
      </li>
    ));
  };

  return (
    <nav>
      <a href="#home" className="logo">LC</a>
      <div
        className="menu"
        onClick={toggleMenu}
        ref={burgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} ref={menuRef}>
        {renderMenuItems()}
      </ul>
    </nav>
  );
};

export default Menu;