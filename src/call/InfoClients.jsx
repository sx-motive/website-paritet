import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function InfoClients() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>И</span>нформирование клиентов
            </h1>
            <p>
              Услуга Информирование положительно отразится на вашей деловой
              репутации, и в дальнейшем клиенты будут обращаться именно к вам.
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
                Информирование - обзвон и оперативное донесение. Информирование
                предназначено для оперативного донесения информации широким
                группам клиентов. Это один из высокоэффективных методов рекламы,
                самый простой и надежный способ рассказать о себе, о новом
                направлении бизнеса, о новых услугах, своим потенциальным
                клиентам, путем донесения информации непосредственно лично до
                каждого. Это может быть информирование о новых акциях компании,
                о новых коммерческих предложениях, о текущих заказах,
                приглашение на мероприятия, семинары, информирование об
                организации круглых столов, выставок, днях открытых дверей и тд.
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100 flex">
            <p>
              <strong>Информация должна быть быстрой!</strong>
              <br />
              <br /> Хотите заявить о себе, но не знаете как?
              <br /> Нужно быстро проинформировать клиентов о новых услугах?
              <br />
              Ищете способы быстро и эффективно рассказать о своих акциях и
              скидках?
            </p>
            <p>
              <strong>
                Тогда услуга ситуацию с помощью услуги «Информирование» от
                Call-центра 56 - это именно то, что вам нужно!
              </strong>
            </p>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              Услуга Информирование правильно отразится на вашей деловой
              репутации, и в дальнейшем клиенты будут обращаться именно к Вам. В
              чем главное преимущество этой услуги - в том, что она поднимает
              уровень лояльности ваших клиентов. Это происходит за счет того,
              что вы даете клиентам почувствовать их важность и уделяете им
              внимание.
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default InfoClients;
