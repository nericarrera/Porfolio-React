import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
       <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}