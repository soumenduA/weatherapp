import WeatherForm from "./WeatherForm";
import "./App.css";
import WeatherDisplay from "./WeatherDispaly";
import { useEffect, useState } from "react";
import api from "../api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [location, setLocation] = useState("contai");

  useEffect(() => {
    api
      .get(
        `/forecast?units=imperial&lat=${21.8822138}&lon=${87.7592251}&APPID=8ff8452c821d127d7afc17c8988f6e44`
      )
      .then(({ data }) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUnitChange = (unitData) => {
    setUnit(unitData);
    fetchWeatherData();
  }
  const handleSearchClick = (location) => {
    console.log(location);
    setLocation(location);
    fetchWeatherData();
    
  };

  const fetchWeatherData = () => {
    api
      .get(
        `forecast?units=${unit}&APPID=8ff8452c821d127d7afc17c8988f6e44&q=${location}`
      )
      .then(({ data }) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="ui container">
      App
      <WeatherForm handleSearchClick={handleSearchClick} className="ui segment" />
      <br />
      <WeatherDisplay setUnitMaster={(unitMaster) => handleUnitChange(unitMaster)} weatherData={weatherData} className="ui segment" />
    </div>
  );
};

export default App;
