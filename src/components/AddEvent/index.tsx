import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";


interface EventState {
  name: string;
  cover: string;
  location: string;
  date: string;
  buttonType: string;
  website: string;
  registrationLink: string;
  organization_name:string;
}

const AddEvent: React.FC = () => {
  const nav = useNavigate();
  const [eventState, setEventState] = useState<EventState>({
    name: "",
    cover: "",
    location: "",
    date: "",
    buttonType: "",
    website: "",
    registrationLink: "",
    organization_name:""
  });


  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEventState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleAddEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      name,
      cover,
      organization_name,
      location,
      date,
      buttonType,
      website,
      registrationLink,
    } = eventState;


    if (!name || !cover || !location || !date || !buttonType) {
      toast.error("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/events`, {
        name,
        cover,
        location,
        date,
        button_type: buttonType,
        website,
        registration_link: registrationLink,
        id: Math.random(),
        slug: "",
        created_at: "",
        updated_at: "",
        gradient: 0,
        event_type: "",
        organization_name: organization_name,
        cover_formats: [null],
      });

      if (response.data.success) {
        toast.success(response.data.message);

        setTimeout(() => {
          nav("/events");
        }, 2000);


        setEventState({
          name: "",
          cover: "",
          location: "",
          date: "",
          buttonType: "",
          website: "",
          registrationLink: "",
          organization_name:""
        });
      } else {
        toast.error(response.data.message || "Не удалось добавить мероприятие");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Не удалось добавить мероприятие"
      );
    }
  };

  return (
    <div id="addEvent">
      <div className="container">
        <form className="addEvent" onSubmit={handleAddEvent}>
          <h1>Добавить новое мероприятие</h1>
          <p>
            Мероприятие будет опубликовано на сайте и в телеграм канале после
            проверки модератором.
          </p>

          <h4>Изображение</h4>
          <div className="addEvent--inpt">
            <input
              type="file"
              name="cover"
              onChange={(e) =>
                setEventState({ ...eventState, cover: e.target.value })
              }
            />
            <div className="addEvent--inpt__text">
              <p>
                Тут можно загрузить фоновое изображение карточки для привлечения
                внимания.
              </p>
              <p>
                Не используйте изображения с текстом, вся необходимая информация
                будет добавлена автоматически.
              </p>
            </div>
          </div>

          <h2>
            Название <span>*</span>
          </h2>
          <div className="addEvent--inpt1">
            <input
              type="text"
              name="name"
              value={eventState.name}
              onChange={inputChangeHandler}
            />

            <div className="addEvent--inpt1__text1">
              <p> Например “Bishkek Dev Community Fest”</p>
            </div>
          </div>


          <h2>
          Организация <span>*</span>
          </h2>
          <div className="addEvent--inpt1">
            <input
              type="text"
              name="organization_name"
              value={eventState.organization_name}
              onChange={inputChangeHandler}
            />


          </div>

          <h2>Описание</h2>
          <div className="addEvent--inpt2">
            <input
              type="text"
              name="event_type"
              onChange={inputChangeHandler}
            />
            <div className="addEvent--inpt2__text2">
              <p>Здесь вы можете описать мероприятие, что будет происходить, кто
               будет выступать, какие темы будут подняты.</p>
            </div>
          </div>

          <h2>
            Адрес <span>*</span>
          </h2>
          <div className="addEvent--inpt3">
            <input
              type="text"
              name="location"
              value={eventState.location}
              onChange={inputChangeHandler}
            />
          </div>

          <h2>
            Дата <span>*</span>
          </h2>
          <div className="addEvent--inpt3">
            <input
              type="date"
              name="date"
              value={eventState.date}
              onChange={inputChangeHandler}
            />
          </div>

          <h2>Имя кнопки</h2>
          <div className="addEvent--inpt4">
            <select
              name="buttonType"
              value={eventState.buttonType}
              onChange={inputChangeHandler}
            >
              <option value="Веб-сайт">Веб-сайт</option>
              <option value="Трансляция">Трансляция</option>
            </select>
          </div>

          <h2>Веб-сайт</h2>
          <div className="addEvent--inpt5">
            <input
              type="text"
              name="website"
              value={eventState.website}
              onChange={inputChangeHandler}
            />
          </div>

          <h2>Ссылка на регистрацию</h2>
          <div className="addEvent--inpt6">
            <input
              type="text"
              name="registrationLink"
              value={eventState.registrationLink}
              onChange={inputChangeHandler}
            />
          </div>

          <button type="submit">Сохранить</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default AddEvent;