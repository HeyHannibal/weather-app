function make(type) {
  const element = document.createElement(`${type}`);
  function setId(id) {
    if(id !== '') element.setAttribute('id',`${id}`)
  }
  function setClass(cssClass) {
    if(cssClass !== '') element.setAttribute('class',`${cssClass}`)
  }
  function addText(textContent) {
   if(textContent !== '')  element.textContent = textContent
  }
  function appendElement(appendTo) {
    if(appendTo !== '') appendTo.append(element)
  }
  function setSrc(src) {
    if(src !== '') element.src = src  
  }
  let returnElement = () => {return element}
  return {
    addText,setId,setClass,setSrc,appendElement,returnElement 
  }
}
export function textFactory(type, textContent, appendTo, id, cssClass) {
  let text = make(`${type}`)
  text.addText(`${textContent}`)
  text.appendElement(appendTo)
  text.setId(`${id}`)
  text.setClass(`${cssClass}`)
  return text.returnElement()
 
}
 export function divFactory(id, cssClass, appendTo) {
  let newDiv = make('div')
  newDiv.setId(`${id}`);
  newDiv.setClass(`${cssClass}`)
  newDiv.appendElement(appendTo);
  return newDiv.returnElement()
}
export function imgFactory(src, appendTo, id, cssClass) {
  let newImg = make('img')
  newImg.setSrc(`${src}`)
  newImg.appendElement(appendTo)
  newImg.setId(`${id}`)
  newImg.setClass(`${cssClass}`)
}


export function qsel(element) {
  return document.querySelector(`${element}`)
}

