import React from "react";
import bgHeroImg from "./assets/media/images/bg1.png";

function Contacts() {
  return (
    <main>
      <div className="hero">
        <img src={bgHeroImg} alt="Паритет Инфо" />
        <div className="container">
          <div className="box-70">
            <h1 className="is-animated-1">Контакты</h1>
          </div>
        </div>
      </div>
      <div className="contacts">
        <div className="container flex">
          <div className="box-100 flex flex-between">
          <div className="box-30">
          <ion-icon name="location-outline"></ion-icon><a href="tel:#"> ул. 60 лет Октября, 17/1, Оренбург</a>
       
          </div>
          <div className="box-30">

          <ion-icon name="mail-outline"></ion-icon> <a href="tel:#"> office@paritet.studio</a>

          </div>
          <div className="box-30">

          <ion-icon name="call-outline"></ion-icon> <a href="tel:#"> +7 (3532) 44-60-44</a>
          </div>
          </div>
          <div className="box-100">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.3509991789765!2d55.14429351597933!3d51.78147079844756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417bf7374b4037c1%3A0xae8fd1191665ed5d!2z0YPQuy4gNjAg0LvQtdGCINCe0LrRgtGP0LHRgNGPLCAxNy8xLCDQntGA0LXQvdCx0YPRgNCzLCDQntGA0LXQvdCx0YPRgNCz0YHQutCw0Y8g0L7QsdC7LiwgNDYwMDIx!5e0!3m2!1sru!2sru!4v1617720913145!5m2!1sru!2sru" 
          width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
