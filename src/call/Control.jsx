import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function Control() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>К</span>онтроль качества
            </h1>
            <p>Найдите и исправьте свои ошибки!</p>
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
                Контроль качества – это не только независимый анализ качества,
                способов и скорости выполнения работ Вашими сотрудниками и
                оценка удовлетворенности клиентов, но и эффективный вид
                исследований. Наши специалисты прозвонят ваших действующих
                клиентов и с помощью специально подготовленного сценария выявят
                ключевую информацию: действительное мнение потребителей о ваших
                товарах или услугах; в полном ли соответствии с регламентом
                работают Ваши СОТРУДНИКИ; рекомендует ли клиент вас друзьям и
                знакомым и почему. Важный момент: наши специалисты смогут
                узнать, чем недоволен ваш клиент, выслушают все жалобы и
                предложения от него и с большой долей вероятности уладят. В
                итоге: вы получите лояльных клиентов, представление о реальной
                ситуации, правдивую информацию и новые идеи для развития и
                улучшения вашего бизнеса.
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
              Повысьте лояльность своего клиента! чем их «зацепить»?
              <br />
              Определите, где усилить контроль!!!
            </p>
            <p>
              <strong>
                Используйте популярный сервис «КОНТРОЛЬ КАЧЕСТВА» от Call-центра
                56!
              </strong>
            </p>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              С помощью услуги «КОНТРОЛЬ КАЧЕСТВА», вы сможете вывести свой
              бизнес на новый уровень, будь это доставка еды, медицинский центр
              или завод металлопроката.
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default Control;
