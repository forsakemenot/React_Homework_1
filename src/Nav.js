import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

function Nav({ SpaceX }) {
    const { pathname } = useLocation();
    return (
        <div>

            <div className={`fixed w-full h-20 flex justify-end items-center ${pathname === "/Launch" && "nav_show"} ${pathname === "/Rocket" && "nav_show"}`}>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul className="flex flex-row justify-around menu">
                    <li className={`${pathname === "/" && "home_active"}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${pathname === "/Launch" && "launch_active"}`}>
                        <Link to="/Launch">Launchs</Link>
                    </li>
                    <li className={`${pathname === "/Rocket" && "rocket_active"}`}>
                        <Link to="/Rocket">Rockets</Link>
                    </li>

                </ul>
            </div>
            <div className="fixed w-1/6 h-20 flex justify-center items-center flex-grow ml-10 logo_spaceX">
                <img src={SpaceX} className={`${pathname === "/" && "logo_hidden"}`} />
            </div>
        </div>
    )
}
export default Nav