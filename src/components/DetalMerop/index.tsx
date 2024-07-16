import React from "react";
import events1 from "../../components/assets/img/events1.webp";
import events2 from "../../components/assets/img/detalEvents1.webp";

const DetalMerop = () => {
  return (
    <>
      <div id="eventsDetailTitle">
        <div
          className="eventsDetailTitle--img"
          style={{
            backgroundImage: `url(${events1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container eventsDetail">
          <div className="eventsDetailTitle">
            <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>

            <div className="eventsDetailTitle--date1">
              <div className="eventsDetailTitle--date1__block1">
                <h4>Когда</h4>
                <h3>12 сентября 2023</h3>
              </div>
              <div className="eventsDetailTitle--date1__block1">
                <h4>Организатор</h4>
                <h3>Kolesa Group</h3>
              </div>

              <div className="eventsDetailTitle--date1__block1">
                <h4>Локация</h4>
                <h3>Коворкинг-резорт ololoAkJol</h3>
              </div>
            </div>

            <div className="eventsDetailTitle--date">
              <img src={events2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="events-down">
        <div className="container">
          <div className="events-down">
            <button>Веб-сайт</button>

            <button>Регистрация</button>
            <div className="events-down--text">
              <p>
                🎉 **APPLY NOW for InkubasiaLAB 2024’s Machine Learning AI
                Bootcamp!{" "}
              </p>
              <p>
                {" "}
                ** Do you want to learn about what a day in the life of a modern
                AI company looks like?{" "}
              </p>
              <p>
                Join us for a 1-week bootcamp August 25-31 in co-working resort
                ololoAkJol in Issyk Kul with 15 Silicon Valley mentors <br />{" "}
                companies such as Google, LinkedIn, Meta.
              </p>
              <p>You’ll learn how to:</p>

              <p>
                ✓ Solve business-impacting data problems <br />
                 ✓ Apply machine
                learning models <br />
                 ✓ Learn the basics of using Generative AI
              </p>

              <p>🌟 Training will be taught in English only</p>

              <p>🤩 Apply by July 5th to get the early bird discount

</p>
<p>🌐 Click the link in our profile to learn more (including cost details) and APPLY NOW. Spaces are limited! 💼💡</p>

<p>🎉 **ПОДАВАЙТЕ ЗАЯВКУ

на буткемп по машинному обучению AI от InkubasiaLAB 2024!**</p>

<p>Хотите узнать, как проходит день в современной компании, занимающейся ИИ?</p>

<p>Присоединяйтесь к нашему недельному буткемпу с 25 по 31 августа в коворкинг-резорт ololoAkJol на Иссык-Куле! Вас ждут 15  <br />
мега-наставников из Кремниевой долины, работающих в компаниях таких как Google, LinkedIn и Meta.</p>

<p>Вы научитесь:</p>

<p>✓ Решать проблемы с данными, влияющими на бизнес<br />

✓ Применять модели машинного обучения <br />

✓ Использовать основы генеративного ИИ</p>

<p>🌟 Занятия будут на английском.</p>

<p>🤩 Early birds - Подавайте заявку до 5 июля, чтобы получить скидку</p>

<p>🌐 Переходите по ссылке в шапке профиля, чтобы ПОДАТЬ ЗАЯВКУ и узнать больше (включая стоимость). <br />

Места ограничены, поторопитесь! 💼💡</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalMerop;
