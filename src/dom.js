import {
  divFactory, textFactory,imgFactory,qsel
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
  console.log(windSpeed)
  console.log(object)
  const container = qsel('#container');
  while (container.firstChild) container.firstChild.remove();

  const day = divFactory('day', '', container);
  const dayMain = divFactory('dayMain', '', day)
  const today = object.today
  const location = today.location
  const main = today.main
  const extra = today.extra
  console.log(today.extra)

  let makeLocation = (function () {
    textFactory('h1', `${location.name}`, dayMain);
    textFactory('p', `${location.date}`, dayMain);
  }());

  let makeMain = (function () {
    textFactory('h2', `${main.temp}C`, dayMain)
    imgFactory(`http://openweathermap.org/img/wn/${today.main.weathericon}@2x.png`, day, '', 'wicon')
    textFactory('p', `${main.weatherdesc}`, dayMain)
  })()

  let makeExtra = (function () {
    function keyToName(str) {
      return str.split('').map((letter,index) => {
        if(index === 0) return letter.toUpperCase()
        if (letter === letter.toUpperCase()) {
          return ` ${letter}`
        } else {return letter}
      }).join('')
    }
    let extraDiv = divFactory('extra','',day)
    let keys = Object.keys(extra)
    console.log(keys)
    keys.forEach(item => {
      textFactory('h3', `${keyToName(item)}`,extraDiv)
      textFactory('p',`${extra[item]['num']}`,extraDiv)
      imgFactory(`${extraIcons[`${item}`]}`,extraDiv, '','extra')
    })
  })()

  const week = divFactory('week', '', container);
  const weekly = object.week;
  weekly.forEach((item) => {
    const oneday = divFactory('', 'weekday', week);
    textFactory('h4', `${item.weekDay}`, oneday, '', 'week day');
    textFactory('p', `${item.temp_max}`, oneday, '', 'week temp_max');
    textFactory('p', `${item.temp_min}`, oneday, '', 'week temp_min');
    imgFactory(`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, oneday, '', 'wicon');
  });

  return container;
}
