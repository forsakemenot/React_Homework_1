import React, { useState, useEffect } from 'react';
import '.././App.css';
import {NavLink,  useRouteMatch} from "react-router-dom"

function Launch() {
  const [launchs, setLaunchs] = useState([]);
  let {path,url} = useRouteMatch()
  useEffect(() => {
    const fetchLaunchs = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/launches")
      const data = await reponse.json();
      setLaunchs(data);
    };
    fetchLaunchs();
  },
    [],
  );
  return (
    <>
      <>
        <div className="flex justify-center h-screen">
          {/* จัดตำแหน่ง */}
          <div className="filter_box flex w-1/6 justify-around">
            <select className="border shadow-md p-2 rounded-md">
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
            </select>
            <select className="border shadow-md p-2 rounded-md">
              <option>Falcon 1</option>
              <option>Falcon 2</option>
              <option>Falcon 3</option>
              <option>Falcon 4</option>
              <option>Falcon 5</option>
              <option>Falcon 6</option>
              <option>Falcon 7</option>
            </select>
            <select className="border shadow-md p-2 rounded-md">
              <option>ture</option>
              <option>false</option>
            </select>
          </div>
          <div className="grid grid-cols-12 page_launch cursor-pointer">
            {launchs.map((launch) => (
              <NavLink to={`LaunchDetail/${launch.flight_number}`}>
              <div className="flex flex-col col-span-4 border rounded-md m-2 p-5 shadow-md transition box_hover bg-white">
                <span>name : {launch.rocket.rocket_name}</span>
                <span>type : {launch.rocket.rocket_type}</span>
                <span>mission : {launch.mission_name}</span>
                <span>year : {launch.launch_year}</span>
                <span>date : {launch.launch_date_utc}</span>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default Launch;