import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function Scenari() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>Р</span>азработка сценариев разговора
            </h1>
            <p>
              Хорошо разработанный сценарий разговора по продаже услуг или
              оптовым продам, имеет большое значение при ведении бизнеса.
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
            <h2>
              <span>П</span>одробнее об услуге
            </h2>
            <p>
              <strong>Сценарии холодных звонков и продаж</strong> – это
              неотъемлемая часть качественного телемаркетинга. Если Вам нужна
              помощь в создании продающего сценария холодного звонка –
              обращайтесь в Call-центр 56. Сценарии холодных звонков или скрипты
              продаж в холодных звонках – штука необходимая каждому менеджеру
              активных продаж. Хороший сценарий увеличивает эффективность
              разговора, а значит и вероятность заключения сделки. Разработка
              скрипта дело непростое и довольно тонкое. Ведь это не просто
              приветствие и отчитанная презентация. Это текст с более глубоким
              смыслом. Сценарии холодных звонков должны воздействовать на
              психологические особенности человека. И касаться интимных линий
              подсознания. Создать универсальный сценарий, который идеально
              подойдет для каждого холодного звонка практически невозможно. Но
              есть возможность создать основу, своего рода полотно, на котором
              будет рисоваться каждый разговор индивидуально. И мы можем в этом
              помочь!
            </p>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default Scenari;
