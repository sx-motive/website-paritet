import React from "react";
import { Link } from "react-router-dom";

import ImgCallCenter from "./assets/media/images/call01.jpg";
import ImgWebsites from "./assets/media/images/web01.jpg";
import bgHeroImg from "./assets/media/images/bg1.png";
import AboutSection from "./components/AboutSection";

function Home() {
  return (
    <main>
      <div className="hero">
        <img src={bgHeroImg} alt="Паритет Инфо" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              Поддержка и продвижение бизнеса в Оренбурге
            </h1>
            <p className="is-animated-2">
              Компания Паритет-Инфо оказывает услуги поддержки и продвижения
              малого и среднего бизнеса в Оренбурге более 15 лет.
            </p>
            <div className="btn-theme is-animated-3">
            <Link to="/contacts"> Оставить заявку <ion-icon name="chevron-forward"></ion-icon></Link>
               
              
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="box-100 flex">
            <div className="box-50">
              <img src={ImgCallCenter} alt="Колл центр" />
            </div>
            <div className="box-50 text">
              <h2>Колл-центр 56</h2>
              <p>
                Вот уже более 20 лет на рынке компания "Колл-центр56" успешно
                помогает людям экономить время и деньги. Наша компания
                предоставляет качественные услуги колл центра для автоматизации
                процесса вашего бизнеса.
              </p>
              <div className="btn-theme">
                <Link to="./call/call-center">
                  Узнать подробнее <ion-icon name="chevron-forward"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
          <div className="box-100 flex">
            <div className="box-50 text">
              <h2>Разработка сайтов</h2>
              <p>
                Мы делаем УМНЫЕ САЙТЫ на современных системах управления,
                которые отличаются низкой себестоимостью продвижения и обладают
                высокой конверсией, за счет грамотной структуры и продуманного
                дизайна.
              </p>
              <div className="btn-theme">
                <Link to="/websites">
                  Узнать подробнее <ion-icon name="chevron-forward"></ion-icon>
                </Link>
              </div>
            </div>
            <div className="box-50">
              <img src={ImgWebsites} alt="Колл центр" />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </main>
  );
}

export default Home;
