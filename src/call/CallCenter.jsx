import React from "react";
import { Link } from "react-router-dom";

import bgHeroImg from "../assets/media/images/bg-cc1.jpg";
import AboutSection from "../components/AboutSection";

function CallCenter() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">Колл-центр 56</h1>
            <p>
              С нами ваш бизнес всегда на связи. Узнайте как экономить с
              услугами колл-центра уже сегодня!
            </p>
          </div>
        </div>
      </div>
      <div className="info callcenter">
        <div className="container">
          <div className="box-100">
            <h2>
              <span>О</span> колл-центре 56
            </h2>
            <p>
              Вот уже более 20 лет на рынке компания "Колл-центр56" успешно
              помогает людям экономить время и деньги. Наша компания
              предоставляет качественные услуги колл центра для автоматизации
              процесса вашего бизнеса. Отсутствие расходов на содержание офиса и
              оплаты труда персонала, готовые решения для автоматизации прёма
              заявок от клиентов, открытая система ценообразования и многое
              другое. Колл-центр56 по праву занимает лидирующие позиции на рынке
              аутсорсинговых услуг. Услуги нашего колл-центра - верный шаг к
              успешному бизнесу!
            </p>
          </div>
          <div className="box-100 flex flex-between">
            <div className="box-30">
              <h3>Входящие вызовы</h3>
              <li>
                <Link to="../call/virtual-office">Виртуальный офис</Link>
              </li>
              <li>
                <Link to="../call/hot-line">Горячая линия</Link>
              </li>
              <li>
                <Link to="../call/zakaz">Прием заказов</Link>
              </li>
            </div>
            <div className="box-30">
              <h3>Исходящие вызовы</h3>
              <li>
                <Link to="../call/info-clients">Информаирование клиентов</Link>
              </li>
              <li>
                <Link to="../call/opros">Опросы</Link>
              </li>
              <li>
                <Link to="../call/control">Контроль качества</Link>
              </li>
              <li>
                <Link to="../call/ocenka">Оценка лояльности клиента</Link>
              </li>
              <li>
                <Link to="../call/spy-client">Тайный покупатель</Link>
              </li>
              <li>
                <Link to="../call/cold-call">Холодные звонки</Link>
              </li>
            </div>
            <div className="box-30">
              <h3>Бизнес услуги</h3>
              <li>
                <Link to="../call/bd">Подбор и актулизация баз данных</Link>
              </li>
              <li>
                <Link to="../call/scenari">Разработка сценария разговора</Link>
              </li>
              <li>
                <Link to="../call/online-consultant">Онлайн консультант</Link>
              </li>
              <li>
                <Link to="../call/auto-informator">Автоинформатор</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </main>
  );
}

export default CallCenter;
