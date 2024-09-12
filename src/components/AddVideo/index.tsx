import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";

interface EventState {
  title: string;
  cover: string;
  slug: string;
  date: string;
  created_at: string;
  updated_at: string;
  gradient: number;
  organization_name: string;
}

const AddVideo: React.FC = () => {
  const nav = useNavigate();
  const [VideoState, setVideoState] = useState<EventState>({
    title: "",
    cover: "",
    date: "",
    created_at: "",
    updated_at: "",
    gradient: 0,
    slug: "",
    organization_name: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVideoState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddVideo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      title,
      cover,
      date,
      created_at,
      updated_at,
      gradient,
      slug,
      organization_name,
    } = VideoState;

    if (!title || !cover || !organization_name || !date) {
      toast.error("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/meetups`, {
        id: 0,
        title,
        cover,
        slug: "",
        date,
        created_at: "",
        updated_at: "",
        gradient: 0,
        organization_name: organization_name,
        cover_formats: [
          {
            type: "",
            url: "",
          },
        ],
      });

      if (response.data.success) {
        toast.success(response.data.message);

        setTimeout(() => {
          nav("/events");
        }, 2000);

        setVideoState({
          title: "",
          cover: "",
          date: "",
          created_at: "",
          updated_at: "",
          gradient: 0,
          slug: "",
          organization_name: "",
        });
      } else {
        toast.error(response.data.message || "Не удалось добавить video");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Не удалось добавить video");
    }
  };

  return (
    <div id="addVideo">
      <div className="container">
        <form className="addVideo" onSubmit={handleAddVideo}>
          <h1>Добавить новое видео</h1>
          <p>
            Видео будет опубликованно на сайте и в телеграм канале после
            проверки модератором. Трансляции и видео откровенно рекламного
            характера или не
            <br />
            связанные с IT и смежными темами будут отклоненны.
          </p>
          <h2>Изображение</h2>
          <div className="addVideo--inpt1">
            <input
              onChange={inputChangeHandler}
              value={VideoState.cover}
              type="text"
              name="cover"
            />
            <div className="addVideo--inpt1__text">
              <p>
                Тут можно загрузить фоновое изображение карточки для привлечения
                <br />
                внимания.
              </p>
              <p>
                Не используйте изображения с текстом, вся необходимая информация
                <br />
                будет добавлена автоматически.
              </p>
            </div>
          </div>

          <div className="addVideo--inpt2">
            <h2>
              Организация <span>*</span>
            </h2>
            <input
              onChange={inputChangeHandler}
              value={VideoState.organization_name}
              type="text"
              name="organization_name"
            />
          </div>

          <h2>
            Название<span>*</span>
          </h2>
          <div className="addVideo--inpt3">
            <input
              type="text"
              onChange={inputChangeHandler}
              value={VideoState.title}
              name="title"
            />
            <div className="addVideo--inpt3__text3">
              <p>Например “Meetup #1: ML in production”</p>
            </div>
          </div>

          <h2>
            Описание<span>*</span>
          </h2>

          <div className="addVideo--inpt4">
            <input type="text" />
            <div className="addVideo--inpt4__text4">
              <p>
                Тут можно загрузить фоновое изображение карточки для привлечения
                внимания.
              </p>
            </div>
          </div>

          <h2>
            Ссылка на YouTube или ID ролика
            <span>*</span>
          </h2>

          <div className="addVideo--inpt5">
            <input type="text" />
            <div className="addVideo--inpt5__text5">
              <p>
                Вся мета информация будет взята из ролика. Если планируете
                <br />
                трансляцию наперед создайте ее на YouTube и добавьте ссылку тут.
              </p>
            </div>
          </div>

          <div className="addVideo--inpt6">
            <h2>Дата</h2>
            <input
              type="date"
              onChange={inputChangeHandler}
              value={VideoState.date}
              name="date"
            />
          </div>

          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;