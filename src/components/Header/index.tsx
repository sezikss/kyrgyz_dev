import React, { useState } from "react";
import logoHeader from "../assets/img/Logo-header.svg";
import logoHeader1 from "../assets/img/Logo-header.svg";
import { RiLoginCircleLine } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logoHeader} alt="img" />
          <div className="header--nav">
            <Link to={"/вакансии"}>Вакансии</Link>
            <Link to={"/мероприятия"}>Мероприятия</Link>
            <Link to={"/видео"}>Видео</Link>
            <Link to={"/организации"}>Организации</Link>
            <Link to={"/cooбщество"}>Сообщество</Link>
          </div>


        <h1 onClick={() => setModalOpen(true)}><TfiMenu /></h1> 
      {isModalOpen && (
        <div className="header--modal">
          <div className="header--modal__content">
         <div className="header--modal__content--img">
         <img src={logoHeader1} alt="img" style={{
          width:"90px"
         }} />
          <span onClick={() => setModalOpen(false)}>x</span>
         </div>
         <Link to={"/вакансии"}>Вакансии</Link>
            <Link to={"/мероприятия"}>Мероприятия</Link>
            <Link to={"/видео"}>Видео</Link>
            <Link to={"/организации"}>Организации</Link>
            <Link to={"/cooбщество"}>Сообщество</Link>
            
          </div>
        </div>
      )}
          <div className="header--login">
            <div className="header--login__btn">
              <span>
                <RiLoginCircleLine />
              </span>
            </div>
            <div className="header--login__btn2">
              <span>Войти</span>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;

