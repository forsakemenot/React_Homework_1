import React, { useState, useEffect } from 'react';

function Launch() {
  const [launchs, setLaunchs] = useState([]);
  useEffect(() => {
    const fetchLaunchs = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/launches")
      const data = await reponse.json();
      setLaunchs(data);
    };
    fetchLaunchs();
  },
    [],
  );
  return (
    <>
      <>
        {launchs.map((rocket) => (
          <ul>
          <li>{rocket.mission_name}</li>
          </ul>
        ))}
      </>
    </>
  );
}
export default Launch;