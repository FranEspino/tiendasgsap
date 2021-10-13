import React from "react";
import Tools from "../../assets/Tools.jpg";
import StepOnda from "../../assets/StepOnda.png";
import "./Herramientas.css";
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import { useDimension } from "../../hooks/useDimension";

const Herramientas = () => {
  const { width } = useDimension();

  return (
    <div className="herramientas_container">
      <div className="herramientas_text">
        <h1 className="herramientas_title">
          ¿Qué herramientas <br /> obtendré?{" "}
        </h1>
        <img src={StepOnda} alt="Onda" />
      </div>
      {width > 768 ? (
        <div>
          <div className="section_benefits">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634074747/celular-food-pollo-a-la-brasa_dpdijv.png"
              alt=""
            />
            <div className="section_text">
              <ul> ✓ Datos del cliente</ul>
              <ul> ✓ Carrito de compras</ul>
            </div>
          </div>

          <div className="section_benefits" style={{ marginTop: -100 }}>
            <div className="section_text">
              <ul> ✓ Carta Virtual</ul>
              <ul> ✓ Medios de pago</ul>
            </div>
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634074747/celular-food-pollo-a-la-brasa_dpdijv.png"
              alt=""
            />
          </div>
          <div className="carrito_compra">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634075499/barra-negra-de-carrito-de-compras_gzogbm.png"
              alt="Herramientas"
            />
            <nav className="texto_encima">
              <h2 className="texto_title_carrito">Carrito de compras</h2>
              <div className="section_menu">
              <div className="menu">
                <span>PRODUCTOS</span>
                <p>Parrilla mixta <br/> con brochetas <br/>de pollo.</p>
              </div>
              <div>
                <span>SUBPRODUCTOS</span>
                <p>- 1 porción papas <br/>  - 1 porción arroz <br/> - Gaseosa</p>
              </div>

              </div>
            </nav>
          </div>
       
        </div>
      ) : (
        <div>
          <div className="section_benefits_mobile">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634074747/celular-food-pollo-a-la-brasa_dpdijv.png"
              alt=""
            />
            <div className="texto_encima_mobile">
              <ul> ✓ Datos del cliente</ul>
              <ul> ✓ Carrito de compras</ul>
              <ul> ✓ Carta Virtual</ul>
              <ul> ✓ Medios de pago</ul>
            </div>
          </div>
          <div className="carrito_compra">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634075499/barra-negra-de-carrito-de-compras_gzogbm.png"
              alt="Herramientas"
            />
            <nav className="texto_encima">
              <h2 className="texto_title_carrito">Carrito de compras</h2>
              <div className="section_menu_mobile">
              <div className="menu">
                <span>PRODUCTOS</span>
                <p>Parrilla mixta <br/> con brochetas <br/>de pollo.</p>
              </div>
              <div>
                <span>SUBPRODUCTOS</span>
                <p>- 1 porción papas <br/>  - 1 porción arroz <br/> - Gaseosa</p>
              </div>

              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Herramientas;
