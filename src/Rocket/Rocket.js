import React, { useState, useEffect } from 'react';
import './Rocket.css';
import { NavLink, useRouteMatch } from "react-router-dom"


function Rockets() {
  const [rockets, setRockets] = useState([]);
  let { path, url } = useRouteMatch()
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
        <div className="h-full flex rocket_container">
          <div className="container flex mx-auto items-center rockets_body">
            {/* จัดตำแหน่ง */}
            <div className="grid lg:grid-cols-12 mx-4 ">
              {/* เนื้อหาข้างใน */}
              {rockets.map((rocket) => (
                <div className="lg:col-span-3 mx-4 justify-items-center lg:my-0 md:col-span-12" style={{zIndex:1}}>
                  <NavLink to={`RocketDetail/${rocket.rocket_id}`}>
                    <img className="cursor-pointer object-cover lg:h-full lg:w-auto rounded-lg transition hover:opacity-25 rocketcard md:w-full shadow-lg" src={rocket.flickr_images}></img>
                    <div className="title">
                      <p className="title_text text-4xl opacity-100 font-semibold uppercase">{rocket.rocket_name}</p>
                      </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default Rockets;