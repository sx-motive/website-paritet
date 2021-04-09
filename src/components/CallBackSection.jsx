import React from "react";
import { Link } from "react-router-dom";

import imgGirl from "../assets/media/images/girl.png"

function CallBackSection() {
  return (
    <div className="call-back">
      <div className="container flex flex-between flex-row">
        <div className="box-50">
          <h2>
            <span>О</span>ставьте заявку сегодня!
          </h2>
          <p>
            Мы всегда рады обсудить новый проект. Если у вас возникли вопросы
            или-же вы хотите оставить заявку на подключение, оставьте свои
            контакты и мы перезвоним в самое ближайшее время!
          </p>
          <div className="btn-theme">
            <Link to="../contacts">
              Оставить заявку <ion-icon name="chevron-forward"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="box-50 ">
          <img src={imgGirl} />
        </div>
      </div>
    </div>
  );
}

export default CallBackSection;
