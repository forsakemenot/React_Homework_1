import React, { useState, useEffect } from 'react';
import '.././App.css';
import { NavLink, useRouteMatch } from "react-router-dom"

function Launch() {
  const [launchs, setLaunchs] = useState([]);
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const [option, setOption] = useState({ year: "", name: "", success: "" });
  const handleChangeYear = (e) => {
    setYear(e.target.value);
    setOption({
      ...option,
      year: e.target.value
    });
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
    setOption({
      ...option,
      name: e.target.value
    });
  }
  const handleChangeSuccess = (e) => {
    setSuccess(e.target.value);
    setOption({
      ...option,
      success: e.target.value
    });
  }
  useEffect(() => {
    const fetchLaunchs = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/launches?launch_year=" + option.year + "&rocket_name=" + option.name + "&launch_success=" + option.success)
      const data = await reponse.json();
      setLaunchs(data);
    };
    fetchLaunchs();
  },
    [option],
  );
  return (
    <>
      <>
        <div className="flex justify-center h-screen">
          {/* จัดตำแหน่ง */}
          <div className="bg_filter_box w-full"></div>
          <div className="filter_box flex w-4/12 justify-around items-center">

            <span>NAME : </span>
            <select className="border shadow-md pa-2 rounded-md" onChange={handleChangeName} value={name}>
              <option value="">All</option>
              <option value="Falcon 1">Falcon 1</option>
              <option value="Falcon 9">Falcon 9</option>
              <option value="Falcon Heavy">Falcon Heavy</option>
            </select>
            <span>YEAR : </span>
            <select className="border shadow-md pa-2 rounded-md" onChange={handleChangeYear} value={year}>
              <option value="">All</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
            <span>MISSION : </span>
            <select className="border shadow-md pa-2 rounded-md" onChange={handleChangeSuccess} value={success}>
              <option value="">All</option>
              <option value="true">sucess</option>
              <option value="false">no-sucess</option>
            </select>
          </div>
          <div className="grid  page_launch cursor-pointer md:grid-cols-12 sm:grid-cols-3">
            {launchs.map((launch) => (
              <div className="flex flex-col col-span-4 border rounded-md shadow-md transition box_hover bg-white md:m-2 md:p-5 sm:m-1 sm:p-2">
                <NavLink to={`LaunchDetail/${launch.flight_number}`} className="flex items-center">
                  <div className="w-2/6 mar-x-1">
                    <img src={launch.links.mission_patch_small} />
                  </div>
                  <div className="flex flex-col text-xl">
                    <span className="text_in_card">name : {launch.rocket.rocket_name}</span>
                    <span className="text_in_card">year : {launch.launch_year}</span>
                    <span className="text_in_card">mission : {launch.mission_name}</span>
                  </div>
                </NavLink>
              </div>

            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default Launch;