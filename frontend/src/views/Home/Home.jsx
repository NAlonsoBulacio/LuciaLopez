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
        <div className="relative w-screen h-screen">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={dubai}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-[360px]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-6xl poppins-semibold text-center"
            >
              Cómo invertir en Dubái desde LATAM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-gray-200 text-xl poppins-light-italic text-center mt-3"
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
                className="uppercase poppins-regular bg-black hover:bg-[#00314b] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
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

      <Footer />
    </div>
  );
};

export default Home;
