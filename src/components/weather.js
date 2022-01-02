import React from "react"

const Weather = props => (
            <div className="infoWeath">
            {props.city &&
             <div>
              <p>Местоположение: {props.city}, {props.country}</p>
              <p>Температура: {props.temp}</p>
              <p>Восход солнца: {props.sunrise}</p>
              <p>Заход солнца: {props.sunset}</p>
              <p>Давление: {props.pressure} мм. рт. ст.</p>
            </div>
            }
            <p className="error">{props.error}</p>
            </div>
)

export default Weather;
