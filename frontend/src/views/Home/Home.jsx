import React from "react";
import Header from "../../components/Header/Header";
import { dubai } from "../../assets";
import WhyUs from "../../components/WhyUs/WhyUs";
import AboutUsLucia from "../../components/AboutUs/AboutUs";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import QuestionsAnswersEnd from "../../components/QuestionAnswer/QuestionsAnswers";
const Home = () => {
  return (
    <div className="font-clash-400">
      <Header />
      <div className=" overflow-hidden">
        <div className="relative w-screen h-[90vh] lg:h-screen">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={dubai}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute -top-56 lg:-top-44 inset-0 flex flex-col items-center justify-center pt-[360px]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-4xl lg:text-6xl poppins-semibold text-center text-balance"
            >
              Cómo invertir en Dubái desde LATAM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-gray-200 text-md lg:text-xl poppins-light-italic text-center mt-3 px-2"
            >
              Descubre cómo maximizar tu rentabilidad en el mercado inmobiliario
              más rentable del mundo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <a
                href="https://wa.me/+5492996302273"
                target="_blank"
                rel="noreferrer"
                className="uppercase poppins-regular bg-black hover:bg-[#111827] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
              >
                Agenda tu Llamada 1 a 1
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <WhyUs />
      </div>
      <div className="overflow-hidden">
        <AboutUsLucia />
        <TestimonialCarousel />
        <Projects />
        <QuestionsAnswersEnd />
      </div>
      <div className="w-full flex flex-wrap justify-center px-4 lg:px-32 py-6 lg:py-20 bg-gray-100">
        <div className="w-full flex justify-center">
          <h1 className="text-5xl poppins-semibold text-center text-balance">
            Da el primer paso hacia una inversión segura y rentable
          </h1>
        </div>
        <a
          href="https://wa.me/+5492996302273"
          target="_blank"
          rel="noreferrer"
          className="w-auto tracking-widest poppins-regular bg-[#111827] hover:bg-[#111827] hover:scale-90 duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8 shadow-lg"
        >
          Agenda tu Llamada Ahora
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
