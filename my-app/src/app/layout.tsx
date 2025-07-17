import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`
        bg-gray-100 text-gray-900  // Clases base (light)
        dark:bg-gray-900 dark:text-white  // Clases dark
        transition-colors duration-200  // Transición global
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