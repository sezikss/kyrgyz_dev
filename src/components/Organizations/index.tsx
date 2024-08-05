import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import loading1 from "../../components/assets/img/loiding.svg"
import OrganizationsList from './OrganizationList';
import {  API_URL  } from '../../constants/index';
import { ResourceItem4 } from '../Types';

const  Organizations = () => {
    const  { data, loading } = useFetch({
    url: `${ API_URL }/organizations` 
    }) 
    if (loading) {
        return <div>Loading</div>;
      }
    
    return (
            <div id='organizations'>
            <div className="organizations">
            {data &&
                data.map((el: ResourceItem4, index: number) => {
                    return (
                      <OrganizationsList
                        key={index}
                        name={el.name}
                        icon={el.icon}
                        events_count ={el.events_count}
                        jobs_count={el.jobs_count}
                        meetups_count={el.meetups_count}
                       />
                    );
                  })}
            </div>
     </div>
                  
    );
};

export default Organizations;