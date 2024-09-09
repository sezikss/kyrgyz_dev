import React from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from 'react-router-dom';
import VacancyList from "./VacancyList";

const Vacancies = ({ count = -1 }) => {
  const { data } = useFetch();
  const navigate = useNavigate(); 

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button onClick={() => navigate("/addVac")} className="btn">Добавить вакансии</button>
          </div>
          <div className="cards">
            {data && data.slice(0, count).map((job: any, index: number) => {
              return (
                <VacancyList
                  key={index}
                  companyName={job.organization_name}
                  jobTitle={job.position}
                  paymentType={job.paymentType}
                  priceFrom={job.price_from}
                  priceTo={job.price_to}
                  type={job.type}
                  city={job.city}
                  currency={job.currency}
                  salary={job.salary}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Vacancies;
