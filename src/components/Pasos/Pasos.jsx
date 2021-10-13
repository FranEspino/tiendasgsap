import React from "react";
import StepOnda from "../../assets/StepOnda.png";
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import "./Pasos.css";
import "../../fonts/Poppins/Poppins-Bold.ttf";

const Pasos = () => {
  return (
    <div>
      <div className="container_pasos">
        <div className="title_pasos">
          <h1>Tu pedido en <br />  3 simples pasos</h1>
          <img src={StepOnda} alt="StepOnda" className="StepOnda" />
        </div>

        <div className="container_paso1">
          <img src="https://res.cloudinary.com/frapoteam/image/upload/v1634079304/celular-mambo_yrdj3t.png" alt="" />
          <div className="text_pasos">
            <h2 className="number_text">01</h2>
            <span className="description_text">Escanea el QR y elige <br />
              la categoría del producto<br />
              que deseas.</span>
          </div>
        </div>
        <div className="container_paso2">
          <div className=" text_2">
            <h2 className="number_text">02</h2>
            <span className="description_text">Escoge tu producto favorito y <br />
              agrega al carrito de compras</span>
          </div>
          <img src="https://res.cloudinary.com/frapoteam/image/upload/v1634079304/celular-con-productos-de-la-tienda_ddhyfn.png" alt="" />
        </div>

        <div className="container_paso1">
          <img src="https://res.cloudinary.com/frapoteam/image/upload/v1634079304/celular-metodos-de-pago_terc7o.png" alt="" />
          <div className="text_pasos">
            <h2 className="number_text">03</h2>
            <span className="description_text">Ingresa todos tus datos <br />
            y envía tu pedido<br />
            directo al whatsapp del <br/> negocio.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasos;
