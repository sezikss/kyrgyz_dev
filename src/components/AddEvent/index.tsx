import React from "react";

const AddEvent= () => {
  return (
    <div id="addEvents">
      <div className="container">
        <div className="addEvents">
          <h1>Добавить новое мероприятие</h1>
          <p>
            Мероприятие будет опубликовано на сайте и в телеграм канале после
            проверки модератором. Мероприятия откровенно рекламного характера
            или не связанные с IT и смежными темами будут отклоненны.
          </p>
          <h4>Изображение</h4>
          <div className="addEvents--inpt">
            <input type="file" />
            <div className="addEvents--inpt__text">
              <p>Тут можно загрузить фоновое изображение карточки для привлечения{" "}
              <br /> внимания.</p>
              <p>
                Не используйте изображения с текстом, вся необходимая информация
                <br />
                будет добавлена автоматически.
              </p>
            </div>
          </div>
          <h2>
            Название <span>*</span>
          </h2>
          <div className="addEvents--inpt1">
            <input type="text" />
            <div className="addEvents--inpt1__text1">
                <p> Например “Bishkek Dev Community Fest”</p>
            </div>
          </div>
          <h2>Описание<span></span></h2>
          <div className="addEvents--inpt2">
            <input type="text" />
            <div className="addEvents--inpt2__text2">
                <p>Здесь вы можете описать мероприятие, что будет происходить, кто
                 будет выступать, какие темы будут подняты.</p>
            </div>
          </div>
          <div className="addEvents--inpt3">
          <h2>Адрес <span>*</span></h2>
          <input type="text" />
          </div>
          <div className="addEvents--inpt3">
          <h2>Дата <span>*</span></h2>
          <input type="date" />
          </div>
          <div className="addEvents--inpt4">
            <h1>Имя кнопки
            </h1>
            <select>
            <option value="">Веб-сайт</option>
            <option value="">Трансляция</option>
          </select>
          </div>
          <div className="addEvents--inpt5">
          <h2>Веб-сайт </h2>
           <input type="text" />
          </div>
          <div className="addEvents--inpt6">
          <h2>Ссылка на регистрацию </h2>
           <input type="text" />
          </div>
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;