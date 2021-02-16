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
    // <ul>
    //   {rockets.map((rockets) => (<li>{rockets.country}</li>))}
    // </ul>
    <>
      {rockets.links &&
        <>
          <h1>{rockets.links.website}</h1>
        </>
      }
    </>
  );
}

export default Home;