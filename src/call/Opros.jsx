import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function Opros() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>О</span>просы
            </h1>
            <p>
              Незаменимое средство, позволяющие узнать объективную картину
              спроса в той или иной области бизнеса.
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
                Наш Call-центр 56 может проводить различного рода «Опросы», как
                от имени Вашей компании, так и в визе независимого опроса.
                Достаточно поставить цель опроса, определиться с тематикой,
                аудиторией и уже через несколько дней результаты анкетирования
                будут у Вас на руках с предварительными подсчетами, по указанным
                ранее параметрам. Благодаря «Опросам» Вы всегда будете в курсе
                того, «что хотят» клиенты с последующим их привлечением! Важно
                знать, какая реклама для вашего бизнеса актуальна сегодня, какие
                предпочтения в сфере товар и услуг у населения, выявить наиболее
                стимулирующие факторы для покупки товаров и услуг.
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100 flex">
            <p>
              <strong>
                «Опросы» – действенный метод для решения ваших проблем!
              </strong>
              <br />
              <br /> У Вас возникают вопросы, на которые ответить могут только
              Ваши клиенты или потенциальные покупатели?
              <br /> Вы хотите переманить клиентов у конкурентов, но не знаете,
              чем их «зацепить»?
              <br />
              Желаете спрогнозировать предпочтение клиента на товар или услугу?
            </p>
            <p>
              <strong>
                Чтобы выяснить ответы на эти и многие другие вопросы, мы
                проведем для Вас исследования. Результаты помогут улучшить
                состояние дел в Вашем бизнесе.
              </strong>
            </p>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              Call-центр 56 – панель управления Вашим бизнесом, а «ОПРОСЫ» –
              наиважнейший ее функционал. Call-центр 56 – скорая помощь в
              устранении проблем вашего бизнеса!
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default Opros;
