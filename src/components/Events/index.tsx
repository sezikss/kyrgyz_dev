import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";

const Events = () => {

  const events_url = 'http://3.38.98.134/events'
 
  const  { data, loading } = useFetch({
    url:events_url
  })
  console.log(data, 'events');

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        <div className="events">
          <div className="events--foto">
          <Link to={"/detalmerop"}>  <img src={events_url} alt="img" /></Link>
            <div className="events--foto__text">
              <h4>
                25 августа 2024 <span>17:00</span>
              </h4>
              <h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>
        {data &&
                  data.map((el: any, index: number) => {
                    return (
                      <EventsList
                        key={index}
                        location={el.location}
                        name={el.name}
                        organization_name={el.organization_name}
                        date={el.date}

                      />
                    );
                  })}

              <div className="events--foto__text--par">
                <div className="events--foto__text--par__kor1">
                  <h6>Организатор</h6>
                  <h2>InkubasiaLAB</h2>
                </div>
                <div className="events--foto__text--par__kor2">
                  <h6>Когда</h6>
                  <h2>Коворкинг-резорт ololoAkJol</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                }

 export default Events;