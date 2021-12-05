import './styles.css';
import loadDom from './dom';
import {
  qsel,
  amPm,
  getDate,
  dayOfWeek,
  replaceSpace,
  tempConv,
  ifDecimal,
} from './helpers';

const userPref = {
  current: 'metric',
  symbol: '°C',
};

async function getData(input) {
  const response = await fetch(`${input}`, { mode: 'cors' });
  const jData = await response.json();
  return jData;
}
async function getCoord(arr) {
  let link;
  if (arr.length === 1) {
    link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  } else if (arr.length === 2) {
    link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},,${arr[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  } else if (arr.length === 3) {
    link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]},${arr[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  }
  const info = await getData(link);
  const coord = [`${info[0].lat}`, `${info[0].lon}`];
  const { name } = info[0];
  return [name, coord];
}

async function getWeather(coordinatesPlusName) {
  const data = await coordinatesPlusName;
  const coord = data[1];
  const name = data[0];
  const Weather = await getData(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&units=${userPref.current}&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`,
  );
  Weather.current.name = name;
  return Weather;
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
      temp: ifDecimal(current.temp),
    },
    extra: {
      feelsLike: { num: ifDecimal(current.feels_like), icon: 'feel' },
      humidity: { num: current.humidity, icon: 'humid' },
      windSpeed: { num: current.wind_speed, icon: 'wind' },
      chanceOfRain: { num: allData.daily[0].pop, icon: 'rain' },
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
  const city = Object.keys(suggestions);
  city.forEach((item) => {
    const option = document.createElement('option');
    option.textContent = `${suggestions[item].city}`;
    option.setAttribute('data-index', `${item}`);
    options.append(option);
  });
  suggestionList = suggestions;
}

async function getCityList(city) {
  const jData = await getData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`,
  );
  const cityList = [];
  const newcity = Object.keys(jData);
  newcity.forEach((item) => {
    const oneCity = {
      city: `${jData[item].name}, ${jData[item].country}`,
      coord: [jData[item].lat, jData[item].lon],
    };
    if (jData[item].country === 'US') { oneCity.city = `${jData[item].name}, ${jData[item].country}, ${jData[item].state}`; }
    cityList.push(oneCity);
  });
  return cityList;
}

async function checkList() {
  // check if input matches any of the suggestions
  if (suggestionList !== undefined) {
    const check = suggestionList.find((item) => item.city === input.value);
    if (check !== undefined) return Object.values(check); // return an array for GetWeather function
  }
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', async () => {
  const result = await checkList();
  if (result !== undefined) {
    load(weekDayData(getWeather(checkList()))); // load coordinates from the suggestion List
  } else {
    const cityCntryStateArr = input.value.split(',').map((item) => item.trim()); // if suggestions don't match
    cityCntryStateArr[0] = replaceSpace(cityCntryStateArr[0]); // fetch coordinates with user input
    load(weekDayData(getWeather(getCoord(cityCntryStateArr)))); // then fetch the Weather
  }
});

const body = document.querySelector('body');
let load = async (data) => {
  const elements = await data;
  body.append(loadDom(elements));
};

document.addEventListener('click', (e) => {
  const convertBtn = qsel('#convert');
  if (e.target.id === 'convert') {
    const allTemp = document.querySelectorAll('.temp');
    const unit = userPref.current;
    allTemp.forEach((item) => {
      if (unit === 'metric') {
        item.textContent = tempConv(item.textContent, 'imperial');
      } else {
        item.textContent = tempConv(item.textContent, 'metric');
      }
    });
    userPref.symbol = userPref.symbol === '°C' ? '°F' : '°C';
    userPref.current = userPref.current === 'metric'
      ? (userPref.current = 'imperial')
      : (userPref.current = 'metric');
    convertBtn.textContent = userPref.symbol;
  }
});

body.addEventListener('keyup', (e) => {
  if (e.keyCode === 113) {
    input.value = 'south+park';
    submit.click();
  }
  if (e.keyCode === 115) {
    input.value = 'saint+petersburg';
    submit.click();
  }
});
function switchHide(hide, show, display) {
  show.style.display = `${display}`;
  hide.style.display = 'none';
}

body.addEventListener('click', (e) => {
  const buttons = document.querySelectorAll('.openH');
  if (e.target.classList.contains('openH')) {
    document
      .querySelectorAll('.openH')
      .forEach((item) => (item.textContent = '○'));
    e.target.textContent = '●';

    const hourContainers = document.querySelectorAll('.eigthHours');
    hourContainers.forEach((item) => item.classList.add('hidden'));
    qsel(`#hours${e.target.id}`).classList.remove('hidden');
  }
  if (e.target.class === 'switch') {
    if (e.target.id === 'showH') {
      switchHide(qsel('#week'), qsel('#hours'), 'flex');
      buttons.forEach((item) => item.classList.remove('hidden'));
    }
    if (e.target.id === 'showW') {
      switchHide(qsel('#hours'), qsel('#week'), 'flex');
      buttons.forEach((item) => item.classList.add('hidden'));
    }
  }
});
const sydney = weekDayData(getWeather(getCoord(['sydney'])));
load(sydney);
