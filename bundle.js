(()=>{var e={28:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(626),c=t.n(s),d=new URL(t(841),t.b),l=i()(o()),p=c()(d);l.push([e.id,"html,body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n}\nbody{\n    background: hsla(240, 21%, 6%, 1);\n    background: linear-gradient(45deg, hsla(240, 21%, 6%, 1) 0%, hsla(336, 14%, 21%, 1) 0%, hsla(0, 15%, 15%, 1) 81%, rgb(19, 13, 12) 100%);\n    background: url("+p+");\n    background-size: cover ;\n    background-repeat: no-repeat;\n    color: rgb(223, 223, 223);\n    margin: 0;\n   \n    font-family:'Montserrat', sans-serif;\n    height: 100%;\n    backdrop-filter: blur(10px);\n}\np, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n}\n#container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;  \n    justify-content: space-between;\n    animation: fadeInAnimation ease 3s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n@keyframes fadeInAnimation {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n     }\n}\n\n* {\n    box-sizing: border-box;\n}\n/* weekHour */\n#weekHour{\n    height: auto;\n    width: 100%;\n    align-self: flex-end;\n}\n\n#week{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n.eigthHours {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    \n}\n.onehour{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.weekday {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    bottom: 0px;\n    align-self: flex-end;\n}\n\n.weekday > .temp, .hourTemp {\n    font-size: 2.5rem;\n    font-weight: 500;\n}\n.weekday > .temp_min {\n    font-size: 1.5rem;\n    font-weight: 200;\n}\n.weekday h4 {\n    font-weight: 400;\n}\n/* weekHour */\n\n/* day */\n#day{ \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#extra{\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n}\n.extrWicon{\n   max-width: 1.5rem;\n}\n.extraProp{\n    align-items: center;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr;\n}\n.extraTextDiv p{\n    font-size: 1.5rem;\n    width: 50%;\n}\n.extraTextDiv{\n    box-sizing: content-box;\n    min-width: 6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.extraProp h3{\n    font-size: 1rem;\n    font-weight: 300;\n} \nheader{\n    position: fixed;\n}\n#mainTemp{\n    display: flex;\n    align-items: center;\n    gap:5px;\n    font-size: 1.5rem;\n}\na{\n    cursor: pointer;\n    font-size:2.3rem;\n    text-decoration: none;\n    margin-bottom: -0.8rem;\n    color:#d1d1d1;\n    text-decoration: solid underline 2px; \n} \n#dayMain h2{\n    margin-top: 1rem;\n}\n/* day */\n\n/* hours */\n#hours{\n    display: flex;\n}\n.eigthHours{\n    display: flex;\n    width: 100%;\n}\n\n*.hidden {\n    display: none;\n}\n/* hours */\n\n/* switch */\n#switchCont{\n    padding-bottom: 1rem;\n    align-self:baseline\n}\n#switchCont{\n    display: flex;\n    align-items: center;\n}\n.switch{\n    margin: 0px 2px 2px 2px;\n    margin-top: 1rem;\n    background: rgba(211, 146, 121, 0.212);\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    font-size: 1.2rem;\n    border:none;\n    border-radius: 3px 3px 3px 3px;\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.452);\n    width: 7rem;\n    height: 2rem;\n    color: rgb(247, 247, 247);\n    margin-bottom: 10px;\n    \n}\n.openH{\n    margin: 0px;\n    padding: 0px;\n    color: rgb(247, 247, 247);\n    text-decoration: none;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    font-size:2.5rem;\n    text-shadow: 1px 1px 10px black;\n    border:none;\n}\n/* switch */\n\n/* searchDiv */\n#searchDiv{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    align-self: center;\n}\ninput{\n    margin: 0;\n    border: none;\n    height: 1.5rem;\n    width: 12rem;\n    background-color: rgba(243, 243, 243, 0.925);\n    border-radius: 2px 0px 0px 5px;\n    box-shadow: 2px 3px 4px  rgba(0, 0, 0, 0.651);\n}\n#submit{\n    color: white;\n    margin: 0;\n    border: none;\n    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.651);\n    background:rgb(192, 96, 61);\n    width: 5rem;\n    height: 1.5rem;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    font-size: 1.1rem;\n    border-radius: 2px 10px 2px 2px;\n}\n/* searchDiv */\n\n@media only screen and (max-width: 800px) {\n    .weekday > * {\n        max-width: 8vh;\n    }\n    .weekday > * {\n        margin: 0;\n    }\n    .weekday > .temp, .onehour p {\n        font-size: 2rem;\n        font-weight: 500;\n        \n    }\n    .weekday > .temp_min {\n        font-size: 1.5rem;\n        font-weight: 200;\n    }\n    .weekday h4 {\n        font-weight: 400;\n    }\n}\n@media only screen and (max-width: 600px) {\n    body{\n        background-size: 150% 150%;\n    }\n    #week, .eigthHours{\n       flex-direction: column;\n       align-content: flex-end;\n    }  \n    #week > *{\n        width: 100%;\n        display: grid;\n        grid-template-columns: 3fr repeat(3, 1fr);\n        grid-template-rows: 1fr;\n        justify-items: center;\n        border-bottom: 1px solid;\n    }\n    #week  h4, .onehour h4{\n        justify-self: left;\n    }\n    .onehour{ \n        display: grid;\n        grid-template-columns: 3fr repeat(2, 1fr);\n        grid-template-rows: 1fr;\n        justify-items: center;\n        border-bottom: 1px solid;\n    }\n    .whWicon{\n        width: 50px;\n    }\n    #searchDiv{\n        display: flex;\n        padding: 2rem;\n        flex-wrap: nowrap;\n    }\n    .weekday > .temp, .onehour p {\n        font-size: 1.5rem;\n        font-weight: 500;\n        \n    }\n}\n@media only screen and (max-width: 400px) {\n    .weekday > .temp, .onehour p {\n        font-size: 1.5rem;\n        font-weight: 500;\n    }\n    .weekday > .temp_min {\n        font-size: 1.5rem;\n        font-weight: 200;\n    }\n    body{\n        font-size: 10px;\n    }\n}",""]);const u=l},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},626:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},460:e=>{e.exports="data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='cloud-rain' class='svg-inline--fa fa-cloud-rain' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='white' d='M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z'%3e%3c/path%3e%3c/svg%3e"},290:e=>{e.exports="data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='temperature-half' class='svg-inline--fa fa-temperature-half' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='white' d='M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z'%3e%3c/path%3e%3c/svg%3e"},342:e=>{e.exports="data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='droplet' class='svg-inline--fa fa-droplet' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='white' d='M221.3 22.13c-8-28.87-49.5-30.12-58.5 0C116 179.9 16 222.8 16 333.9c0 98.5 78.75 178.1 176 178.1s176-79.63 176-178.1C368 222.1 268.3 180.6 221.3 22.13zM192 448c-61.75 0-112-50.25-112-111.1c0-8.875 7.125-16 16-16s16 7.125 16 16c0 44.12 35.88 79.1 80 79.1c8.875 0 16 7.125 16 15.1C208 440.9 200.9 448 192 448z'%3e%3c/path%3e%3c/svg%3e"},318:e=>{e.exports="data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='wind' class='svg-inline--fa fa-wind' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='white' d='M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z'%3e%3c/path%3e%3c/svg%3e"},841:(e,n,t)=>{"use strict";e.exports=t.p+"308f4dd9c409885a4b52.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var r={};(()=>{"use strict";t.d(r,{Y:()=>F});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),d=t.n(c),l=t(216),p=t.n(l),u=t(589),f=t.n(u),m=t(28),h={};function g(e){const n=document.createElement(e);return{addText:function(e){void 0!==e&&(n.textContent=e)},setId:function(e){""!==e&&void 0!==e&&n.setAttribute("id",e)},setClass:function(e){""!==e&&void 0!==e&&n.setAttribute("class",e)},setSrc:function(e){void 0!==e&&(n.src=e)},appendElement:function(e){void 0!==e&&e.append(n)},returnElement:()=>n}}function w(e,n,t,r,o,a){const i=g(e);return i.appendElement(n),i.addText(o),i.setId(t),i.setClass(r),i.setSrc(a),i.returnElement()}function x(e,n,t,r,o){const a=g(e);return a.addText(n),a.appendElement(t),a.setId(r),a.setClass(o),a.returnElement()}function y(e,n,t){const r=g("div");return r.setId(e),r.setClass(n),r.appendElement(t),r.returnElement()}function v(e,n,t,r){const o=g("img");return o.setSrc(e),o.appendElement(n),o.setId(t),o.setClass(r),o.returnElement()}function b(e){return document.querySelector(e)}function $(e){let n=e.split(" ")[4].split(":")[0];"00"===n&&(n="24");const t=n.split("").filter((e=>e>0)).join("");return Number(t)<=12?`${t} AM`:Number(t)>12?t-12+" PM":void 0}function k(e,n){return new Date(1e3*(e+n)).toUTCString()}function S(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getDay()]}function C(e){const n=`${S(e)}, ${e.split(" ").splice(1,3).join(" ")}`,t=`${e.split(" ").splice(4,1).toString().split(":")[1]}`;return[n,`${$(e).split("").splice(0,2).join("")}:${t}${$(e).split("").splice(2).join("")}`]}function E(e){return e%1!=0?Number(e.toFixed(1))===e.toFixed(0)?Math.round(e):e.toFixed(1):Math.round(e)}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var z=t(290),M=t.n(z),j=t(318),T=t.n(j),H=t(342),I=t.n(H),L=t(460),_=t.n(L);const A={feelsLike:M(),windSpeed:T(),humidity:I(),chanceOfRain:_()},q=b("body");var D={current:"metric",symbol:"°C"};async function N(e){const n=await e,t=n[1],r=n[0],o=await F(`https://api.openweathermap.org/data/2.5/onecall?lat=${t[0]}&lon=${t[1]}&units=${D.current}&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`);return o.current.name=r,function(e){const n=e,{current:t}=n,r={location:{name:t.name,date:k(n.current.dt,n.timezone_offset)},main:{weatherdesc:t.weather[0].description,weathericon:t.weather[0].icon,temp:E(t.temp)},extra:{feelsLike:{num:E(t.feels_like),icon:"feel"},humidity:{num:t.humidity,icon:"humid"},windSpeed:{num:t.wind_speed,icon:"wind"},chanceOfRain:{num:n.daily[0].pop,icon:"rain"}}},o=n.daily,a=[];Object.keys(o).forEach((e=>{const t={date:k(o[e].dt,n.timezone_offset),weekDay:S(k(o[e].dt,n.timezone_offset)),temp_min:E(o[e].temp.min),temp_max:E(o[e].temp.max),weather:o[e].weather};a.push(t)}));const i=n.hourly,s=[];return i.forEach(((e,t)=>{if(t<24){const t={time:$(k(e.dt,n.timezone_offset)),temp:E(e.temp),weathericon:e.weather[0].icon};s.push(t)}})),{hour:s,userPref:D,today:r,week:a}}(o)}const O=e=>{localStorage.setItem("lastSearched",JSON.stringify(e))},P=()=>{if(null===localStorage.getItem("hasRunBefore")){let e=["Sydney",["-33.768528","150.9568559523945"]];localStorage.setItem("lastSearched",JSON.stringify(e)),J(N(e)),localStorage.setItem("hasRunBefore","true")}else J(N(JSON.parse(localStorage.getItem("lastSearched"))))};async function F(e){const n=await fetch(`${e}`,{mode:"cors"});return await n.json()}const R=document.querySelector("#searchIn"),U=document.querySelector("datalist");let W,B;R.addEventListener("keyup",(()=>{clearTimeout(B),R.value&&(B=setTimeout((()=>async function(e){U.querySelectorAll("*").forEach((e=>e.remove()));const n=await async function(e){const n=await e,t=await F(`https://api.openweathermap.org/geo/1.0/direct?q=${n}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`),r=[];return Object.keys(t).forEach((e=>{const n={city:`${t[e].name}, ${t[e].country}`,coord:[t[e].lat,t[e].lon]};"US"===t[e].country&&(n.city=`${t[e].name}, ${t[e].country}, ${t[e].state}`),r.push(n)})),r}(e);Object.keys(n).forEach((e=>{const t=document.createElement("option");t.textContent=`${n[e].city}`,t.setAttribute("data-index",`${e}`),U.append(t)})),W=n}(R.value)),2500))})),document.querySelector("#submit").addEventListener("click",(async()=>{const e=await async function(){if(void 0!==W){const e=W.find((e=>e.city===R.value));if(void 0!==e)return Object.values(e)}}();if(void 0!==e)O(e),J(N(e));else{const e=R.value.split(",").map((e=>e.trim()));e[0]=e[0].split("").map((e=>" "===e?e="+":e)).join("");let n=await async function(e){let n;1===e.length?n=`https://api.openweathermap.org/geo/1.0/direct?q=${e[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`:2===e.length?n=`https://api.openweathermap.org/geo/1.0/direct?q=${e[0]},,${e[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`:3===e.length&&(n=`https://api.openweathermap.org/geo/1.0/direct?q=${e[0]},${e[1]},${e[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`);let t=await F(n);const r=[`${t[0].lat}`,`${t[0].lon}`],{name:o}=t[0];return[o,r]}(e);O(n),J(N(n))}}));const Z=document.querySelector("body");async function J(e){const n=await e;Z.append(function(e){const{today:n}=e,{location:t}=n,{main:r}=n,{extra:o}=n,a=b("#searchDiv");q.append(a);const i=b("#container");for(;i.firstChild;)i.firstChild.remove();const s=y("day","",i),c=y("dayMain","",s);x("h1",`${t.name}`,c),x("p",`${C(t.date)[0]}`,c),x("p",`${C(t.date)[1]}`,c),function(){const t=y("mainTemp","",c);x("h2",`${r.temp}`,t,"tempNow","temp"),w("a",t,"convert","",`${e.userPref.symbol}`),v(`http://openweathermap.org/img/wn/${n.main.weathericon}@2x.png`,c,"","wicon"),x("p",`${r.weatherdesc}`,c)}(),function(){const e=y("extra","",s);Object.keys(o).forEach((n=>{const t=y("","extraProp",e);v(`${A[`${n}`]}`,t,"","extrWicon");const r=y("","extraTextDiv",t);var a;x("h3",`${a=n,a.split("").map(((e,n)=>0===n?e.toUpperCase():e===e.toUpperCase()?`  ${e}`:e)).join("")}`,r),x("p",`${o[n].num}`,r,"","feelsLike"===n?"temp":"")}))}(),i.append(a);const d=y("switchCont","",i),l=(w("button",d,"showW","switch","Daily"),w("button",d,"showH","switch","Hourly"),y("weekHour","",i)),p=y("week","",l);e.week.forEach((e=>{const n=y("","weekday",p);x("h4",`${e.weekDay}`,n,"","week day"),x("p",`${e.temp_max}`,n,"","temp whTemp temp_max"),x("p",`${e.temp_min}`,n,"","temp whTemp temp_min"),v(`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,n,"","whWicon")}));const u=y("hours","",l),f=e.hour;u.style.display="none";for(let e=0;e<24;)y(`hours${e}`,`H${e} eigthHours`,u),w("a",d,`${e}`," openH hidden",0===e?"●":"○").setAttribute("href","#"),e+=8;return b("#hours8").classList.add("hidden"),b("#hours16").classList.add("hidden"),f.forEach(((e,n)=>{let t;n<8&&(t=b("#hours0")),n>=8&&n<16&&(t=b("#hours8")),n>=16&&(t=b("#hours16"));const r=y("","onehour",t);x("h4",`${e.time}`,r,"","timeHour"),x("p",`${e.temp}`,r,"","whTemp temp"),v(`http://openweathermap.org/img/wn/${e.weathericon}@2x.png`,r,"","wicon whWicon")})),i}(n))}function Q(e,n,t){n.style.display=`${t}`,e.style.display="none"}document.addEventListener("click",(e=>{const n=b("#convert");if("convert"===e.target.id){const e=document.querySelectorAll(".temp"),t=D.current;e.forEach((e=>{e.textContent=function(e,n){const t=E(1.8*Number(e)+32),r=E(.5556*(Number(e)-32));return"metric"===n?r:t}(e.textContent,"metric"===t?"imperial":"metric")})),D.symbol="°C"===D.symbol?"°F":"°C",D.current="metric"===D.current?D.current="imperial":D.current="metric",n.textContent=D.symbol}})),Z.addEventListener("click",(e=>{const n=document.querySelectorAll(".openH");e.target.classList.contains("openH")&&(document.querySelectorAll(".openH").forEach((e=>e.textContent="○")),e.target.textContent="●",document.querySelectorAll(".eigthHours").forEach((e=>e.classList.add("hidden"))),b(`#hours${e.target.id}`).classList.remove("hidden")),e.target.classList.contains("switch")&&("showH"===e.target.id&&(Q(b("#week"),b("#hours"),"flex"),n.forEach((e=>e.classList.remove("hidden")))),"showW"===e.target.id&&(Q(b("#hours"),b("#week"),"flex"),n.forEach((e=>e.classList.add("hidden")))))})),P()})()})();