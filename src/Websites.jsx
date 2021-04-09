import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import CallBackSection from "./components/CallBackSection";

import bgHeroImg from "./assets/media/images/bg-site01.jpg";
import PcImg from "./assets/media/images/pc22.png";
import Funtik from "./assets/media/images/funtik.jpg";
import Jelezo from "./assets/media/images/jelezo.jpg";
import Vetdoctor from "./assets/media/images/vetdoctor.jpg";

function Home() {
  return (
    <main className="websites">
      <div className="hero">
        <img src={bgHeroImg} alt="Паритет Инфо" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              Разработка уникальных сайтов в Оренбурге
            </h1>
            <p className="is-animated-2">
              Компания Паритет-Инфо оказывает услуги поддержки и продвижения
              малого и среднего бизнеса в Оренбурге более 15 лет.
            </p>
            <div className="btn-theme is-animated-3">
              <Link to="/contacts">
                Оставить заявку <ion-icon name="chevron-forward"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="box-100 flex flex-wrap padding-100">
            <div className="box-50">
              <h2>
                <span>D</span>igital-маркетинг, создание и продвижение сайтов,
                PR и брендинг
              </h2>
              <p>
                Комплексный подход к рекламе вашего бизнеса в интернете. Наша
                команда - воплощение профессионализма и эффективных решений
                любого уровня сложности. Мы применяем все современные
                digital-технологии и обеспечиваем качественный стратегический
                подход к поставленным задачам.
              </p>
            </div>
            <div className="box-50">
              <img className="imgWeb" src={PcImg} alt="Создание сайтов" />
            </div>
          </div>
          <div className="box-100 flex flex-wrap flex-start we-do flex-between">
            <div className="box-30">
              <div className="title flex flex-center">
                <ion-icon name="laptop-outline"></ion-icon>
                <h3>Разработка сайтов</h3>
              </div>
              <p>
                Предлагаем комплексную разработку проектов с высокой
                эффективностью, современные технологии и красивый дизайн.
              </p>
            </div>
            <div className="box-30">
              <div className="title flex flex-center">
                <ion-icon name="trending-up-outline"></ion-icon>
                <h3>СЕО - продвижение</h3>
              </div>
              <p>
                Выводим сайт на первую страницу всех поисковых систем,
                увеличиваем его конверсию и осуществляем поддержку результатов.
                Используем уникальную методику продвижения.
              </p>
            </div>
            <div className="box-30">
              <div className="title flex flex-center">
                <ion-icon name="receipt-outline"></ion-icon>
                <h3>Поддержка проектов</h3>
              </div>
              <p>
                Комплексное сопровождение и развитие. Техническая и
                информационная поддержка сайта. Оперативно вносим правки,
                отвечаем на 100% обращений. Предоставляем полную аналитику по
                проекту.
              </p>
            </div>
          </div>
          <div className="box-100">
            <h2>
              <span>Н</span>аши работы
            </h2>
          </div>
          <div className="box-100 flex flex-wrap our-works flex-between padding-100">
            <div className="box-30">
              <img src={Jelezo} />
              <div className="title">
                <h3>Железяка</h3>
              </div>
              <div className="btn-theme">
                <a href="https://железяка56.рф">
                  Открыть проект <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </div>
            </div>
            <div className="box-30">
              <img src={Funtik} />
              <div className="title">
                <h3>Фунтик</h3>
              </div>
              <div className="btn-theme">
                <a href="https://orenfuntik.ru">
                  Открыть проект <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </div>
            </div>
            <div className="box-30">
              <img src={Vetdoctor} />
              <div className="title">
                <h3>Ветдоктор</h3>
              </div>
              <div className="btn-theme">
                <a href="https://vetdoctor56.ru">
                  Открыть проект <ion-icon name="chevron-forward"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-100"></div>

      <AboutSection />
      <CallBackSection />
    </main>
  );
}

export default Home;
