/* eslint-disable guard-for-in */
import './styles.css';
import loadDom from './dom';
// import { elementFactory, qsel } from './shorthand';

async function getData(input) {
  const response = await fetch(`${input}`, { mode: 'cors' });
  const jData = await response.json();
  return jData;
}

async function getCoord(arr) {
  let link;
  if (arr.length === 1) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  else if (arr.length === 2) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},,${arr[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  else if (arr.length === 3) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]},${arr[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  const info = await getData(link);
  console.log(info);
  const coord = [`${info[0].lat}`, `${info[0].lon}`];
  const { name } = info[0];
  return [coord, name];
}

async function getWeather(coordinatesPlusName) {
  const data = await coordinatesPlusName;
  const coord = data[0];
  const name = data[1];
  const getWeather = await getData(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`);
  getWeather.current.name = name;
  return getWeather;
}

async function weekDayData(data) {
  const allData = await data;
  const { current } = allData;
  const dayData = {
    location: {
      name: current.name,
      date: getDate(allData.current.dt, allData.timezone_offset),
    },
    main: {
      weatherdesc: current.weather[0].description,
      weathericon: current.weather[0].icon,
      temp: current.temp,
    },
    extra: {
      feelsLike: {num: current.feels_like, icon: 'feel'},
      humidity: {num: current.humidity,  icon: 'humid'},
      windSpeed: {num: current.wind_speed, icon: 'wind'},
      chanceOfRain: {num: allData.daily[0].pop,  icon: 'rain'},
    },
  };
  const week = allData.daily;
  const weekData = [];
  for (const oneDay in week) {
    const day = {
      date: getDate(week[oneDay].dt, allData.timezone_offset),
      weekDay: dayOfWeek(getDate(week[oneDay].dt, allData.timezone_offset)),
      temp_min: week[oneDay].temp.min,
      temp_max: week[oneDay].temp.max,
      weather: week[oneDay].weather,
    };

    weekData.push(day);
  }
  console.log({ today: dayData, week: weekData });
  return { today: dayData, week: weekData };
}

function getDate(day, timezone) {
  return new Date((day + timezone) * 1000).toUTCString();
}
function dayOfWeek(date) {
  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysArr[(new Date(date)).getDay()];
}

const input = document.querySelector('#searchIn');
const options = document.querySelector('datalist');
let suggestionList;
let typingTimer;
input.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  if (input.value) {
    typingTimer = setTimeout(() => doneTyping(input.value), 2700);
  }
});

async function doneTyping(input) {
  options.querySelectorAll('*').forEach((item) => item.remove());
  const suggestions = await getCityList(input);
  for (const ct in suggestions) {
    const option = document.createElement('option');
    option.textContent = `${suggestions[ct].city}`;
    option.setAttribute('data-index', `${ct}`);
    options.append(option);
  }
  suggestionList = suggestions;
}

async function getCityList(city) {
  const jData = await getData(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`);
  const cityList = [];
  for (const ct in jData) {
    const city = {
      city: `${jData[ct].name}, ${jData[ct].country}`,
      coord: [jData[ct].lat, jData[ct].lon],
    };
    if (jData[ct].country === 'US') city.city = `${jData[ct].name}, ${jData[ct].country}, ${jData[ct].state}`;
    cityList.push(city);
  }
  return cityList;
}

async function checkList() {
  if (suggestionList !== undefined) {
    const check = suggestionList.find((item) => item.city === input.value);
    if (check !== undefined) return check.coord;
  }
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', async (e) => {
  const result = await checkList();
  if (result !== undefined) {
    load(weekDayData(getWeather(checkList())));
  } else {
    const cityCntryStateArr = input.value.split(',').map((item) => item.trim());
    load(weekDayData(getWeather(getCoord(cityCntryStateArr))));
  }
});

const body = document.querySelector('body');
const london = (weekDayData(getWeather(getCoord(['london']))));
let load = async (data) => {
  const elements = await data;
  body.append(loadDom(elements));
};
load(london);

body.addEventListener('keyup', (e) => {
  if (e.keyCode === 113) {
    input.value = 'sydney';
    submit.click();
  }
  if (e.keyCode === 115) {
    input.value = 'los+angeles';
    submit.click();
  }
});
