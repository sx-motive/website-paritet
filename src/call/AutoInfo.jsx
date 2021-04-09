import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function AutoInfo() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>А</span>втоинформатор
            </h1>
            <p>
              Экономия человеческих ресурсов(уменьшение числа секретарей «на
              телефоне») и, соответственно, средств компаний.
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
                Вы знаете, чем больше вы общаетесь со своими потенциальными или
                существующими клиентами – тем более надежно ваше финансовое
                состояние. Информирование предназначено для оперативного
                донесения информации широким группам клиентов. Донести
                информацию до адресата вы можете с помощью наших операторов или
                воспользовавшись услугой автоинформирование. Это самый простой и
                надежный способ рассказать о себе, о новом направлении бизнеса
                или услугах, пригласить гостей на мероприятие, тест драйв или
                организовать семинар и выставки в короткие сроки. Вы даже можете
                просто сообщить клиентам о задолженности или поздравить их с
                праздником.
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100">
            <p>
              <strong>В чем главное преимущество этой услуги?</strong>
              <br />
              <br />
              правильное инвестирование рекламных средств;
              <br />
              донесение информации до каждого адресата лично;
              <br />
              Позволяет вашим сотрудникам больше времени уделять прямым
              обязанностям, исключение нерационального распределения рабочего
              времени ключевых сотрудников;
              <br />
              Информирование в больших объемах в сжатые сроки.
            </p>
            <p>
              <strong>
                Для организации информирования специалисты Call-центра 56
                сформируют для вас базу данных, составят сценарий разговора и по
                согласованному алгоритму оператор лично донесет информацию до
                каждого клиента или партнера, разошлет коммерческие предложения,
                а по результату работы вы получите отчет. При необходимости
                возможна переадресация звонка на сотрудника вашей компании.
              </strong>
            </p>
          </div>
          <div className="box-100 flex red-box">
            <h4>
              втоинформатор - не откладывайте ту важную работу, на которую у Вас
              просто напросто не хватает времени. Поручите ее нам!
            </h4>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default AutoInfo;
