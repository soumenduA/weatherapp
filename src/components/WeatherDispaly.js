import { useState} from "react";

const WeatherDisplay = ({weatherData, setUnitMaster}) => {
  const [unit, setUnit] = useState("metric");
  

  const handleSliderClick = () => {
    unit === "metric" && setUnit("imperial");
    unit === "imperial" && setUnit("metric");
    setUnitMaster(unit);
  };
  console.log("unit-----", unit, weatherData);
  
  return (
    <div>
      WeatherDisplay
      {weatherData &&
      <div className="ui card">
        <div className="content">
          <div className="header">{weatherData.city.name}</div>
          <div className="ui right floated slider checkbox">
            <input
              type="checkbox"
              name="newsletter"
              onClick={handleSliderClick}
            />
            <label>{unit}</label>
          </div>
        </div>
        <div className="content">
            {weatherData.list[0].main.temp}
        </div>
        
        <div className="content">
            Future days forecast Here...
        </div>
        
      </div>}
    </div>
  );
};

export default WeatherDisplay;
