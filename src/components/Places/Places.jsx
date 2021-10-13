import React from "react";
import CelphoneFood from "../../assets/CelphoneFood.png";
import "./Places.css";
import "../../fonts/Poppins/Poppins-Bold.ttf";

const Places = () => {
  return (
    
    <div className="container_places">
      <img
        src={CelphoneFood}
        alt="Celular con comida"
      />
      <h2 className="texto_encima_places">Pollerías / Restaurantes<br/> Chifas / Pízzerías / Lounge</h2>
    </div>
  );
};

export default Places;
