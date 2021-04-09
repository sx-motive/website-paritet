import React from "react";
import { Link } from "react-router-dom";

import ToggleMenu from "./ToggleMenu";
import LogoW from "../assets/media/logo-w.svg";

function toggleMenu() {
  document
    .getElementsByClassName("menu-toggled-wrapper")[0]
    .classList.toggle("menu-wrapper-show");
  document.getElementsByClassName("menu-toggle")[0].classList.toggle("active");
}

function Header() {
  return (
    <header className="header">
      <img className="logo" src={LogoW} alt="паритет инфо логотип" />
      <div className="container">
        <div className="m-main-menu">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="../call/call-center">
                Колл-центр <ion-icon name="chevron-down"></ion-icon>
              </Link>
              <ul className="m-sub-menu flex-row">
                <div className="box">
                  <h6>Исходящие вызовы</h6>
                  <li>
                    <Link to="../call/info-clients">
                      Информаирование клиентов
                    </Link>
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
                  <li></li>

                  <h6>Входящие вызовы</h6>

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
                <div className="box">
                  <h6>Бизнес услуги</h6>

                  <li>
                    <Link to="../call/bd">Подбор и актулизация баз данных</Link>
                  </li>
                  <li>
                    <Link to="../call/scenari">
                      Разработка сценария разговора
                    </Link>
                  </li>
                  <li>
                    <Link to="../call/online-consultant">
                      Онлайн консультант
                    </Link>
                  </li>
                  <li>
                    <Link to="../call/auto-informator">Автоинформатор</Link>
                  </li>
                  <li></li>

                  <h6>Помощь</h6>

                  <li>
                    <Link to="../call/call-center">О Колл-центре 56</Link>
                  </li>
                  <li>
                    <a href="#">Полезная информация</a>
                  </li>
                  <li>
                    <a href="#">Консультация по услугам</a>
                  </li>
                  <li>
                    <a href="#">Награды</a>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <Link to="../websites">Разработка сайтов</Link>
            </li>
            <li>
              <a href="#">
                Услуги и проекты <ion-icon name="chevron-down"></ion-icon>
              </a>
              <ul className="m-sub-menu">
                <li>
                  <a href="https://4geo.ru">Справочник 4гео</a>
                </li>
                <li>
                  <a href="https://nashgor.ru">Наш Город</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
      <svg
        onClick={toggleMenu}
        className="menu-toggle ham-motive ham-motiveRotate"
        viewBox="0 0 100 100"
        width="50"
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>

      <ToggleMenu />
    </header>
  );
}

export default Header;
