import React from "react";
import detal1 from "../../components/assets/img/video1.webp";

const VideoDetail = () => {
  return (
    <>
      <div id="videoDetailTitle">
        <div
          className="videoDetailTitle--img"
          style={{
            backgroundImage: `url(${detal1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container videoDetail">
          <div className="videoDetailTitle">
            <h1>
              ChatGPT — революция или мода? Как <br />
              нейросети могут помочь в работе
            </h1>
            <div className="videoDetailTitle--date">
              <div className="videoDetailTitle--date__block">
                <h4>Когда</h4>
                <h3>12 сентября 2023</h3>
              </div>
              <div className="videoDetailTitle--date__block">
                <h4>Организатор</h4>
                <h3>Kolesa Group</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="video-content">
        <div className="container">
          <div className="video-content">
            <iframe
              width="100%"
              height="585"
              src="https://www.youtube.com/embed/C2ICic8y5D8"
              title="ChatGPT — революция или мода? Как нейросети могут помочь в работе. Kolesa Podcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="video-down">
        <div className="container">
          <div className="video-down">
            <button>Перейти на YouTube</button>
            <div className="video-down--text">
              <p>
                Завершаем пятый сезон нашумевшей темой про генеративные модели.
                Что обсуждали:
              </p>
              <p>
                - как правильно применять ChatGPT в своей работе <br /> -
                влияние широкого распространения нейросетей <br />- бизнес-риски
                применения искусственного интеллекта
              </p>
              <p>
                В гостях были: <br />· Хамбар Дусалиев — Head of ML & Operations at
                Kolesa Group <br /> · Камалхан Артыкбаев — Lead Computer vision
                Engineer at Parqour
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
