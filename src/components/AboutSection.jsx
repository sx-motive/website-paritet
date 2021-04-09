import React from "react";
import bgAboutImg from "../assets/media/images/bg1.png";

function AboutSection() {
  return (
    <div className="about">
      <img src={bgAboutImg} alt="О компании Паритет Инфо" />
      <div className="container">
        <div className="box-70">
          <h2>
            <span>О</span> компании Паритет Инфо
          </h2>
          <p>
            Наша компания станет вашим надежным помощником в сфере бизнеса и
            продвижения. Миссия "Паритет-Инфо"- помогать Оренбургскому бизнесу
            успешно развиваться с помощью эффективных способов продвижения
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
