import SpaceX from '.././SpaceX-Logo.svg';
import React, { useState, useEffect } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
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
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <div className="over_flow_hiden">
      {rockets.links &&
        <>
          <div id="home_page">
            <div id="text_left_home_page">
              <p>The name of Founder : {rockets.founder}</p>
              <p>Since : {rockets.founded}</p>
              <p>Website : {rockets.links.website}</p>
            </div>
            <div id="text_right_home_page">
            <p>Company Valuation : <br/><b>{numberWithCommas(rockets.valuation)}</b></p>
              <p>Total Employees : <br/><b>{numberWithCommas(rockets.employees)}</b></p>
            </div>
            <img id="icon_center_page1"src={SpaceX} />
          </div>
        </>
      }

    </div>
  );
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}

export default Home;