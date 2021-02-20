import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


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
        <div>
        {launchs.links &&
        <>
            <>
                <div className="flex flex-col h-screen container mx-auto items-center justify-center">
                    <div className="flex mx-auto">
                        <div>
                            <img className="w-52 h-52" src={launchs.links.mission_patch}></img>
                        </div>
                        <p>{launchs.mission_name}</p>
                    </div>
                </div>
            </>
        </>
        }
        </div>
    );
}
export default LaunchDetail;