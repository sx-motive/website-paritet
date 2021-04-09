import React from "react";
import { Link } from "react-router-dom";

function ToggleMenu() {

function toggleMenu() {
    document
      .getElementsByClassName("menu-toggled-wrapper")[0].classList.toggle("menu-wrapper-show");
  }

  return (
    // show/hide menu
    <div className="menu-toggled-wrapper">
      <div className="box-100">
        <h4>Паритет Инфо</h4>
        <ul>
          <li>
            <Link onClick={toggleMenu} to="/">Главная</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="../call/call-center">Колл-центр</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="../websites">Разработка сайтов</Link>
          </li>
          <li>
            <a href="https://4geo.ru">Справочник 4гео</a>
          </li>
          <li>
            <Link onClick={toggleMenu} to="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="box-100">
        <h4>Контакты</h4>
        <ul>
          <li>
            <a href="tel:+7 (3532) 44-60-23">
              <ion-icon name="call-outline"></ion-icon> +7 (3532) 44-60-23
            </a>
          </li>
          <li>
            {" "}
            <a href="malito:call-center@560560.ru">
              <ion-icon name="mail-outline"></ion-icon> office@560560.ru
            </a>
          </li>
        </ul>
      </div>
      <div className="box-100">
        <a href="#">
          <ion-icon name="logo-vk"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="at-outline"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default ToggleMenu;
