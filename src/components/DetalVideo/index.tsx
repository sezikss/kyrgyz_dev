import React from "react";
import detal1 from "../../components/assets/img/video1.webp";

const DetalVideo = () => {
  return (
    <div>
       
        <div className="detalvideo-container">
      <div
        id="detalvideo"
        className="background"
        style={{
          backgroundImage: `url(${detal1})`,
        }}
      />
      <div className="content">
        <h1>
          ChatGPT — революция или мода? Как <br /> нейросети могут помочь в работе
        </h1>
        <div className="details">
          <div className="detail">
            <h6>Организатор</h6>
            <h3>Kolesa Group</h3>
          </div>
          <div className="detail">
            <h6>Когда</h6>
            <h3>12 сентябрь 2023</h3>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="1250"
            height="450"
            src="https://www.youtube.com/embed/C2ICic8y5D8"
            title="ChatGPT — революция или мода? Как нейросети могут помочь в работе. Kolesa Podcast"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    <div className="container">
    <p>Завершаем пятый сезон нашумевшей темой про генеративные модели. Что обсуждали:</p>

    <p>- как правильно применять ChatGPT в своей работе<br />

- влияние широкого распространения нейросетей<br />

- бизнес-риски применения искусственного интеллекта</p>

<p>В гостях были: <br />

· Хамбар Дусалиев — Head of ML & Operations at Kolesa Group <br />

· Камалхан Артыкбаев — Lead Computer vision Engineer at Parqour</p>
    </div>

    
    </div>
    
  );
};

export default DetalVideo;






