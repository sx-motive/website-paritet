import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function HotLine() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>Г</span>орячая линия
            </h1>
            <p>
              Подключив эту услугу, вы увеличите количество обращений и, как
              следствие, покупок.
            </p>
            <div className="btn-contaier">
              <div className="btn-outline is-animated-3">
                <a href="#info">
                  Узнать подробнее <ion-icon name="chevron-down"></ion-icon>
                </a>
              </div>
              <div className="btn-theme is-animated-3">
                <Link to="../contacts">
                  Оставить заявку <ion-icon name="chevron-forward"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info" id="info">
        <div className="container">
          <div className="box-100 flex flex-row flex-center flex-between">
            <div className="box-70">
              <h2>
                <span>П</span>одробнее об услуге
              </h2>
              <p>
                Горячая линия – это многоканальный телефонный номер для
                обслуживания входящих звонков, который обеспечит Ваших клиентов
                всей необходимой информацией. Для чего клиентам нужна
                информация? Для знакомства с Вашей компанией и услугами, для
                получения коротких справок и развернутых консультаций, для жалоб
                и отзывов, для принятия решений о покупке, для получения
                информации по сервисному и гарантийному обслуживанию. Лишая
                клиентов этой возможности, вы их теряете!
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              Мы подберем для Вас именно тот набор услуг, который даст
              максимальную отдачу: сократит издержки на содержание собственного
              штата, обеспечит полноценную обратную связь, повысит лояльность
              клиентов, увеличит объем продаж благодаря приему всех входящих
              звонков и заказов.
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default HotLine;
