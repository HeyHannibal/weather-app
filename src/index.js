import "./styles.css";
import { loadDom } from "./dom";
import { getWeather, getCoord, getSuggestions } from "./APIfunctions";
import { qsel, qsela, replaceSpace, tempConv } from "./helpers";

const storeUserData = (function () {
  const save = (data) => {
    localStorage.setItem(`lastSearched`, JSON.stringify(data));
  };
  const loadLast = () => {
    if (localStorage.getItem("hasRunBefore") === null) {
      let defaultCity = ["Sydney", ["-33.768528", "150.9568559523945"]];
      localStorage.setItem("lastSearched", JSON.stringify(defaultCity));
      localStorage.setItem("userUnitPref", "°C");
      localStorage.setItem("hasRunBefore", "true");
      load(getWeather(defaultCity));
    } else {
      let lastSearchedCoord = JSON.parse(localStorage.getItem("lastSearched"));
      load(getWeather(lastSearchedCoord));
    }
  };
  return {
    save,
    loadLast,
  };
})();

export async function getData(input) {
  const response = await fetch(`${input}`, { mode: "cors" });
  const jData = await response.json();
  return jData;
}

const input = document.querySelector("#searchIn");
const options = document.querySelector("datalist");
let suggestionList;
let typingTimer;
input.addEventListener("keyup", () => {
  /// wait for user to stop typing, and fetch suggested cities
  clearTimeout(typingTimer);
  if (input.value) {
    typingTimer = setTimeout(() => updateSuggestions(input.value), 2500);
  }
});

async function updateSuggestions(input) {
  options.querySelectorAll("*").forEach((item) => item.remove());
  const suggestions = await getSuggestions(input); // fetch suggested cities
  const city = Object.keys(suggestions);
  city.forEach((item) => {
    const option = document.createElement("option"); // add them to DOM.
    option.textContent = `${suggestions[item].city}`;
    option.setAttribute("data-index", `${item}`);
    options.append(option);
  });
  suggestionList = suggestions; // update suggestionList object with new values
}

async function checkSuggestionList() {
  // if user choose item from option list, return already fetched coords
  if (suggestionList !== undefined) {
    const check = suggestionList.find((item) => item.city === input.value);
    if (check !== undefined) return Object.values(check);
  }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", async () => {
  const suggestions = await checkSuggestionList();
  if (suggestions !== undefined) {
    storeUserData.save(suggestions);
    load(getWeather(suggestions)); // first fetch weatherData from suggested coords, then load DOM
  } else {
    const cityCntryStateArr = input.value.split(",").map((item) => item.trim()); //
    cityCntryStateArr[0] = replaceSpace(cityCntryStateArr[0]); // first fetch coordinates with user input array
    let coordsAndName = await getCoord(cityCntryStateArr);
    storeUserData.save(coordsAndName);

    load(getWeather(coordsAndName)); // then fetch the Weather, and load DOM
  }
});

const body = document.querySelector("body"); /// load DOM
async function load(data) {
  const elements = await data;
  body.append(loadDom(elements));
}

document.addEventListener("click", (e) => {
  /// convert temperature units
  const convertBtn = qsel("#convert");
  if (e.target.id === "convert") {
    const allTemp = document.querySelectorAll(".temp");
    const unit = localStorage.getItem("userUnitPref");
    console.log(unit);
    allTemp.forEach((item) => {
      if (unit === "°C") {
        item.textContent = tempConv(item.textContent, "°F");
        convertBtn.textContent = "°F";
      } else {
        item.textContent = tempConv(item.textContent, "°C");
        convertBtn.textContent = "°C";
      }
    });
  }
  localStorage.setItem("userUnitPref", `${convertBtn.textContent}`);
});

body.addEventListener("click", (e) => {
  /// switch between daily and weekly weather tabs
  let buttons = qsela('.openH')
  buttons.forEach(button => button.addEventListener("click", (element) => {
    document.querySelectorAll(".openH").forEach((item) => (item.textContent = "○"));
    element.target.textContent = "●";
    const hourContainers = document.querySelectorAll(".eigthHours");
    hourContainers.forEach((item) => item.classList.add("hidden"));
    qsel(`#hours${element.target.id}`).classList.remove("hidden");
  }))
  
  if (e.target.classList.contains("switch")) {
    if (e.target.id === "showH") {
      qsel("#week").style.display = "none";
      qsel("#hours").style.display = "flex";
      buttons.forEach((item) => item.classList.remove("hidden"));
    }
    if (e.target.id === "showW") {
      qsel("#week").style.display = "flex";
      qsel("#hours").style.display = "none";
      buttons.forEach((item) => item.classList.add("hidden"));
    }
  }
});

storeUserData.loadLast();
