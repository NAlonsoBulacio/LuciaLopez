import React from "react";
import Pilares from "../Pilares/Pilares";
import { motion} from "framer-motion";
const WhyUs = () => {
  return (
    <div
      id="whyus"
      className="relative w-screen bg-white flex flex-wrap items-center justify-center py-20 overflow-hidden"
    >
      

      <motion.div 
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.3 }}
     viewport={{ once: true, amount: 0.3 }}
      className="max-w-4xl text-center p-6">
        <h2 className="text-3xl font-clash-700 text-gray-800 mb-4">
        ¿Por qué Dubái es el mercado inmobiliario del futuro?
        </h2>
       
      </motion.div>
      <Pilares />
    </div>
  );
};

export default WhyUs;
