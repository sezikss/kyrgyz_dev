import React from "react";

const DetailVacancy = () => {
  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancies">
          <div className="vacancy">
            <div className="vacancy--head">
              <h1>Team Leader</h1>
              <h3>Компания</h3>
              <h2>Validon Agency</h2>
              <h3>Тип</h3>
              <h2>Удаленная работа</h2>
              <h3>Оклад</h3>
              <h2>От 90000 RUB в месяц</h2>
            </div>
            <div className="vacancy--descrtn">
              <h3>Описание вакансии</h3>
              <div className="vacancy--descrtn__block">
                <p>
                  Мы - международная финансовая компания. На рынке уже более 10
                  лет, стабильный работодатель с положительной динамикой роста
                </p>
                <p>
                  Если ты инициативный, хочешь хороший доход, хочешь расти и
                  развиваться вместе с нами и не хочешь быть привязан к офису –
                  то Мы ждем именно тебя! 
                </p>
                <p>Требования:</p>
                <ul>
                  <li>ПК/ноутбук;</li>
                  <li>Гарнитура;</li>
                  <li>Камера;</li>
                  <li>Интернет.</li>
                  <li>
                    Опыт руководителя команды и в продажах , иметь знания в
                    инвестициях или криптовалюте;
                  </li>
                </ul>
                <p>Обязанности:</p>
                <ul>
                  <li>Руководство командой;</li>
                  <li>Прослушка и суфлирование звонков сотрудников;</li>
                  <li>Адаптация новых сотрудников;</li>
                  <li>Внесение смен;</li>
                  <li>Контроль выхода на работу сотрудников;</li>
                  <li>Ведение отчетности:</li>
                  <li>Донесение актуальной информации;</li>
                </ul>
                <p>Условия:</p>
                <ul>
                  <li>График работы 6/1 с 9:00 до 19:00 по МСК;</li>
                  <li>
                    Оклад 90 000 рублей на руки + бонусы от продаж команды;
                  </li>
                  <li>
                    Каждый месяц розыгрыш призов для сотрудников(техника,
                    денежные призы);
                  </li>
                  <li>Для новых сотрудников - еженедельные выплаты зп;</li>
                </ul>
              </div>
            </div>
            <div className="vacancy--connection">
              <label>Telegram</label>
              <a href="#">@sahtvn2</a>
              <label>Телефон</label>
              <a href="#">+996 995 166 500</a>
            </div>
          </div>
          <div className="similarVacancy">
            <h3>Похожие вакансии:</h3>
            <div className="similarVacancy--abt">
              <div className="similarVacancy--abt__block">
                <h4>Программист 1С в ОсОО СК "N Group"</h4>
                <h5>50000 - 80000 KGS в месяц - Офис / Бишкек</h5>
              </div>
              <div className="similarVacancy--abt__block">
                <h4>
                  Support Специалист по сопровождению IT Продуктов. в RetMind
                </h4>
                <h5>20000 - 40000 KGS в месяц - Офис / Бишкек</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailVacancy;