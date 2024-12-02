import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswers.css";

const QuestionsAnswersEnd = ({ landing, acne, bundle }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  const QAsDefault = [
    {
      question: "¿Es seguro invertir en Dubái?",
      answer:
        "¡Absolutamente! Dubái es reconocido por su estabilidad económica, jurídica y política. Además, el gobierno de Dubái tiene regulaciones estrictas para proteger a los inversores extranjeros, lo que garantiza procesos transparentes y seguros.",
      answer_id: "1",
    },
    {
      question: "¿Cómo funciona el proceso de compra?",
      answer:
        "El proceso es rápido y sencillo. Desde la selección del proyecto, puedes asegurar tu propiedad con un depósito inicial bajo. Si decides avanzar, nosotros te guiamos en cada paso: desde la documentación hasta la transferencia de la propiedad. Incluso aceptamos transferencias desde cuentas internacionales o en criptomonedas.",
      answer_id: "2",
    },
    {
      question: "¿Qué pasa si no vivo en Dubái y resido en LATAM?",
      answer:
        "No necesitas vivir en Dubái para invertir. Los proyectos están diseñados para facilitar las inversiones internacionales. Además, puedes administrar tu propiedad desde tu país de origen y recibir ingresos pasivos a través de alquileres a largo plazo o plataformas como Airbnb.",
      answer_id: "3",
    },
    {
      question: "¿Cuáles son los requisitos iniciales para invertir?",
      answer: `
        <ul>
          <li>Un depósito inicial (que puede ser tan bajo como el 10% del valor de la propiedad).                         </li>
          <li>Documentos de identificación válidos.</li>
          <li>No necesitas ser residente en Dubái ni tener una cuenta bancaria local para comenzar.</li>
        </ul>
      `,
      answer_id: "4",
    },
  ];

  const QAs = QAsDefault;
  return (
    <div
      id="q&a"
      className={`w-full flex flex-wrap justify-center items-center gap-y-12 py-10 px-4 lg:px-32`}
    >
      <div className="w-full flex flex-wrap justify-start items-center space-y-2 max-w-[800px] pt-4">
        {QAs.map((qa, index) => (
          <div key={index}>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center space-x-2 text-gray-200 py-2"
                onClick={() => {
                  answer !== qa.answer_id
                    ? handleAnswer(qa.answer_id)
                    : handleAnswer("");
                }}
              >
                <span className="w-3/4 flex-grow text-left poppins-semibold text-gray-800 text-md lg:text-2xl">
                  {qa.question}
                </span>
                <IoIosArrowDown
                  className="w-1/4 md:w-auto text-gray-700"
                  style={{
                    transform: `rotate(${
                      answer === qa.answer_id ? 180 : 0
                    }deg)`,
                    transition: "transform 0.5s",
                  }}
                />
              </button>
            </div>
            <div
              className={`w-full answer text-left ${
                answer === qa.answer_id ? "show" : ""
              }`}
            >
              <span
                className="w-full flex-grow text-left font-sans-300 text-gray-500 text-md lg:text-lg"
                dangerouslySetInnerHTML={{ __html: qa.answer }}
              ></span>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full">
                <hr className="border-[0.5px] border-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswersEnd;
