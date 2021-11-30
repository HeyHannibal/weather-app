import { elementFactory }  from './shorthand.js'
import { divFactory } from './shorthand.js'
import { textFactory }  from './shorthand.js'
import { qsel }  from './shorthand.js'

export default  function(object) {
const container = qsel('#container')
while(container.firstChild) container.firstChild.remove()

let today = object.today
let week = object.week 
console.log(today,week)
console.log(today['weather'][0])


for(let item in today) {
    if((today[item])[0] != undefined) {
       for(let prop in today[item]) {
           textFactory('h4',`${today[item][prop]}`,container)
       }
    }
    textFactory('h1',`${today[item]}`,container,`${item}`)

}
console.log(container)
return container
}