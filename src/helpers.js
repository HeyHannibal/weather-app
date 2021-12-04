function make(type) {
  const element = document.createElement(type);
  function setId(id) {
    if (id !== '' && id !== undefined) element.setAttribute('id', id);
  }
  function setClass(cssClass) {
    if (cssClass !== '' && cssClass !== undefined) element.setAttribute('class', cssClass);
  }
  function addText(textContent) {
    if (textContent !== undefined) element.textContent = textContent;
  }
  function appendElement(appendTo) {
    if (appendTo !== undefined) appendTo.append(element);
  }
  function setSrc(src) {
    if (src !== undefined) element.src = src;
  }
  const returnElement = () => element;
  return {
    addText, setId, setClass, setSrc, appendElement, returnElement,
  };
}

export function elementFactory(type, appendTo, id, cssClass, textContent, src) {
  const element = make(type);
  element.appendElement(appendTo);
  element.addText(textContent);
  element.setId(id);
  element.setClass(cssClass);
  element.setSrc(src);
  return element.returnElement();
}

export function textFactory(type, textContent, appendTo, id, cssClass) {
  const text = make(type);
  text.addText(textContent);
  text.appendElement(appendTo);
  text.setId(id);
  text.setClass(cssClass);
  return text.returnElement();
}

export function divFactory(id, cssClass, appendTo) {
  const newDiv = make('div');
  newDiv.setId(id);
  newDiv.setClass(cssClass);
  newDiv.appendElement(appendTo);
  return newDiv.returnElement();
}

export function imgFactory(src, appendTo, id, cssClass) {
  const newImg = make('img');
  newImg.setSrc(src);
  newImg.appendElement(appendTo);
  newImg.setId(id);
  newImg.setClass(cssClass);
  return newImg.returnElement();
}

export function qsel(element) {
  return document.querySelector(element);
}

export function keyToName(str) {
  return str.split('').map((letter, index) => {
    if (index === 0) return letter.toUpperCase();
    if (letter === letter.toUpperCase()) {
      return `  ${letter}`;
    } return letter;
  }).join('');
}

export function amPm(time) {
  let hour = time.split(' ')[4].split(':')[0];
  if(hour === '00') hour = '24';
  console.log(hour)
  const trimHour = hour.split('').filter((item) => item > 0 ).join('');
  if (Number(trimHour) <= 12) return `${trimHour} AM`;
  if (Number(trimHour) > 12) return `${trimHour - 12} PM`;
}

export function getDate(day, timezone) {
  return new Date((day + timezone) * 1000).toUTCString();
}

export function dayOfWeek(date) {
  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysArr[(new Date(date)).getDay()];
}

export function replaceSpace(str) {
  return str.split('').map((item) => ((item === ' ') ? item = '+' : item)).join('');
}
