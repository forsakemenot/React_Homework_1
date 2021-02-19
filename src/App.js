import logo from './logo.svg';
import SpaceX from './SpaceX-Logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './Home/Home.js';
import Rocket from './Rocket/Rocket.js';
import Launch from './Launch/Launch.js';
import RocketDetail from "./RocketDetail/RocketDetail.js"
import Nav from "./Nav"


function App() {
  //  const {pathname} = useLocation();
  // const pathname = false;
  return (
    <Router>
      <div>
        <Nav SpaceX={SpaceX}/>
        {/* <div className="fixed w-1/6 h-20 flex justify-center items-center flex-grow ml-10">
          <img src={SpaceX} />
        </div>
        <div className="fixed w-full h-20 flex justify-end items-center">
          <ul className="flex justify-around w-1/6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Launch" className={`nav ${pathname === "/Launch" && "nav_show"}`}>Launchs</Link>
            </li>
            <li>
              <Link to="/Rocket">Rockets</Link>
            </li>

          </ul>
        </div> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Launch">
            <Launch />
          </Route>
          <Route path="/Rocket">
            <Rocket />
          </Route>
          <Route path="/RocketDetail/:rocketId">
            <RocketDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
