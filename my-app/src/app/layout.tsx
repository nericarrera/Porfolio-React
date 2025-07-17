import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
