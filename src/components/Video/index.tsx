import useFetch from '../../hooks/useFetch';
import VideoList from './VideoList';
import {  API_URL  } from "../../constants/index";



const Video = ({count= -1}) => {

    const  { data, loading } = useFetch({
      url: `${ API_URL }/meetups`,      })

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
                  data.slice(0, count).map((el: any, index: number) => {
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
                