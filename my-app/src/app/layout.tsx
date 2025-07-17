import { ReactNode } from "react";
import  Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Providers>
        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
