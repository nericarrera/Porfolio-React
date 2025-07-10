import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          TuLogo
        </Link>

        {/* Menú para móviles (hamburguesa) */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Menú principal */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-links">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/proyectos" className="nav-links">
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contacto" className="nav-links">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;