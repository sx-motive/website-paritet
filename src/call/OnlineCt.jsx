import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function OnlineCt() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>О</span>нлайн консультант
            </h1>
            <p>Получайте консультацию в режиме реального времени.</p>
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
            <h2>
              <span>П</span>одробнее об услуге
            </h2>
            <p>
              <strong>Консультант онлайн </strong>– это отличное изобретение для
              повышения продаж. В портфель услуг нашего колл-центра входит
              сервис по внедрению и ведению онлайн-консультанта для сайта. Если
              вам не понятно что это такое и как работает, то давайте
              разберемся! Онлайн-консультант – это специальный web-инструмент по
              захвату внимания пользователя, находящегося на сайте. Визуально он
              представляет собой небольшой «ярлычок», при наведении и нажатии на
              кнопку онлайн консультанта раскрывается окно чата, где
              пользователь может написать любой вопрос/сообщение, тем самым
              обратиться к менеджеру-консультанту компании. Онлайн-консультант –
              это часть вашего сайта, которая используется для общения с
              посетителями в режиме реального времени (в большинстве случаев ее
              целью является увеличение продаж, реже для поддержки существующих
              клиентов). Мы поможем Вам установить и настроить сервис
              онлайн-консультант на Вашем сайте и обеспечим качественную
              обработку обращений пользователей Вашего сайта!
            </p>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default OnlineCt;
