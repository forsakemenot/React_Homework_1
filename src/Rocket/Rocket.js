import React, { useState, useEffect } from 'react';

function Rockets() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/rockets")
      const data = await reponse.json();
      setRockets(data);
    };
    fetchRockets();
  },
    [],
  );
  return (
    <>
      <>
        {rockets.map((rocket) => (
          <ul>
          <li>{rocket.rocket_name}</li>
          <li>{rocket.rocket_type}</li>
          </ul>


        ))}
      </>
    </>
  );
}
export default Rockets;