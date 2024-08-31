import React from "react";
import useFetch from "../../hooks/useFetch";
import VacancyList from "./VacancyList";
import { API_URL } from "../../constants/index";
import { useNavigate } from 'react-router-dom';

const Vacancies = ({ count = -1 }: { count?: number }) => {
  const navigate = useNavigate(); 

  const { data, loading } = useFetch({
    url: `${API_URL}/jobs`,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vac">
            <button onClick={() => navigate("/addVac")} className="btn">
              Добавить вакансии
            </button>
          </div>
          <div className="cards">
            {data && data.slice(0, count).map((job: any, index: number) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;