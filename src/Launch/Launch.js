import React, { useState, useEffect } from 'react';
import '.././App.css';
function Launch() {
  const [launchs, setLaunchs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [option, setOption] = useState({year:"",name:""});
  const handleChangeYear = (e) => {
    setYear(e.target.value);
    setOption({
      ...option,
      year:e.target.value
    });
  }
  const handleChangeName = (e) => {
    setName(e.target.value);
    setOption({
      ...option,
      name:e.target.value
    });
  }
  useEffect(() => {
    const fetchLaunchs = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/launches?launch_year=" + option.year + "&rocket_name=" + option.name)
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
          <div className="filter_box flex w-1/6 justify-around">
            <select className="border shadow-md p-2 rounded-md" onChange={handleChangeYear} value={year}>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option>2005</option>
            </select>
            <select className="border shadow-md p-2 rounded-md" onChange={handleChangeName} value={name}>
              <option value="Falcon 1">Falcon 1</option>
              <option value="Falcon 9">Falcon 9</option>
              <option value="Falcon Heavy">Falcon Heavy</option>
            </select>
            <select className="border shadow-md p-2 rounded-md">
              <option>ture</option>
              <option>false</option>
            </select>
          </div>
          <div className="grid grid-cols-12 page_launch">
            {launchs.map((rockets) => (
              <div className="flex flex-col col-span-4 border rounded-md m-2 p-5 shadow-md transition box_hover bg-white">
                <span>name : {rockets.rocket.rocket_name}</span>
                <span>type : {rockets.rocket.rocket_type}</span>
                <span>mission : {rockets.mission_name}</span>
                <span>year : {rockets.launch_year}</span>
                <span>date : {rockets.launch_date_utc}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default Launch;