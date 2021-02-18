import SpaceX from '.././SpaceX-Logo.svg';
import React, { useState, useEffect } from 'react';


function Home() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/info")
      const data = await reponse.json();
      setRockets(data);
    };
    fetchRockets();
  },
    [],
  );
  return (
    <>
      {rockets.links &&
        <>
          <div id="home_page">
            <div id="text_left_home_page">
              <p>The name of Founder : {rockets.founder}</p>
              <p>Since : {rockets.founded}</p>
              <p>Website : {rockets.links.website}</p>
            </div>
            <div id="text_right_home_page">
            <p>Company Valuation : <br/><b>{rockets.valuation}</b></p>
              <p>Total Employees : <br/><b>{rockets.employees}</b></p>
            </div>
            <img id="icon_center_page1"src={SpaceX} />
          </div>
        </>
      }

    </>
  );
}

export default Home;