import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './LaunchDetail.css'


function LaunchDetail() {
    let history = useHistory();
    function handleClick() {
        history.push("/Launch");
    }
    let { flight_number } = useParams();
    const [launchs, setLaunchs] = useState([]);
    useEffect(() => {
        const fetchLaunchs = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
            const data = await response.json();
            setLaunchs(data);
        };
        fetchLaunchs();
    },
        [],
    );
    return (
        <div className="body_launch w-full">
            {launchs.links &&
                <>
                    <>
                        <div className="flex h-screen container mx-auto items-center justify-center ">
                            <div className="flex flex-row justify-center">
                                <div className="flex justify-center items-center mr-20">
                                    <img className="justify-center" src={launchs.links.mission_patch_small}></img>
                                </div>
                                <div className='flex flex-col justify-center items-center w-6/12'>
                                    <div className="flex w-full">
                                        <p className="text-3xl mb-2 uppercase text-left">Mission : {launchs.mission_name}</p>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="bg-blue-500 w-52 rounded-md justify-center flex mb-2">
                                            <p className="uppercase text-white">
                                                Rocket Name : {launchs.rocket.rocket_id}
                                            </p>
                                        </div>
                                        {launchs.details
                                            ? <div className="ml-5 bg-green-500 w-52 rounded-md justify-center flex mb-2"><p className="uppercase text-white">LAUNCH : SUCCESS</p></div>
                                            : <div className="ml-5 bg-red-500 w-52 rounded-md justify-center flex mb-2"><p className="uppercase text-white">LAUNCH : FAILURE</p></div>
                                        }
                                    </div>
                                    <div className="flex w-full flex-col">
                                        {launchs.details
                                            ? <p className="text-xl text-left">{launchs.details}</p>
                                            : <p className="text-xl text-left text-gray-400 blink">- NO ADDITIONAL DESCRIPTION ABOUT THIS MISSION -</p>
                                        }
                                        <div><button onClick={handleClick} class="w-2/12 bg-yellow-400 hover:bg-yellow-300 transition text-white font-bold py-2 px-4 rounded mt-8 back_btn">BACK</button></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                </>
            }
        </div>
    );
}
export default LaunchDetail;

{/* <div className="bg-blue-500 w-52 rounded-md justify-center flex mb-2">
                                            <p>
                                                THE MISSION : {launchs.mission_name}
                                            </p>
                                        </div>
                                        <div className="bg-blue-500 w-52 rounded-md justify-center flex uppercase ">
                                            <p>
                                                Launch : {launchs.launch_success? 'SUCCESS':'FAILURE'}
                                            </p>
                                        </div> */}