import React, { useState, useEffect } from 'react';


function Home() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const reponse = await fetch("https://api.spacexdata.com/v3/info")
      const data = await reponse.json();
      setRockets(data);
    };
    fetchRockets();
  },
    [],
  );
  return (
    <>
      {rockets.links &&
        <>
          <p className='text-xl'>The Name of Company : {rockets.name}</p>
          <p>The name of Founder : {rockets.founder}</p>
          <p>Since : {rockets.founded}</p>
          <p>Total Employees : {rockets.employees}</p>
          <p>Headquarters : {rockets.headquarters.address}, {rockets.headquarters.city}, {rockets.headquarters.state}</p>
          <p>Website : {rockets.links.website}</p>
        </>
      }

    </>
  );
}

export default Home;