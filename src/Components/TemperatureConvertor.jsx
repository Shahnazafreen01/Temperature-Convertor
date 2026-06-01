import React, { useState } from "react";
import "./Temperature.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = (value) => {
    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
      return;
    }

    const f = (value * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  
  const convertToCelsius = (value) => {
    setFahrenheit(value);

    if (value === "") {
      setCelsius("");
      return;
    }

    const c = ((value - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  return (
    <div className="container">
      <div className="converter-box">
        <h2>Temperature Converter</h2>

        
        <input
          type="number"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={(e) => convertToFahrenheit(e.target.value)}
        />

        <h3>Fahrenheit: {fahrenheit}</h3>

        <br />

       
        <input
          type="number"
          placeholder="Enter Fahrenheit"
          value={fahrenheit}
          onChange={(e) => convertToCelsius(e.target.value)}
        />

        <h3>Celsius: {celsius}</h3>
      </div>
    </div>
  );
}

export default TemperatureConverter;