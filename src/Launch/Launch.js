import React, { useState, useEffect } from 'react';
import '.././App.css';
import { NavLink, useRouteMatch } from "react-router-dom"

function Launch() {
  const [launchs, setLaunchs] = useState([]);
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const [option, setOption] = useState({ year: "", name: "", success: "" });
  const [offset, setOffset] = useState(0)
  const [showPage, setShowpage] = useState(1)

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
  const handleChangePage = (e) => {
    let e_pointer = e === '+' ? '1' : e === '-' ? '-1' : ''
    let page = offset + (e_pointer * 9)
    setOffset(page);


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
      const reponse = await fetch("https://api.spacexdata.com/v3/launches?launch_year=" + option.year + "&rocket_name=" +
        option.name + "&launch_success=" + option.success + '&limit=9' + '&offset=' + offset)
      const data = await reponse.json();
      setLaunchs(data);
    };
    fetchLaunchs();
  },
    [option, offset],
  );
  return (
    <>
      <>
        <div className="flex justify-center h-screen">
          {/* จัดตำแหน่ง */}
          <div className="bg_filter_box w-full"></div>
          <div className="filter_box flex w-full flex-row justify-between items-center">

            <div className="flex ml-10 items-center">
              <span>NAME : </span>
              <select className="border shadow-md pa-2 rounded-md mx-2" onChange={handleChangeName} value={name}>
                <option value="">All</option>
                <option value="Falcon 1">Falcon 1</option>
                <option value="Falcon 9">Falcon 9</option>
                <option value="Falcon Heavy">Falcon Heavy</option>
              </select>
              <span>YEAR : </span>
              <select className="border shadow-md pa-2 rounded-md mx-2" onChange={handleChangeYear} value={year}>
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
              <select className="border shadow-md pa-2 rounded-md mx-2" onChange={handleChangeSuccess} value={success}>
                <option value="">All</option>
                <option value="true">sucess</option>
                <option value="false">no-sucess</option>
              </select>
            </div>

            <div className="flex mr-10">
              <div class="flex items-center w-full">
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between justify-center">
                  <div className="flex justify-center">
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <a onClick={() => handleChangePage('-')}
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </a>
                      <a class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        {(offset / 9) + 1}
                      </a>
                      <a onClick={() => handleChangePage('+')}
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="grid page_launch cursor-pointer md:grid-cols-12 sm:grid-cols-3">
            {launchs.map((launch) => (
              <div
                className="flex flex-col col-span-4 border rounded-md shadow-md transition box_hover bg-white md:m-2 md:p-5 sm:m-1 sm:p-2">
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