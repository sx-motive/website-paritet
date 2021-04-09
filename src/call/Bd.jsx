import React from "react";
import { Link } from "react-router-dom";
import StepsCall from "../components/StepsCall";
import CallBackSection from "../components/CallBackSection";
import bgHeroImg from "../assets/media/images/bg-cc1.jpg";

function Bd() {
  return (
    <main className="cc-main">
      <div className="hero">
        <img src={bgHeroImg} alt="колл центр 56" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">
              <span>П</span>одбор и актуализация баз данных
            </h1>
            <p>
              Владение актуальной и своевременной информацией является залогом
              успеха любого бизнеса. Качественно собранная база данных клиентов
              является необходимым условием для успешных активных продаж
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
              <strong>Подбор баз данных</strong> – это один из самых эффективных
              инструментов в развитии бизнеса – это создание собственной базы
              данных клиентов. Это может быть как «холодная» база – из возможных
              потенциальных клиентов, так и «теплая» или даже «горячая» база
              данных с контактами клиентов, которые уже сейчас готовы купить ваш
              продукт или услугу. Разумеется, у вас уже есть собственная база
              данных ваших клиентов. Но вы, как профессионал своего дела,
              понимаете, что базу данных необходимо регулярно пополнять и
              обновлять. Чем больше там находится записей, тем больше прибыли
              будет приносить ваш бизнес. База данных значительно облегчает
              распространение информации, делает ее более упорядоченной и
              структурированной. С готовой базой данных вы легко можете сделать
              рассылку писем с вашим новым коммерческим предложением. Или
              запустить эффективный обзвон клиентов. Любая компания создает или
              расширяет свою клиентскую базу за счет «холодных» звонков –
              первичных вызовов новым клиентам. Наш Call-центр 56 предоставляет
              услуги по набору баз данных. Мы не используем готовые базы данных
              – мы набираем их абсолютно с нуля, используя поисковые системы
              такие как Google и Yandex, общие и специализированные каталоги,
              форумы. Это намного эффективней, т.к. вы получаете только свежую
              информацию из живых контактов. Результаты нашей работы
              экспортируются в таблицах excel: есть возможности получать как
              обновления базы данных в ходе проекта онлайн, так и итоговый отчет
              по завершению набора базы данных.
            </p>
          </div>
          <div className="box-100">
            <p>
              <strong>Актуализация баз данных</strong> – это замена
              недостоверных и устранение устаревших данных о клиенте, а также
              возможность дополнения новой маркетинговой информации о компаниях.
              Держать свою клиентскую базу в порядке непросто: кому-то не
              хватает времени, кому-то людских ресурсов. Как правило, в первую
              очередь от этого страдает актуальность информации. Если не
              обновлять базу регулярно, есть опасность того, что компания
              потеряет кругозор, а это может вылиться в серьезные неприятности,
              незнание потребностей клиента среди которых — далеко не самая
              страшная. Мы приведем существующую базу данных в структурированный
              электронный вид, обеспечим постоянное обновление сведений о
              клиентах, соберем и организуем поиск всех необходимых для
              пополнения базы сведений, выявим потенциальных клиентов и
              передадим их заказчику. Мы соблюдаем конфиденциальность доступных
              нам данных. Однако при желании мы можем ввести дополнительные меры
              для сохранности информации: Вы можете не предоставлять нам доступа
              ко всей своей базе данных целиком, а дать доступ нашим операторам
              через защищенные каналы связи к конкретным полям в этой базе, при
              этом физически она может быть размещена на Вашем оборудовании или
              даже в вашем офисе.
            </p>
          </div>
        </div>
      </div>
      <StepsCall />
      <CallBackSection />
    </main>
  );
}

export default Bd;
