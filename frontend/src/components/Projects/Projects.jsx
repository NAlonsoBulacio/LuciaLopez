import React from "react";
import TherapyCard from "../TherapyCard/TherapyCard";
import {
  dubai
} from "../../assets";
import { motion } from "framer-motion";
const Projects = () => {
  const properties = [
    {
      image: dubai,
      image_back: dubai,
      title: "Skyline Heights",
      description: `
        Exclusivos apartamentos con vistas al Burj Khalifa. Diseño moderno, amenities de lujo y ubicación privilegiada en el corazón de Dubái.
      `,
      // pdfLink: skyline_pdf,
    },
    {
      image: dubai,
      image_back: dubai,
      title: "Oasis Bay Residences",
      description: `
        Propiedades frente al agua en la marina de Dubái. Espacios diseñados con acabados premium y servicios de clase mundial.
      `,
      // pdfLink: oasis_pdf,

    },
    {
      image: dubai,
      image_back: dubai,
      title: "Palm Horizon Villas",
      description: `
        Viviendas exclusivas en Palm Jumeirah. Diseños contemporáneos, jardines privados y acceso directo a playas paradisíacas.
      `,
      // pdfLink: palm_pdf,
    },
    {
      image: dubai,
      image_back: dubai,
      title: "Downtown Elite Tower",
      description: `
        Apartamentos de lujo en el centro de Dubái. Cercanía a centros comerciales, restaurantes y atracciones turísticas clave.
      `,
      // pdfLink: downtown_pdf,
    },
    {
      image: dubai,
      image_back: dubai,
      title: "Desert Pearl Estates",
      description: `
        Casas modernas rodeadas de paisajes únicos en el desierto de Dubái. Un refugio privado lleno de lujo y tranquilidad.
      `,
      // pdfLink: desert_pdf,
    },
  ];

  return (
    <div id="therapys" className="py-20 bg-gray-100 px-2 lg:px-0">
      <div className="w-full flex flex-col items-center py-6">
        <h1 className="text-3xl lg:text-4xl font-clash-400 text-[#111827] text-center lg:text-left">
        Descubre las oportunidades disponibles hoy
        </h1>
        <hr className="w-32 border-t-[3px] border-[#111827] mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {properties.map((property, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="w-full md:w-1/2 lg:w-1/4 flex justify-center"
          >
            <TherapyCard
              image={property.image}
              image_back={property.image_back}
              title={property.title}
              description={property.description}
              pdfLink={property.pdfLink}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
         href="https://wa.me/+5492996302273" target="_blank" rel="noreferrer"
          className="w-auto tracking-widest poppins-regular bg-[#111827] hover:bg-[#111827] hover:scale-90 duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8 shadow-lg"
        >
          QUIERO ASESORARME
        </a>
      </div>
    </div>
  );
};

export default Projects;
