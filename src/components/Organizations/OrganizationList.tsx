import React from "react";
import { Link } from "react-router-dom";

const OrganizationsList = ({
  name = "",
  icon = "",

  events_count = 0,
  jobs_count = 0,
  meetups_count = 0,
}: {
  name: string;
  icon: string;

  events_count: number;
  jobs_count: number;
  meetups_count: number;
}) => {
  return (
    <div className="bloc2">
                <Link to={"/detalorganiz"}>
                <div className="text-nav2">
                    <h4>Компaния <span>{name}</span></h4>
                        <h4>Вакансии<span>{jobs_count}</span></h4>
                        <h4>мероприятия <span>{events_count}</span></h4>
                        <h4>видео <span>{meetups_count}</span></h4>
                    </div>
                </Link>
                    <div className="image2">:   
                    <img data-v-7ad410c8="" src={icon} alt="img"/>
                    </div>
                </div>  
  )
};

export default OrganizationsList;