import {
  elementFactory,
  divFactory,
  textFactory,
  imgFactory,
  qsel,
  keyToName,
  formatT,
} from './helpers';

import feelsLike from './icons/feelsLike.svg';
import windSpeed from './icons/windSpeed.svg';
import humidity from './icons/humidity.svg';
import chanceOfRain from './icons/chanceOfRain.svg';

const extraIcons = {
  feelsLike,
  windSpeed,
  humidity,
  chanceOfRain,
};
const body = qsel('body');
export default function (object) {
  const { today } = object;
  const { location } = today;
  const { main } = today;
  const { extra } = today;

  const searchBar = qsel('#searchDiv');
  body.append(searchBar);
  const container = qsel('#container');
  while (container.firstChild) container.firstChild.remove();
  const day = divFactory('day', '', container);
  const dayMain = divFactory('dayMain', '', day);
  const makeLocation = (function () {
    textFactory('h1', `${location.name}`, dayMain);
    textFactory('p', `${formatT(location.date)[0]}`, dayMain);
    textFactory('p', `${formatT(location.date)[1]}`, dayMain);
  }());

  const makeMain = (function () {
    const temp = divFactory('mainTemp', '', dayMain);
    textFactory('h2', `${main.temp}`, temp, 'tempNow', 'temp');
    elementFactory('a', temp, 'convert', '', `${object.userPref.symbol}`);
    imgFactory(`http://openweathermap.org/img/wn/${today.main.weathericon}@2x.png`, dayMain, '', 'wicon');
    textFactory('p', `${main.weatherdesc}`, dayMain);
  }());

  const makeExtra = (function () {
    const extraDiv = divFactory('extra', '', day);
    const keys = Object.keys(extra);
    keys.forEach((item) => {
      const propDiv = divFactory('', 'extraProp', extraDiv);
      imgFactory(`${extraIcons[`${item}`]}`, propDiv, '', 'extrWicon');
      const textDiv = divFactory('', 'extraTextDiv', propDiv);
      textFactory('h3', `${keyToName(item)}`, textDiv);
      textFactory('p', `${extra[item].num}`, textDiv, '', `${item === 'feelsLike' ? 'temp' : ''}`);
    });
  }());
  container.append(searchBar);
  const switchCont = divFactory('switchCont', '', container);
  const showWeek = elementFactory('button', switchCont, 'showW', 'switch', 'Daily');
  const showHourly = elementFactory('button', switchCont, 'showH', 'switch', 'Hourly');
  const weekHourDiv = divFactory('weekHour', '', container);

  const week = divFactory('week', '', weekHourDiv);
  const weekly = object.week;
  weekly.forEach((item) => {
    const oneday = divFactory('', 'weekday', week);
    textFactory('h4', `${item.weekDay}`, oneday, '', 'week day');
    textFactory('p', `${item.temp_max}`, oneday, '', 'temp whTemp temp_max');
    textFactory('p', `${item.temp_min}`, oneday, '', 'temp whTemp temp_min');
    imgFactory(`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, oneday, '', 'whWicon');
  });
  const hours = divFactory('hours', '', weekHourDiv);
  const hourly = object.hour;
  hours.style.display = 'none';
  for (let i = 0; i < 24;) {
    divFactory(`hours${i}`, `H${i} eigthHours`, hours);
    elementFactory('a', switchCont, `${i}`, ' openH hidden', `${i === 0 ? '●' : '○'}`).setAttribute('href', '#');
    i += 8;
  }

  qsel('#hours8').classList.add('hidden');
  qsel('#hours16').classList.add('hidden');
  hourly.forEach((item, index) => {
    let eigthHours;
    if (index < 8) eigthHours = qsel('#hours0');
    if (index >= 8 && index < 16) eigthHours = qsel('#hours8');
    if (index >= 16) eigthHours = qsel('#hours16');
    const onehour = divFactory('', 'onehour', eigthHours);
    textFactory('h4', `${item.time}`, onehour, '', 'timeHour');
    textFactory('p', `${item.temp}`, onehour, '', 'whTemp temp');
    imgFactory(`http://openweathermap.org/img/wn/${item.weathericon}@2x.png`, onehour, '', 'wicon whWicon');
  });

  return container;
}
