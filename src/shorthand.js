export function elementFactory(type, id, cssClass, textContent, appendTo, src) {
  const element = document.createElement(`${type}`);
  if (id !== undefined) element.setAttribute('id', `${id}`);
  if (cssClass !== undefined) element.setAttribute('class', `${cssClass}`);
  if (textContent !== undefined) element.textContent = textContent;
  if (src !== undefined) element.src = src;
  if (appendTo !== undefined) appendTo.append(element);
  return element;
}
export function divFactory(id, cssClass, appendTo, appendEl) {
  const element = document.createElement('div');
  if (id !== undefined) element.setAttribute('id', `${id}`);
  if (cssClass !== undefined) element.setAttribute('class', `${cssClass}`);
  if (appendTo !== undefined) appendTo.append(element);
  if (appendEl !== undefined) element.append(appendEl());
  return element;
}
export function textFactory(type, textContent, appendTo, id, cssClass) {
  const element = document.createElement(`${type}`);
  if (textContent !== undefined) element.textContent = textContent;
  if (appendTo !== undefined) appendTo.append(element);
  if (id !== undefined) element.setAttribute('id', `${id}`);
  if (cssClass !== undefined) element.setAttribute('class', `${cssClass}`);
  return element;
}
export function imgFactory(src, appendTo, id, cssClass) {
  const element = document.createElement('img');
  if (src !== undefined) element.src = src;
  if (appendTo !== undefined) appendTo.append(element);
  if (id !== undefined) element.setAttribute('id', `${id}`);
  if (cssClass !== undefined) element.setAttribute('class', `${cssClass}`);
  return element;  return element;   return element;
  return element;
}

export function qsel(element) {
  return document.querySelector(`${element}`)
}

