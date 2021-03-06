import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function ColdCall() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>Х</span>олодные звонки
            </h1>
            <p>
              Уникальный многопрофильный медицинский центр нового поколения,
              сочетающий в себе медицину и косметологию
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
                Холодные звонки (телефонные продажи) – это мощный инструмент
                маркетинга, который является одним из самых эффективных методов
                работы. Он подходит для большинства товаров и услуг, а с помощью
                маркетинговых технологий можно собрать базу целевой аудитории и
                «довести» до покупки большинство клиентов. Холодные звонки – это
                не просто. Не каждый менеджер по продажам сможет на позитивном
                настрое выслушать 100 отказов, прежде чем получить одного
                заинтересовавшегося потенциального клиента. Для холодных звонков
                нужен опыт. Специалисты call-центра 56 имеют большой опыт
                осуществления холодных звонков в Оренбурге и формировании баз
                потенциальных клиентов, заинтересованных именно Вашими товарами
                и услугами. Холодные звонки – это долго. На каждый холодный
                звонок тратится от 1 до 5 минут разговора. Для составления базы
                потенциальных клиентов следует осуществить большое количество
                звонков. Специалисты call-центра 56 согреют за вас ваших
                потенциальных клиентов, подготовят базу телефонных абонентов,
                заинтересовавшихся услугами вашей организации, и уже
                тепленькими, на блюдечке с голубой каёмочкой преподнесут вам.
                После чего Вам останется только продать Ваш товар!
              </p>
            </div>
            <div className="box-30">
              <div className="call-service-img"></div>
            </div>
          </div>
          <div className="box-100">
            <p>
              <strong>Как работает услуга?</strong>
              <br />
              <br />
              На основе Вашей целевой аудитории мы подготовим базу данных (также
              она может быть вашей). В нашей базе множество контактов, которые
              можно сегментировать по сфере деятельности, региону, годовому
              обороту и др.
              <br />
              Далее мы пишем и разрабатываем сценарий, по которому будет
              работать наш специалист. Затем обучаем оператора, подготавливаем
              оборудование и приступаем к работе.
              <br />
              Все заявки или лиды направляем Вам прямиком в отдел продаж. С
              первого дня работы проекта его менеджер и разработчик постоянно
              анализируют эффективность проекта, чтобы вывести его на
              максимальную эффективность.
              <br />
              Результаты работы по проекту систематизируются и передаются Вам.
            </p>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default ColdCall;
