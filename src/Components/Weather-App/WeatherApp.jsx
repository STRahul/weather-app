import React, { useEffect, useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";
import { API_URL, weathers } from "../../constant";
import WeatherElement from "./WeatherElement";

const WeatherApp = () => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("Agra");
  const [data, setData] = useState();
  const [weatherIcon, setWeatherIcon] = useState(clear_icon);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL + searchText);
      const data = await response.json();

      if (data?.name) {
        setData(data);
      }

      setWeatherIcon(weathers[data?.weather[0]?.main]);
    } catch (err) {
      alert("city not found");
      return 0;
    }
  };

  let content = <div className="loaderwrap">
    <div className="loader"></div>
  </div>;

  if (data) {
    content = (
      <>
        <div className="weather-image">
          <img src={weatherIcon} alt="" />
        </div>
        <div className="weather-temp">{data?.main?.temp}° C</div>
        <div className="weather-location">{data?.name}</div>

        <div className="data-container">
          <WeatherElement icon_url={humidity_icon} name="Humidity" value={data?.main?.humidity} />
          <WeatherElement icon_url={wind_icon} name="Wind Speed" value={data?.wind?.speed} />
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="search"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="search-icon"
          disabled={inputText.trim().length === 0}
          onClick={() => {
            setSearchText(inputText);
          }}
        >
          <img src={search_icon} alt="" />
        </button>
      </div>
      {content}
    </div>
  );
};

export default WeatherApp;
