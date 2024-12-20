import React, { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentPage, setCurrentPage] = useState(currentPath);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // Close menu on nav click
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setNavbar(scrollY >= 80);
  };

  useEffect(() => {
    setCurrentPage(currentPath);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header
        className={`${
          navbar
            ? "header-bg lg:shadow-2xl h-[80px] lg:h-[80px]"
            : "header h-[80px] lg:h-[95px]"
        } text-gray-300 p-4 z-40 font-lato-300 fixed w-full top-0 transition-all duration-500  ${
          menuOpen ? "border-b-[1px] border-gray-100" : ""
        }`}
      >
        <div className="mx-auto flex items-center justify-between lg:hidden z-30  px-8">
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <h1
                className={`text-xl poppins-semibold uppercase tracking-widest leading-5`}
              >
                Lucia
                <br /> Lopez
              </h1>
            </a>
          </div>
          <HiMenuAlt2
            onClick={handleMenuToggle}
            className={` ${
              menuOpen ? "rotate-180" : ""
            } duration-700 text-gray-50 text-4xl inline-block md:hidden cursor-pointer `}
          />
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex poppins-light"
          style={{ maxWidth: "1150px", height: navbar ? "50px" : "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <h1
                className={`${
                  navbar ? "text-gray-900" : ""
                } text-xl poppins-semibold uppercase tracking-widest leading-5`}
              >
                Lucia
                <br /> Lopez
              </h1>
            </a>
          </div>
          <nav className="flex-grow flex justify-center space-x-10">
            <div className="text-md poppins-semibold space-x-10">
              <a
                href="/"
                // onClick={() => handleNavClick("/proyectos")}
                className={`${
                  currentPage === "/proyectos" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Dubai
              </a>
              <a
                href="#lucia"
                // onClick={() => handleNavClick("/sobre-nosotros")}
                className={`${
                  currentPage === "/sobre-nosotros" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Lucia Lopez
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick("/contacto")}
                className={`${currentPage === "/contacto" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                Contacto
              </a>

              <a
                href="#testimonnials"
                onClick={() => handleNavClick("/novedades")}
                className={`${
                  currentPage === "/novedades" ? "active" : "a-h"
                } ${navbar ? "text-gray-700" : ""}`}
              >
                Testimonios
              </a>
            </div>
          </nav>
          <div>
            <div
              className={`${
                navbar ? "text-gray-700 border-gray-700" : ""
              } flex items-center border-[1px] hover:border-[#111827] hover:text-[#111827] duration-300 px-3 rounded-full`}
            >
              <a
                href="#projects"
                className=" flex items-center gap-x-2 poppins-regular"
              >
                Ver Proyectos <FaBuilding />
              </a>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -340 }}
            animate={{ y: 0 }}
            exit={{ y: -340 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 text-left w-full h-80 px-10 mt-8 bg-[#111827]  border-gray-100 text-white poppins-semibold z-20 flex flex-col items-start justify-center space-y-4"
          >
            <a href="/" className="poppins-regular block hover:text-gray-400">
              Dubai
            </a>
            <a href="#lucia" className="poppins-regular block hover:text-gray-400">
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
            <a href="#testimonnials" className="poppins-regular block hover:text-gray-400">
              Testimonios
            </a>
            <a
                href="#projects"
                className=" flex items-center gap-x-2 poppins-regular"
              >
                Ver Proyectos <FaBuilding />
              </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
