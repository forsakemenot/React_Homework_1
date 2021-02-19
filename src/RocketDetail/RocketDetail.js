import React, { useState, useEffect } from 'react';
import './RocketDetail.css';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


function RocketDetail() {
    let history = useHistory();
    function handleClick(){
        history.push("/Rocket");
    }
    let { rocketId } = useParams();
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        const fetchRockets = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
            const data = await response.json();
            setRockets(data);
        };
        fetchRockets();
    },
        [],
    );
    return (
        <>
            <>
                <div className="flex flex-col h-screen container mx-auto items-center justify-center">
                    <div className="flex flex-col justify-center rocket_detail w-3/6 rounded-md shadow-md bg-white">
                        <div className="flex justify-center mb-5 m-5">
                            <img className="rounded-md" src={rockets.flickr_images}></img>
                        </div>
                        <div className="text-center mb-5 justify-center flex flex-col w-full">
                            <p className="text-3xl mb-2 font-medium uppercase">{rockets.rocket_name}</p>
                            <p className="text-indigo-600">First flight : {rockets.first_flight}</p>
                            <p className="text-indigo-600">country : {rockets.country}</p>
                            <div className="justify-center flex ml-12 mr-12">
                                <p className="m-1 ">{rockets.description}</p>
                            </div>
                        </div>
                    </div>
                        <button onClick={handleClick} class="w-3/12 bg-yellow-600 hover:bg-yellow-300 transition text-white font-bold py-2 px-4 rounded-full mt-3">
                            BACK</button>
                </div>
                <div>
                </div>
            </>
        </>
    );
}
export default RocketDetail;