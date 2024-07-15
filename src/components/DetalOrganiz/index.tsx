import React from 'react';

const DetalOrganiz = () => {
    return (
      <>
        <div id="detail">
          <div className="container">
            <div className="detail">
              <div className="detail--head">
                <img
                    src="https://play-lh.googleusercontent.com/xf5_bSz5pNxQHd2K9yig3wM8LAaDigaLhMWdjsVKwSPW0CoyFXoJNUr7Iix1hzTgyg0"
                    alt="img"
                />
                <h1>MBank</h1>
              </div>
              <h3>Веб-сайт</h3>
              <h2>mbank.kg</h2>
              <h3>Описание</h3>
              <div className="detail--text">
              MBANK - лучший мобильный банкинг в Кыргызстане.
              Наша состоит из более 2000 профессианалов,которые 
              занимаются цифровой трансформацией  и внедрением
              новых банковских технологий.

                
              Мы ищем лучших специалистов , чтобы вместе создавать 
              уникальный продукт и создать лучший сервис для
              наших клиентов. 
              Если вы готовы к новому вызову и хотите присоедениться 
              к нам, свяжитесь с нами!
              </div>
              <h4>Мероприятия</h4>
              <div className="detail--org">
                <div className="detail--org__org">
                  <img
                    src="https://economist.kg/content/images/2024/03/1920-1080--1-.jpg"
                    alt="img"
                  />
                  <div className="detail--org__org--text">
                    <h3>19 октября 2023 <span>18:00</span></h3>
                    <h1>Мастер-класс от Романа Кононова</h1>
                    <div className="detail--org__org--text__location">
                      <div className="detail--org__org--text__location--row">
                        <h3>Организатор</h3>
                        <h2>MBank</h2>
                      </div>
                      <div className="detail--org__org--text__location--row">
                        <h3>Локация</h3>
                        <h2>7мкр Офис MBank</h2>
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

export default DetalOrganiz;