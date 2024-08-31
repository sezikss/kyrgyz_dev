import { Link } from "react-router-dom";

type VacancyListProps = {
  companyName: string;
  jobTitle: string;
  paymentType: string;
  priceFrom: number;
  priceTo: number;
  type: string;
  city: string;
  currency: string;
  salary: string;
};

const VacancyList: React.FC<VacancyListProps> = ({
  companyName,
  jobTitle,
  paymentType,
  priceFrom,
  priceTo,
  type,
  city,
  currency,
  salary,
}) => {
  return (
    <div className="cards">
      <Link to={"/detailvacancy"}>
        <div className="blocks">
          <div className="company">
            <p>Компания</p>
            <h3>{companyName}</h3>
          </div>
          <div className="dol">
            <p>Должность</p>
            <h3>{jobTitle}</h3>
          </div>
          <div className="oclad">
            <p>Оклад</p>
            <h3>{`${priceFrom} - ${priceTo} ${currency} в ${paymentType}`}</h3>
          </div>
          <div className="office">
            <p>Тип</p>
            <h3>{`${type}/ ${city}`}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VacancyList;