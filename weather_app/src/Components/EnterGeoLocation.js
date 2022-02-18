import { TextField } from "@material-ui/core";
import WeatherForecast from "./WeatherForecast";
import { useState } from "react";

const initialState = {
  latitude: "",
  longitude: "",
};

function EnterGeoLocation() {
  const [geoValues, setGeoValues] = useState(initialState);
  const [weatherData, setWeatherData] = useState(null);

  function updateLatitude(e) {
    setGeoValues({ ...geoValues, latitude: e.target.value });
  }

  function updateLongitude(e) {
    setGeoValues({ ...geoValues, longitude: e.target.value });
  }

  function callWeatherForecast(lat, lon) {
    console.log("Function Called");
    console.log(lat);
    console.log(lon);
    setWeatherData(geoValues);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <br></br>
      <TextField
        id="standard-basic"
        label="Latitude"
        variant="standard"
        type="text"
        value={geoValues.latitude}
        onChange={updateLatitude}
      />
      <br></br>
      <TextField
        id="standard-basic"
        label="Longitude"
        variant="standard"
        type="text"
        value={geoValues.longitude}
        onChange={updateLongitude}
      />

      <br></br>
      <br></br>
      <button
        type="button"
        onClick={() =>
          callWeatherForecast(geoValues.latitude, geoValues.longitude)
        }
      >
        Submit
      </button>
      {weatherData !== null && (
        <WeatherForecast
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      )}
    </div>
  );
}

export default EnterGeoLocation;
