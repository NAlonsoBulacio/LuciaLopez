import React from "react";
import {
  extranjero,
  impuestos,
  propiedades,
  seguridad,
  inversion
} from "../../assets/index";
import { motion } from "framer-motion";
const Pilares = () => {
  return (
    <div className=" py-12">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <h2 className="text-3xl font-clash-700 text-gray-800 mb-8">Los 6 Pilares de la Salud</h2> */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Aquí agregar las imágenes de los pilares */}
          <div className="w-1/3 lg:w-1/6 flex flex-col items-center">
            <img
              src={inversion}
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Cero impuestos a la propiedad.
            </p>
          </div>
                   {/* Repetir para los demás pilares */}
                   <div className="w-1/3 lg:w-1/6 flex flex-col items-center">
            <img
              src={extranjero}
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Facilidad de compra para extranjeros.
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/6 flex flex-col items-center">
            <img
              src={propiedades}
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Alta valorización de las propiedades.
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/6 flex flex-col items-center">
            <img
              src={seguridad}
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Seguridad económica y estabilidad jurídica.
            </p>
          </div>
           {/* Repetir para los demás pilares */}
           <div className="w-1/3 lg:w-1/6 flex flex-col items-center">
            <img
              src={impuestos}
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Retornos de inversión de hasta el 12%.
            </p>
          </div>

          
        </div>
      </motion.div>
    </div>
  );
};

export default Pilares;
