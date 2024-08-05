import React from 'react';

import video1 from "../assets/img/video1.webp"
import video2 from "../assets/img/video3.webp"
import video3 from "../assets/img/video2.webp"
import video4 from "../assets/img/video4.webp"
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import VideoList from './VideoList';
import { ResourceItem3 } from "../Types";
import {  API_URL  } from "../../constants/index";



const Video = () => {

    const  { data, loading } = useFetch({
      url: `${ API_URL }/meetups`,      })
      console.log(data, 'meetups');

      if (loading) {
        return <div>Loading</div>;
      }
    return (
        <div id='video'>
            <div className="container">
          <div className="btn">
          <button >Добавить видео</button>
          </div>

          <div className="text">
         <h1>Все видео</h1>
          </div>
          <div className="video-card">
          {data &&
                  data.map((el: any, index: number) => {
                    return (
                      <VideoList
                        key={index}
                        title={el.title}
                        organization_name={el.organization_name}
                        cover={el.cover}
                        date={el.date}


                      />
                    );
                  })}
          </div>
        </div>
      </div>
     );
   };
export default Video;
                