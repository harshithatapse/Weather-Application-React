import { useState, useEffect } from "react";

const API_KEY = "59dcf722fd5fc9d87719a9bb2cce3695";
const fetchWeatherURL = "https://api.openweathermap.org";

const getWeatherData = (lat, long) =>
  fetch(
    `${fetchWeatherURL}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
  ).then((responseWeatherData) => responseWeatherData.json());

function WeatherForecast({ latitude, longitude }) {
  const [data, setData] = useState([]);
  console.log(latitude);
  console.log(longitude);

  useEffect(() => {
    getWeatherData(latitude, longitude).then((data) => setData(data));
  }, [latitude, longitude]);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default WeatherForecast;
