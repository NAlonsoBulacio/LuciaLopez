import React from "react";
import "./FeaturedCard.css";

const TherapyCard = ({
  image,
  image_back,
  title,
  description,
  pdfLink,
}) => {
  return (
    <div className="card-container ">
      <div className="card">
       
        <div className="card-front">
          <img src={image} alt={title} className="card-image" />
          <div className="card-title flex justify-center"></div>
        </div>
        <div className="card-back relative ">
          <img src={image_back} alt={title} className="card-image-dark" />
          <div className="card-description flex justify-center flex-wrap">
          <h1 className="poppins-semibold text-xl ">{title}</h1>
            <p className="text-gray-200 poppins-light">{description}</p>
            {/* {pdfLink && (
              <a
                href={pdfLink}
                download
                className="absolute  bottom-10 mt-4 inline-block bg-white text-[#111827] font-poppins py-2 px-4 rounded-full text-sm border border-[#111827] hover:bg-[#111827] hover:text-white transition"
              >
                Descargar PDF
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;
