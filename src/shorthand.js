export  function elementFactory(type, id, cssClass, textContent, appendTo, src) {
        let element = document.createElement(`${type}`);
        if (id != undefined) element.setAttribute('id', `${id}`);
        if (cssClass != undefined) element.setAttribute('class', `${cssClass}`);
        if (textContent != undefined) element.textContent = textContent
        if (src != undefined) element.src = src
        if (appendTo != undefined) appendTo.append(element)
        return element;
    }
export function divFactory(id, cssClass,  appendTo) {
    let element = document.createElement(`div`);
    if (id != undefined) element.setAttribute('id', `${id}`);
    if (cssClass != undefined) element.setAttribute('class', `${cssClass}`);
    if (appendTo != undefined) appendTo.append(element)
    return element;
}
export function textFactory(type, textContent,appendTo,id,cssClass) {
    let element = document.createElement(`${type}`);
    if (textContent != undefined) element.textContent = textContent
    if (appendTo != undefined) appendTo.append(element)
    if (id != undefined) element.setAttribute('id', `${id}`);
    if (cssClass != undefined) element.setAttribute('class', `${cssClass}`);
    return element;
}
export function qsel(input) {
return document.querySelector(`${input}`)
}