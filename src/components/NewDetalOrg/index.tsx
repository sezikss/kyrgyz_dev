import React from 'react';


const NewDetalOrg = () => {
    return (
      <>
        <div id="detail">
          <div className="container">
            <div className="detail">
              <div className="detail--head">
                <img
                    src="data:image/png;base64,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"
                    alt="img"
                />
                <h1>O! dengi</h1>
              </div>
              <h3>Веб-сайт</h3>
              <h2>dengi.kg/ru</h2>
              <h3>Описание</h3>
              <div className="detail--text">
              О! - технологический лидер и мобильный оператор №1 в Кыргызстане
              с развитой IT-инфраструктурой и огромным опытом в создании 
              программного обеспечения мирового уровня.
              </div>
              <h4>Мероприятия</h4>
              <div className="detail--org">
                <div className="detail--org__org">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN52M6hq243W9xKQiPQUpZNyaDuzOKJ2cUhQ&s"
                    alt="img"
                  />
                  <div className="detail--org__org--text">
                    <h3>23 марта 2024<span>  14:00</span></h3>
                    <h1>Переходи на О! Вместе с нами.</h1>
                    <div className="detail--org__org--text__location">
                      <div className="detail--org__org--text__location--row">
                        <h3>Организатор</h3>
                        <h2>О! деньги</h2>
                      </div>
                      <div className="detail--org__org--text__location--row">
                        <h3>Локация</h3>
                        <h2>г. Бишкек, Ю.Абдрахманова 170/2</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default NewDetalOrg;