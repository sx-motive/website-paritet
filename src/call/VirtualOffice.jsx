import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function VirtualOffice() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>В</span>иртнуальный офис
            </h1>
            <p>
              Мы предоставим Вам виртуальный офис, который заменит одного или
              сразу нескольких секретарей.
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
                Прием входящих звонков от Колл-центра 56 – это услуга, которая
                позволяет круглосуточно принимать звонки Ваших клиентов с
                помощью многоканального телефона и целого штата обученных
                операторов. Подключив эту услугу, вы увеличите количество
                обращений и, как следствие, покупок. Мы предоставим Вам
                виртуальный офис, который заменит одного или сразу нескольких
                секретарей.
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100 flex">
            <p>
              <strong>
                От лица Вашей компании операторы Колл-центра 56 будут:
              </strong>
              <br />
              <br /> общаться с клиентами;
              <br /> обслуживать входящие звонки;
              <br /> переключать звонок на вашего менеджера для оформления
              заказа;
              <br /> ринимать и передавать документацию по электронной почте.
            </p>
            <p>
              <strong>
                Заказав эту услугу, вы получаете отлаженный бизнес-процесс под
                ключ, который может работать автономно(без Вашего фактического
                присутствия).
              </strong>
            </p>
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

export default VirtualOffice;
