import React, { useState, useEffect } from 'react';
import './RocketDetail.css';
import { useParams } from "react-router-dom";

function RocketDetail() {
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
                <div className="rocket_detail flex h-screen container mx-auto items-center">
                    <div className="justify-items-center mx-5">
                        <img src={rockets.flickr_images}></img>
                    </div>
                    <div>
                        <p>{rockets.rocket_name}</p>
                        <p>{rockets.description}</p>
                    </div>
                </div>
                <div>
                </div>
            </>
        </>
    );
}
export default RocketDetail;