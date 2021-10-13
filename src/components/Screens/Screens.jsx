import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import "./Screens.css";
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import "../../fonts/Poppins/Poppins-Bold.ttf";
import icon1 from "../../assets/icon1.png";
import screen1 from "../../assets/screen1.png";
import celular1 from "../../assets/celular1.png";
import celular2 from "../../assets/celular2.png";
import celular3 from "../../assets/celular3.png";

import icon2 from "../../assets/icon2.png";
import screen2 from "../../assets/screen2.png";
import icon3 from "../../assets/icon3.png";
import screen3 from "../../assets/screen3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import { IoMdWine } from "react-icons/io";
import { GiShrimp, GiHamburger } from "react-icons/gi";

import gsap, { TimelineLite, Power3, TweenMax } from "gsap";
import { useDimension } from "../../hooks/useDimension";

const Screens = () => {
  const [showCarrusel, setShowCarrusel] = useState(false);
  const { width } = useDimension();
  console.log(width);
  let cardRaf = useRef(null);
  let cardRaf2 = useRef(null);
  let cardRaf3 = useRef(null);

  const intersection = useIntersection(cardRaf, {
    root: null,
    rootMargin: "25px",
    threshold: 0.8,
  });

  const intersection2 = useIntersection(cardRaf2, {
    root: null,
    rootMargin: "25px",
    threshold: 0.8,
  });

  const intersection3 = useIntersection(cardRaf3, {
    root: null,
    rootMargin: "25px",
    threshold: 0.8,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -35,
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.6,
      },
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -35,
      ease: Power3.easeInOut,
    });
  };
  intersection2 && intersection2.intersectionRatio < 0.8
    ? fadeOut(".fadeIn2")
    : fadeIn(".fadeIn2");
  intersection && intersection.intersectionRatio < 0.8
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  intersection3 && intersection3.intersectionRatio < 0.8
    ? fadeOut(".fadeIn3")
    : fadeIn(".fadeIn3");
  return (
    <div className="container_screens">
      <div class="title_content">
        <h2 className="title_screens">Tiendas Virtuales</h2>
        <h4 className="subtitle_screens">ideales para negocios de: </h4>
      </div>

      {width > 700 ? (
        <div className="container_cards">
          <div class="card_screens fadeIn" ref={cardRaf}>
            <img src={icon1} className="card_icon" alt="Cevicheria" />
            <h3 className="title_card">Cevichería</h3>
            <span className="description_card">
              Pescados, y mariscos <br />
            </span>
            <img src={screen1} className="image_card" />
          </div>
          <div class="card_screens fadeIn2" ref={cardRaf2}>
            <img src={icon2} className="card_icon" alt="Cevicheria" />
            <h3 className="title_card">Comida rápida</h3>
            <span className="description_card">
              Hamburguesas, anticuchos, postres y más
            </span>
            <img src={screen2} className="image_card" />
          </div>
          <div class="card_screens fadeIn3" ref={cardRaf3}>
            <img src={icon3} className="card_icon" alt="Cevicheria" />
            <h3 className="title_card">Licorería</h3>
            <span className="description_card">Tragos, cervezas y shots</span>
            <img src={screen3} className="image_card" />
          </div>
        </div>
      ) : (
        <Carousel
          swipeable={false}
          interval={3500}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          className="container_cards"
        >
          <div class="card_screens fadeIn3">
            <IoMdWine size={50} />
            <h3 className="title_card">Licorería</h3>
            <span className="description_card">Tragos, cervezas y shots</span>
            <img className="image_phone" src={celular3} />
          </div>
          <div class="card_screens fadeIn">
            <GiShrimp size={50} />
            <h3 className="title_card">Cevichería</h3>
            <span className="description_card">Pescados y mariscos. </span>
            <img className="image_phone" src={celular1} />
          </div>

          <div class="card_screens fadeIn2">
            <GiHamburger size={50} />
            <h3 className="title_card">Comida rápida</h3>
            <span className="description_card">
              Hamburguesas, anticuchos, postres y más
            </span>
            <img className="image_phone" src={celular2} />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Screens;
