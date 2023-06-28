import React from "react";
import Day from "./Day";
export default class Weather extends React.Component {
  componentWillUnmount() {
    console.log("Weather Will unmount");
  }
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, index) => (
            <Day
              key={date}
              date={date}
              max={max.at(index)}
              min={min.at(index)}
              code={codes.at(index)}
              isToday={index === 1}
            />
          ))}
        </ul>
      </div>
    );
  }
}
