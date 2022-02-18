import { useState } from "react";
import WeatherForecast from "./WeatherForecast";

function GeoLocation() {
  //   const [latitude, setLatitude] = useState();
  //   const [longitude, setLongitude] = useState();

  const [geoValues, setGeoValues] = useState({
    latitude: null,
    longitude: null,
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //setLatitude(position.coords.latitude);
      //setLongitude(position.coords.longitude);
      setGeoValues({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  console.log("Geo Loc");
  console.log(geoValues.latitude);
  console.log(geoValues.longitude);
  console.log("xxx");

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={getLocation}> Get Geo-Location </button>
      <p>Latitude : {geoValues.latitude}</p>
      <p>Longitude : {geoValues.longitude}</p>
      <WeatherForecast
        latitude={geoValues.latitude}
        longitude={geoValues.longitude}
      />
    </div>
  );
}

export default GeoLocation;
