import React, { useState, useEffect } from 'react';
import './Rocket.css';
import {NavLink,  useRouteMatch} from "react-router-dom"


function Rockets() {
  const [rockets, setRockets] = useState([]);
  let {path,url} = useRouteMatch()
  useEffect(() => {
    const fetchRockets = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/rockets")
      const data = await reponse.json();
      setRockets(data);
    };
    fetchRockets();
  },
    [],
  );
  return (
    
    <>
      <>
      {/* ทั้งก้อน */}
        <div className="container h-screen flex mx-auto items-center"> 
      {/* จัดตำแหน่ง */}
          <div className="grid grid-cols-12 mx-4 ">
      {/* เนื้อหาข้างใน */}
            {rockets.map((rocket) => (
              <div className="col-span-3 mx-4 justify-items-center h3/5">
                <NavLink to={`RocketDetail/${rocket.rocket_id}`}>
                    <img className="cursor-pointer object-cover h-48 h-full rounded-lg transition hover:opacity-25 rocketcard" src={rocket.flickr_images}></img>
                    <p className="title text-2xl font-bold">{rocket.rocket_name}</p>
                  </NavLink>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default Rockets;