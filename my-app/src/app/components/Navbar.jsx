import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { href: "#formacion", label: "Formación" },
    { href: "#skills", label: "Skills" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#cv", label: "CV" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo (opcional) */}
          <Link href="#" className="text-2xl font-bold text-white">
            <span className="text-sky-300">{"</>"}</span> Dev. Neri Carrera
          </Link>

          {/* Menú para desktop */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-sky-500 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Menú móvil (hamburguesa) - Lo haremos después */}
          <button className="md:hidden text-white">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;