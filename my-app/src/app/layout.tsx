import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`
        bg-gray-100 text-gray-900  // Modo claro
        dark:bg-gray-900 dark:text-white  // Modo oscuro
        transition-colors duration-300
        min-h-screen
      `}>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-7xl px-4">  {/* Contenedor principal */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}