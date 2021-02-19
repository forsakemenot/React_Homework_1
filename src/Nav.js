import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function Nav({SpaceX}) {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div>
            <div className="fixed w-1/6 h-20 flex justify-center items-center flex-grow ml-10">
                <img src={SpaceX} style={{zIndex:3}}/>
            </div>
            <div className={`fixed w-full h-20 flex justify-end items-center ${pathname === "/Launch" && "nav_show"}`}>
                <ul className="flex justify-around w-1/6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Launch">Launchs</Link>
                    </li>
                    <li>
                        <Link to="/Rocket">Rockets</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Nav