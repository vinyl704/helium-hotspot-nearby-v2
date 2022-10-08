import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Miner from "./components/Miner";
import Distance from "./components/Distance";
import Header from "./components/Header";
import Unit from "./components/Unit";

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [dist, setDist] = useState(5000);
  const [unit, setUnit] = useState("Meters");

  const metersToMile = (distance) => distance / 1609.34;
  const isMeters = unit === "Meters";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        setLat(latitude);
        setLong(longitude);
      }
    );
  }, []);

  useLayoutEffect(() => {
    if (lat && long) {
      fetch(
        `https://api.helium.io/v1/hotspots/location/distance?lat=${lat}&lon=${long}&distance=${Math.ceil(
          dist
        )}`,
        { mode: "cors" }
      )
        .then((res) => res.json())
        .then((data) => data.data)
        .then(setData)
        .catch(console.log);
    }
  }, [lat, long, dist]);

  return (
    <div className="App">
      <Header data={data} distance={dist} />
      <div className="d-flex flex-column text-center justify-content-center align-items-center">
        <Distance distance={dist} unit={unit} setDistance={setDist} />
        <Unit setUnit={setUnit} />
      </div>
      <p className="text-white mt-2">
        There {data.length === 1 ? "is" : "are"}{" "}
        <span>
          <strong>{data.length}</strong>
        </span>{" "}
        {data.length > 1 || data.length === 0 ? "hotspots" : "hotspot"} within{" "}
        <strong>{isMeters ? dist : metersToMile(dist).toFixed(2)}</strong>{" "}
        {unit} of your location.
      </p>
      <div
        className="mt-5 w-80 d-flex flex-md-row flex-lg-row flex-xl-row flex-wrap mx-auto flex-column justify-content-evenly align-items-center overflow-hidden rounded"
        id="miner-container"
      >
        {data &&
          data.map((miner, idx) => (
            <Miner
              key={idx}
              {...miner}
              metersToMile={metersToMile}
              isMeters={isMeters}
              unit={unit}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
