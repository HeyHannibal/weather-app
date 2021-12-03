function make(type) {
  const element = document.createElement(type);
  function setId(id) {
    if(id != '' && id !== undefined) element.setAttribute('id',id)
  }
  function setClass(cssClass) {
    if(cssClass != '' && cssClass !== undefined) element.setAttribute('class',cssClass)
  }
  function addText(textContent) {
   if(textContent !== undefined)  element.textContent = textContent
  }
  function appendElement(appendTo) {
    if(appendTo !== undefined) appendTo.append(element)
  }
  function setSrc(src) {
    if(src !== undefined) element.src = src  
  }
  let returnElement = () => {return element}
  return {
    addText,setId,setClass,setSrc,appendElement,returnElement 
  }
}

export function elementFactory(type,appendTo,id,cssClass,textContent,src) {
  let element = make(type)
  element.appendElement(appendTo)
  element.addText(textContent)
  element.setId(id)
  element.setClass(cssClass)
  element.setSrc(src)
  return element.returnElement()
}

export function textFactory(type, textContent, appendTo, id, cssClass) {
  let text = make(type)
  text.addText(textContent)
  text.appendElement(appendTo)
  text.setId(id)
  text.setClass(cssClass)
  return text.returnElement() 
}

export function divFactory(id, cssClass, appendTo) {
  let newDiv = make('div')
  newDiv.setId(id);
  newDiv.setClass(cssClass)
  newDiv.appendElement(appendTo);
  return newDiv.returnElement()
}

export function imgFactory(src, appendTo, id, cssClass) {
  let newImg = make('img')
  newImg.setSrc(src)
  newImg.appendElement(appendTo)
  newImg.setId(id)
  newImg.setClass(cssClass)
  return newImg.returnElement()
}

export function qsel(element) {
  return document.querySelector(element)
}

export function keyToName(str) {
  return str.split('').map((letter,index) => {
    if(index === 0) return letter.toUpperCase()
    if (letter === letter.toUpperCase()) {
      return `  ${letter}`
    } else {return letter}
  }).join('')
}


// function replaceSpace(str){
// return  str.split(undefined).map(item=> (item === ' ') ? item = '+' : item).join(undefined)
// }
