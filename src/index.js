import "./styles.css";
import loadDom from './dom.js'
import { elementFactory } from './shorthand.js'





async function getData(input) {
  const response = await fetch(`${input}`, { mode: 'cors' });
  const jData = await response.json()
  return jData
}

async function getCoord(arr) {
  let link;
  if (arr.length === 1) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  else if (arr.length === 2) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},,${arr[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  else if (arr.length === 3) link = `http://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]},${arr[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;
  let info = await getData(link)
  console.log(link)
  let coord = [`${info[0]['lat']}`, `${info[0]['lon']}`]
  return coord
}

async function getWeather(coordinates) {
  let coord = await coordinates;
  const getWeather = await getData(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&units=metric&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`);
  console.log(getWeather)
  return getWeather
}


async function weekDayData(data) {
  let allData = await data;
  let current = allData.current
  let dayData = {
    date: getDate(allData['current']['dt'], allData['timezone_offset']),
    weather: current['weather'],
    temp: current['temp'],
    feelslike: current['feels_like'],
    humidity: current['humidity'],
    windspeed: current['wind_speed'],
    chanceRain: allData.daily[0].pop
  };
  let week = allData.daily;
  let weekData = [];
  for (let oneDay in week) {
    let day = {
      day: getDate(week[oneDay]['dt'], allData['timezone_offset']),
      temp_min: week[oneDay]['temp']['min'],
      temp_max: week[oneDay]['temp']['max'],
      weather: week[oneDay]['weather']
    }
    weekData.push(day)
  }
  console.log({ 'today': dayData, 'week': weekData })
  return { 'today': dayData, 'week': weekData };
}

function getDate(day, timezone) {
  return new Date((day + timezone) * 1000).toUTCString() /// get a date for a Unix timestamp, while ignoring user's timezone
}


const input = document.querySelector('#searchIn');
const options = document.querySelector('datalist')
let suggestionList;
let typingTimer;
input.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  if (input.value) {
    typingTimer = setTimeout(() => doneTyping(input.value), 2700)
  }
});

async function doneTyping(input) {
  options.querySelectorAll('*').forEach(item => item.remove())
  let suggestions = await getCityList(input)
  for (let ct in suggestions) {
    let option = document.createElement('option')
    option.textContent = `${suggestions[ct]['city']}`
    option.setAttribute('data-index', `${ct}`)
    options.append(option)
  }
  suggestionList = suggestions
}

async function getCityList(city) {
  const jData = await getData(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`)
  let cityList = []
  for (let ct in jData) {
    let city = {
      city: `${jData[ct]['name']}, ${jData[ct]['country']}`,
      coord: [jData[ct]['lat'], jData[ct]['lon']]
    }
    if (jData[ct]['country'] === 'US') city['city'] = `${jData[ct]['name']}, ${jData[ct]['country']}, ${jData[ct]['state']}`
    cityList.push(city)
  }
  return cityList;
}

async function checkList() {
  if (suggestionList != undefined) {
    let check = suggestionList.find(item => item['city'] === input.value)
    if (check != undefined) return check.coord
  }
}

const submit = document.querySelector('#submit')
submit.addEventListener('click', async e => {
  let result = await checkList()
  if (result != undefined) {
        

    load(weekDayData(getWeather(checkList())))

  } else {

    let cityCntryStateArr = input.value.split(',').map(item => item.trim())
    load(weekDayData(getWeather(getCoord(cityCntryStateArr))))
  }

})

const body = document.querySelector('body')
let london = (weekDayData(getWeather(getCoord(['london']))))
let load = async(data) => {

   let elements =  await data
   body.append(loadDom(elements)
)
  // console.log(elements)
  // body.append(elements)
}
