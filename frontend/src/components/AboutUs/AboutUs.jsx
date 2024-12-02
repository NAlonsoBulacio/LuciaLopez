import React from "react";
import { lucia } from "../../assets";
import { motion } from "framer-motion";
const AboutUsLucia = () => {
  return (
    <div id="" className="bg-[#a1bcc9] py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Texto Descriptivo */}
        <motion.div
          className="lg:w-1/2 p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-clash-700 text-gray-800 mb-4">
          Conoce a Lucía López, tu experta en inversiones inmobiliarias en Dubái
          </h2>
          <p className="text-lg font-clash-400 text-gray-700 mb-8">
          Con más de 3 años en el mercado inmobiliario de Dubái, Lucía López ha ayudado a decenas de empresarios y profesionales de Latinoamérica a transformar su economía mediante inversiones inteligentes. Su enfoque se basa en transparencia, confianza y resultados comprobados.
          </p>
          <a
        href="https://wa.me/+5492996302273" target="_blank" rel="noreferrer"
            className="inline-block bg-black text-white font-poppins py-3 px-6 rounded-full text-sm hover:bg-gray-800"
          >
            QUIERO SABER MÁS
          </a>
        </motion.div>

        {/* Imagen Circular */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex justify-center lg:justify-end p-8"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src={lucia}
              alt="Dafer"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <img src={lucia} alt="Logo" className="w-3/4 opacity-75" />
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsLucia;
