import EventsList from "./EventsList";
import useFetch from "../../hooks/useFetch";
import {  API_URL  } from "../../constants/index";
import { ResourceItem2 } from "../Types";

const Events = (
  { count = -1 }
) => {
  const { data, loading } = useFetch({
    url: `${API_URL}/events`,
  });

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button>Добавить мероприятиe</button>
        </div>
        {data &&
          data.slice(0,count).map((el: ResourceItem2, index: number) => {
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
      </div>
    </div>
  );
};

 export default Events;