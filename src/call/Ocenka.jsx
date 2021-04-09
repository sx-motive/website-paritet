import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function Ocenka() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>О</span>ценка лояльности клиента
            </h1>
            <p>
              Что бы узнать, что о Вас думает Ваш клиент – нужно Его об этом
              спросить.
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
                ОЦЕНКА ЛОЯЛЬНОСТИ КЛИЕНТА – это ключ к долгосрочной работе и
                увеличению финансовых показателей. Оценка лояльности позволяет
                выявить слабые и сильные стороны оказываемых вами услуг, узнать
                мнение ваших целевых потребителей . Всё это позволит снизить
                процент недовольных клиентов и даже увеличить продажи. Наши
                специалисты прозвонят ваших действующих клиентов и с помощью
                специально подготовленного сценария выявят ключевую информацию:
                действительное мнение потребителей о ваших товарах или услугах;
                в полном ли соответствии с регламентом работают Ваши СОТРУДНИКИ;
                рекомендует ли клиент вас друзьям и знакомым и почему; пожелания
                ваших клиентов для усовершенствования сервиса и качества услуг.
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100">
            <p>
              <strong>Хотите, что бы Ваш клиент был только ВАШ?</strong>
              <br />
              <br />
              Узнайте, что НА САМОМ ДЕЛЕ он думает о Вас
              <br />
              Узнайте, что нужно ИЗМЕНИТЬ для более качественного
              сотрудничества.
              <br />
              Определите, где УСИЛИТЬ контроль!
            </p>
            <p>
              <strong>
                Используйте популярный сервис «ОЦЕНКА ЛОЯЛЬНОСТИ КЛИЕНТА» от
                Call-центра 56!
              </strong>
            </p>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              С помощью услуги «ОЦЕНКА ЛОЯЛЬНОСТИ КЛИЕНТА», вы сможете вывести
              свой бизнес на новый уровень, будь это доставка еды, медицинский
              центр или завод металлопроката.
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default Ocenka;
