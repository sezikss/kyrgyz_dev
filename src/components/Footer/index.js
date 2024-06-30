import React from 'react';
import logo from "../assets/img/devkg-logo.white.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";



const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='footer'>
              <span>  <img src={logo} alt="" /></span>
              <div className='footer--center'>
                 <div className='footer--center__text'>
                    <p> Мы — сообщество разработчиков Кыргызстана.
                       Данный проект поддерживается и администрируется членами нашего сообщества.</p>
                       <img src="//www.net.kg/img.php?id=6620&amp;refer=https%3A//devkg.com/ru/events/chto-takoe-avtomatizaciya-testirovaniya-i-s-chem-eyo-edyat-software-testers-from-kg-1097&amp;page=https%3A//devkg.com/ru&amp;c=yes&amp;java=now&amp;razresh=1920x1080&amp;cvet=24&amp;jscript=1.3&amp;rand=0.06055120196641606" alt="Net.kg counter" />
                 </div>
                 

                 <div className='footer--center__logo'>
                 <a><FaTelegramPlane /></a>
                 <a><FaSquareFacebook/></a>
                 <a><FaGithubAlt /></a>
                 <a><IoLogoYoutube /></a>


                 </div>

              </div>
              
        
                </div>
            </div>
         
        </div>
    );
};

export default Footer;