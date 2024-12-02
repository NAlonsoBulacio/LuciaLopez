import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonio, testimonio2 } from "../../assets";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "María G., México",
      testimonial:
        "Gracias a Lucía, logré duplicar mi inversión en 3 años. El proceso fue claro y transparente.",
      position: "Inversora",
      image: testimonio, // Reemplaza con la URL de la imagen del cliente
    },
    {
      name: "Carlos P., Colombia",
      testimonial:
        "Invertir en Dubái fue la mejor decisión financiera que he tomado. Lucía me guió en cada paso del camino.",
      position: "Emprendedor",
      image: testimonio2, // Reemplaza con la URL de la imagen del cliente
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar un testimonio a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="py-12 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl font-bold text-[#00314b] text-center mb-8">
        Historias de éxito: Lo que dicen nuestros clientes.
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6">
            <div className="h-full bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
              <div className="mb-4 text-green-500 text-4xl font-bold">“</div>
              <p className="text-gray-600 text-lg italic mb-6">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-[#00314b] font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
