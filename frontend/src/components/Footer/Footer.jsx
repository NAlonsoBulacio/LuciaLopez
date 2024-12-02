import React from "react";
import { logo_vertical } from "../../assets"; // Asegúrate de importar tu logo correctamente

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-8">
      <h1
        className={`text-gray-100 text-center text-xl poppins-semibold uppercase tracking-widest leading-5 mb-4`}
      >
        Lucia
        <br /> Lopez
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <nav className="space-y-2 text-md poppins-light text-center">
          <a href="/" className="block hover:text-gray-400">
            Dubai
          </a>
          <a href="#lucia" className="block hover:text-gray-400">
            Lucia Lopez
          </a>
          <a
            href="https://wa.me/+5492996302273"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-gray-400"
          >
            Contacto
          </a>
          <a href="#testimonnials" className="block hover:text-gray-400">
            Testimonios
          </a>
          <a href="#projects" className="block hover:text-gray-400">
            Ver Proyectos
          </a>
        </nav>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © 2024 Lucia Lopez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
