import React from 'react'

const WeatherElement = ({icon_url,name,value}) => {
  return (
    <div className="element">
            <img src={icon_url} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{value} %</div>
              <div className="text">{name}</div>
            </div>
          </div>
  )
}

export default WeatherElement