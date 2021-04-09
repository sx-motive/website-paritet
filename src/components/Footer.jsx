import React from "react";
import { Link } from "react-router-dom";
import LogoB from "../assets/media/logo-b.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="pre-footer">
        <div className="container flex">
          <div className="box-25">
            <h4>Колл-центр</h4>
            <span>Исходящие вызовы</span>
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
          <div className="box-25">
            <div className="space-60"></div>
            <span>Входящие вызовы</span>
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
          <div className="box-25">
            <div className="space-60"></div>
            <span>Бизнес услуги</span>

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
          <div className="box-25">
            <h4>Паритет Инфо</h4>
            <li>
              <Link to="../call/call-center">О Колл-центре 56</Link>
            </li>
            <li>
              <Link to="../websites">Разработка сайтов</Link>
            </li>
            <li>
              <a href="https://4geo.ru">Портал 4гео</a>
            </li>
            <li>
              <a href="https://nashgor.ru">Портал Наш Город</a>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="box-100">
        <div className="container flex flex-between flex-center">
          <div className="box-30 flex flex-center logo">
            <img src={LogoB} alt="логотип паритет инфо" />
            ООО "Паритет-Инфо+"
          </div>
          <div className="box-70 phone">
          <a href="tel:#"><ion-icon name="location-outline"></ion-icon> ул. 60 лет Октября, 17/1, Оренбург</a>
            <a href="tel:#"><ion-icon name="call-outline"></ion-icon> +7 (3532) 44-60-44</a>
            <a href="tel:#"><ion-icon name="mail-outline"></ion-icon> office@paritet.studio</a>
          </div>
          
        </div>
      </div>
      <div className="box-100 copyright">
        <div className="container">
          <ul>
            <li>
              <a href="">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="">Политика обработки персональных данных</a>
            </li>
            <li>
              <a href="">Digital promotion and design by MOTIVE © 2021</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
