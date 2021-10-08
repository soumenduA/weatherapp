import { useState } from "react";

const WeatherForm = (props) => {
  const [location, setLocation] = useState("");
  

  console.log('location----', location)
  
  return (
    <div>
      WeatherForm
      <div className="ui category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search location..."
            onChange={(e) => setLocation(e.target.value)} 
          />
          <i className="search icon"></i>

          <button className="ui icon button" onClick={() => props.handleSearchClick(location)}>
            <i className="search icon"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default WeatherForm;
