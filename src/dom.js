import {
  elementFactory, divFactory, textFactory, imgFactory, qsel, keyToName
} from './shorthand';

import feelsLike from './icons/feelsLike.svg';
import windSpeed from './icons/windSpeed.svg';
import humidity from './icons/humidity.svg';
import chanceOfRain from './icons/chanceOfRain.svg';

let extraIcons = {
  'feelsLike': feelsLike,
  'windSpeed': windSpeed,
  'humidity': humidity,
  'chanceOfRain': chanceOfRain
}

export default function (object) {
  const today = object.today
  const location = today.location
  const main = today.main
  const extra = today.extra

  const container = qsel('#container');
  while (container.firstChild) container.firstChild.remove();

  let day = divFactory('day', '', container);
  let dayMain = divFactory('dayMain', '', day)
  let makeLocation = (function () {
    textFactory('h1', `${location.name}`, dayMain);
    textFactory('p', `${location.date}`, dayMain);
  }());

  let makeMain = (function () {
    let temp = divFactory('mainTemp','',dayMain)
    textFactory('h2', `${main.temp}`, temp, 'tempNow', 'temp')
    elementFactory('a',temp,'convert','',`${object.userPref.symbol}`)
    imgFactory(`http://openweathermap.org/img/wn/${today.main.weathericon}@2x.png`, dayMain, '', 'wicon')
    textFactory('p', `${main.weatherdesc}`, dayMain)
  })()

  let makeExtra = (function () {
    let extraDiv = divFactory('extra', '', day)
    let keys = Object.keys(extra)
    keys.forEach(item => {
      textFactory('h3', `${keyToName(item)}`, extraDiv,)
      textFactory('p', `${extra[item]['num']}`, extraDiv, '', `${(item === 'feelsLike') ? 'temp' : ''}`)
      imgFactory(`${extraIcons[`${item}`]}`, extraDiv, '', 'extra')
    })
  })()

  const week = divFactory('week', '', container);
  const weekly = object.week;
  weekly.forEach((item) => {
    const oneday = divFactory('', 'weekday', week);
    textFactory('h4', `${item.weekDay}`, oneday, '', 'week day');
    textFactory('p', `${item.temp_max}`, oneday, '', 'week temp temp_max');
    textFactory('p', `${item.temp_min}`, oneday, '', 'week temp temp_min');
    imgFactory(`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, oneday, '', 'wicon');
  });
  const hours = divFactory('hours','',container)
  const hourly = object.hour
  console.log(hourly)
  hourly.forEach((item) => {
    const onehour = divFactory('','onehour',hours)
    textFactory('h4', `${item.time}`, onehour, '', 'timeHour');
    textFactory('p', `${item.temp}`,onehour,'','hourTemp temp') 
    imgFactory(`http://openweathermap.org/img/wn/${item.weathericon}@2x.png`, onehour, '', 'wicon');


  })
  return container;
}
export function createConvert() {
  return elementFactory('button', '', 'convert', '', '°C')
}

