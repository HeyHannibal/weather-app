import "./styles.css";

import { amPm, getDate, dayOfWeek, ifDecimal } from "./helpers";
import { getData } from "./index";

export var userPref = {
  current: "metric",
  symbol: "°C",
};

export async function getWeather(coordinatesPlusName) {
  const data = await coordinatesPlusName;
  const coord = data[1];
  const name = data[0];
  const unit = localStorage.getItem('userTempPref')
  const Weather = await getData(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`
  );
  Weather.current.name = name;
  return weekDayData(Weather);
}
function weekDayData(data) {
  const allData = data;
  const { current } = allData;
  const dayData = {
    location: {
      name: current.name,
      date: getDate(allData.current.dt, allData.timezone_offset),
    },
    main: {
      weatherdesc: current.weather[0].description,
      weathericon: current.weather[0].icon,
      temp: ifDecimal(current.temp),
    },
    extra: {
      feelsLike: { num: ifDecimal(current.feels_like), icon: "feel" },
      humidity: { num: current.humidity, icon: "humid" },
      windSpeed: { num: current.wind_speed, icon: "wind" },
      chanceOfRain: { num: allData.daily[0].pop, icon: "rain" },
    },
  };
  const week = allData.daily;
  const weekData = [];
  const oneDay = Object.keys(week);
  oneDay.forEach((item) => {
    const day = {
      date: getDate(week[item].dt, allData.timezone_offset),
      weekDay: dayOfWeek(getDate(week[item].dt, allData.timezone_offset)),
      temp_min: ifDecimal(week[item].temp.min),
      temp_max: ifDecimal(week[item].temp.max),
      weather: week[item].weather,
    };
    weekData.push(day);
  });
  const hour = allData.hourly;
  const hourData = [];
  hour.forEach((item, index) => {
    if (index < 24) {
      const thishour = {
        time: amPm(getDate(item.dt, allData.timezone_offset)),
        temp: ifDecimal(item.temp),
        weathericon: item.weather[0].icon,
      };
      hourData.push(thishour);
    }
  });
  return {
    hour: hourData,
    userPref,
    today: dayData,
    week: weekData,
  };
}

export async function getCoord(arr) {
  let link;
  if (arr.length === 1) {
    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  } else if (arr.length === 2) {
    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},,${arr[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  } else if (arr.length === 3) {
    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]},${arr[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  }
  let info = await getData(link);
  const coord = [`${info[0].lat}`, `${info[0].lon}`];
  const { name } = info[0];
  return [name, coord];

}

export async function getSuggestions(input) {
  const city = await input;
  const jData = await getData(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`
  );
  const cityList = [];
  const newcity = Object.keys(jData);
  newcity.forEach((item) => {
    const oneCity = {
      city: `${jData[item].name}, ${jData[item].country}`,
      coord: [jData[item].lat, jData[item].lon],
    };
    if (jData[item].country === "US") {
      oneCity.city = `${jData[item].name}, ${jData[item].country}, ${jData[item].state}`;
    }
    cityList.push(oneCity);
  });
  return cityList;
}
