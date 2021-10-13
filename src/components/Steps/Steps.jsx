import React, { useRef } from "react";
import StepLinea from "../../assets/StepLinea.png";
import { useIntersection } from "react-use";
import StepOnda from "../../assets/StepOnda.png";
import "./Steps.css";
import "../../fonts/Comfortaa/Comfortaa-Bold.ttf";
import "../../fonts/Poppins/Poppins-Bold.ttf";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { useDimension } from "../../hooks/useDimension";
import gsap, { TimelineLite, Power3, TweenMax } from "gsap";
const Steps = () => {
  const { width } = useDimension();
  console.log(width);
  let step1 = useRef(null);
  let step2 = useRef(null);
  let step3 = useRef(null);
  let step4 = useRef(null);
  let step5 = useRef(null);

  const intersection1 = useIntersection(step1, {
    root: null,
    rootMargin: "17px",
    threshold: 0.6,
  });

  const intersection2 = useIntersection(step2, {
    root: null,
    rootMargin: "17px",
    threshold: 0.6,
  });

  const intersection3 = useIntersection(step3, {
    root: null,
    rootMargin: "17px",
    threshold: 0.6,
  });

  const intersection4 = useIntersection(step4, {
    root: null,
    rootMargin: "17px",
    threshold: 0.6,
  });
  const intersection5 = useIntersection(step5, {
    root: null,
    rootMargin: "17px",
    threshold: 0.6,
  });
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -35,
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.2,
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
  intersection2 && intersection2.intersectionRatio < 0.6
    ? fadeOut(".fadeStepIn2")
    : fadeIn(".fadeStepIn2");
  intersection1 && intersection1.intersectionRatio < 0.6
    ? fadeOut(".fadeStepIn1")
    : fadeIn(".fadeStepIn1");
  intersection3 && intersection3.intersectionRatio < 0.6
    ? fadeOut(".fadeStepIn3")
    : fadeIn(".fadeStepIn3");
  intersection4 && intersection4.intersectionRatio < 0.6
    ? fadeOut(".fadeStepIn4")
    : fadeIn(".fadeStepIn4");
  intersection5 && intersection5.intersectionRatio < 0.6
    ? fadeOut(".fadeStepIn5")
    : fadeIn(".fadeStepIn5");

  return (
    <div className="steps_global" style={{ paddingBottom: 55 }}>
      <div className="steps_container">
        <h2 className="step_number">5</h2>
        <div className="step_containerinfo">
          <div className="step_containertext">
            <h2 className="step_title">Beneficios de la</h2>
            <h2 className="step_subtitle">Tienda Virtual</h2>
            <h2 className="step_subtitle2">para tu negocio</h2>
          </div>
          <img src={StepOnda} alt="Onda Step" />
        </div>
      </div>
      {/*STEP 1 */}
      <div className="fadeStepIn1" ref={step1}>
        <div className="step_one ">
          <div className="step_one_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634056842/step1_nyebgb.png"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description" style={{ paddingLeft: 25 }}>
            <h1 className="step_number_description">01</h1>
            <h2 className="step_title_desciption">Tu propia tienda virtual</h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
                Podrás mostrar los productos o <br /> servicios que ofreces.
                Además de precios, <br /> promociones, ofertas que desees
              </span>
            ) : (
              <span className="step_resume_desciption">
                Podrás mostrar los productos o servicios que ofreces. Además de
                precios, promociones, ofertas que desees
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>
        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/*STEP 2 */}
      <div className="fadeStepIn2" ref={step2}>
        <div className="step_two fadeStepIn2" ref={step2}>
          <div class="step_two_description">
            <h1 className="step_number_description">02</h1>
            <h2 className="step_title_desciption">Aumenta tus ventas</h2>
            <span className="step_resume_desciption">
              Ya no estás limitado por la capacidad de personas que ingresan en
              un local, llegarás a una gran cantidad de personas que desde su
              casa realizarán el pedido.
            </span>
            {width >= 700 ? (
              <div className="step_border" style={{ marginTop: 35 }}>
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {width >= 700 ? (
              <BsChevronDoubleRight
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="step_two_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634056589/StepAumento_opmkwh.png"
              alt="Aumento de ventas"
            />
          </div>
          {width <= 700 ? (
            <div className="step_divider">
              <img src={StepLinea} alt="Onda Step" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/*STEP 3 */}
      <div className="fadeStepIn3" ref={step3}>
        <div className="step_one ">
          <div className="step_one_image ">
            <img
              className="cerdito"
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634057390/ChanchoSteps_hpftrn.png"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft color={"#E67D0C"} size="30" />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description">
            <h1 className="step_number_description">03</h1>
            <h2 className="step_title_desciption">Disminuye costos</h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
                En este caso no es necesario tener <br />
                local o ampliarlo para aumentar ventas <br /> (se ahorra
                infraestructura, decoración, <br />
                entre otros).{" "}
              </span>
            ) : (
              <span className="step_resume_desciption">
                En este caso no es necesario tener local o ampliarlo para
                aumentar ventas (se ahorra infraestructura, decoración, entre
                otros)
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>

        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>

      {/*STEP 4 */}
      <div className="fadeStepIn4" ref={step4}>
        <div className="step_two ">
          <div class="step_two_description">
            <h1 className="step_number_description">04</h1>
            <h2 className="step_title_desciption">Tu negocio online</h2>
            <span className="step_resume_desciption">
              Tu negocio estará abierto las 24 horas del día, y no se verá
              limitado a las horas de atención en tu local, ya que tus clientes
              podrán comprar desde donde se encuentren.
            </span>
            {width >= 700 ? (
              <div className="step_border" style={{ marginTop: 35 }}>
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {width >= 700 ? (
              <BsChevronDoubleRight
                color={"#E67D0C"}
                size="30"
                style={{ marginLeft: 40 }}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="step_two_image">
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634054873/DeliberyGuy_ix21gk.svg"
              alt="Aumento de ventas"
            />
          </div>
          {width <= 700 ? (
            <div className="step_divider">
              <img src={StepLinea} alt="Onda Step" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/*STEP 5 */}
      <div className="fadeStepIn5 step5" ref={step5}>
        <div className="step_one ">
          <div
            className="step_one_image"
            style={{ marginTop: -25, marginLeft: 30 }}
          >
            <img
              src="https://res.cloudinary.com/frapoteam/image/upload/v1634054819/Database_zhmefg.svg"
              alt="Tienda Virtual "
            />
          </div>

          <div>
            {width >= 700 ? (
              <BsChevronDoubleLeft color={"#E67D0C"} size="30" />
            ) : (
              <></>
            )}
          </div>
          <div clasName="step_one_description">
            <h1 className="step_number_description">05</h1>
            <h2 className="step_title_desciption">
              Obtén tu propia base <br />
              de datos de tus clientes
            </h2>
            {width >= 700 ? (
              <span className="step_resume_desciption">
                Con los datos que ingrese el cliente <br />
                al realizar su compra, tendrás a la mano <br />
                la base de datos de tus clientes.
              </span>
            ) : (
              <span className="step_resume_desciption">
                Con los datos que ingrese el cliente al realizar su compra,
                tendrás a la mano la base de datos de tus clientes.
              </span>
            )}

            {width >= 700 ? (
              <div className="step_border_desciption">
                <img src={StepLinea} alt="Onda Step" />
              </div>
            ) : (
              <> </>
            )}
          </div>
        </div>

        {width <= 700 ? (
          <div className="step_divider">
            <img src={StepLinea} alt="Onda Step" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Steps;
