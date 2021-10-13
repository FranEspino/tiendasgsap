import React, { useEffect, useRef, useState } from "react";
import bannerDesktop from "../../assets/banner_desktop3.png";
import bannerPhone from "../../assets/banner_phone.png";
import '../../fonts/Poppins/Poppins-Bold.ttf'; 

import codeqr from "../../assets/qrvespro.png";
import { TimelineLite, Power3 } from "gsap";
import {useDimension} from '../../hooks/useDimension';
import "./Banner.css";
const Banner = () => {
  const {width} = useDimension();
  let titulo = useRef(null);
  let subtitulo = useRef(null);
  let texto = useRef(null);
  let button = useRef(null);
  let qr = useRef(null);
  let t1 = new TimelineLite({ delay: 0.3 });

  console.log(width)
  useEffect(() => {
    t1.from(titulo, 0.5, {
      opacity: 0,
      y: -25,
      ease: Power3.easeOut,
    });
    t1.from(subtitulo, 0.5, {
      opacity: 0,
      y: -30,
      ease: Power3.easeOut,
    });
    t1.from(texto, 0.5, {
      opacity: 0,
      x: -35,
      ease: Power3.easeInOut,
    });
    t1.from(qr, 0.5, {
      opacity: 0,
      x: -35,
      ease: Power3.easeOut,
    });
    t1.from(button, 0.5, {
      opacity: 0,
      x: -35,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="banner_container">
      <img className="banner_img"   src={ (width >= 800)? bannerDesktop :bannerPhone } alt="Tiendas Virtuales" />
      <div className="banner_content">
        <h1
          className="banner_title"
          ref={(el) => {
            titulo = el;
          }}
        >
          Tienda Virtual
        </h1>
        <h2
          className="banner_text"
          ref={(el) => {
            subtitulo = el;
          }}
        >
          ¡Ahora es digital y <br /> podrás aumentar tus ventas!
        </h2>
        <span
          className="banner_textsmall"
          ref={(el) => {
            texto = el;
          }}
        >
          Escanea el QR y <br /> vive la experiencia Vespro.
        </span>
        <div className="banner_containerinfo">
          <img
            src={codeqr}
            alt="Código QR"
            className="banner_qr"
            ref={(el) => {
              qr = el;
            }}
          />
          <div>
            <button
              ref={(el) => {
                button = el;
              }}
              className="banner_button"
            >
              ¡Quiero mi tienda!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
