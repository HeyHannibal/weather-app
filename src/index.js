import "./styles.css";
import { loadDom } from "./dom";
import {
  getWeather,
  getCoord,
  getSuggestions,
  userPref,
} from "./APIfunctions";
import { qsel, replaceSpace, tempConv } from "./helpers";


const storeUserData = (function () {
  const save = (data) => {
    localStorage.setItem(`lastSearched`, JSON.stringify(data));
  };
  const loadLast = () => {
    if (localStorage.getItem("hasRunBefore") === null) {
      let defaultCity = ["Sydney", ["-33.768528", "150.9568559523945"]];
      localStorage.setItem("lastSearched", JSON.stringify(defaultCity));
      load(getWeather(defaultCity));
      localStorage.setItem("hasRunBefore", "true");
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
    console.log(check);
    if (check !== undefined) return Object.values(check);
  }
}

const submit = document.querySelector("#submit");
submit.addEventListener("click", async () => {
  const suggestions = await checkSuggestionList();
  if (suggestions !== undefined) {
    storeUserData.save(suggestions)
    load(getWeather(suggestions)); // first fetch weatherData from suggested coords, then load DOM
  } else {
    const cityCntryStateArr = input.value.split(",").map((item) => item.trim()); //
    cityCntryStateArr[0] = replaceSpace(cityCntryStateArr[0]); // first fetch coordinates with user input array
    let coordsAndName = await (getCoord(cityCntryStateArr))
    storeUserData.save(coordsAndName)

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
    const unit = userPref.current;
    allTemp.forEach((item) => {
      if (unit === "metric") {
        item.textContent = tempConv(item.textContent, "imperial");
      } else {
        item.textContent = tempConv(item.textContent, "metric");
      }
    });
    userPref.symbol = userPref.symbol === "°C" ? "°F" : "°C";
    userPref.current =
      userPref.current === "metric"
        ? (userPref.current = "imperial")
        : (userPref.current = "metric");
    convertBtn.textContent = userPref.symbol;
  }
});

function switchHide(hide, show, display) {
  show.style.display = `${display}`;
  hide.style.display = "none";
}
body.addEventListener("click", (e) => {
  /// switch between daily and weekly weather tabs
  const buttons = document.querySelectorAll(".openH");
  if (e.target.classList.contains("openH")) {
    document
      .querySelectorAll(".openH")
      .forEach((item) => (item.textContent = "○"));
    e.target.textContent = "●";
    const hourContainers = document.querySelectorAll(".eigthHours");
    hourContainers.forEach((item) => item.classList.add("hidden"));
    qsel(`#hours${e.target.id}`).classList.remove("hidden");
  }

  if (e.target.classList.contains("switch")) {
    if (e.target.id === "showH") {
      switchHide(qsel("#week"), qsel("#hours"), "flex");
      buttons.forEach((item) => item.classList.remove("hidden"));
    }
    if (e.target.id === "showW") {
      switchHide(qsel("#hours"), qsel("#week"), "flex");
      buttons.forEach((item) => item.classList.add("hidden"));
    }
  }
});

// const sydney = getWeather(getCoord(["sydney"]));
// console.log(sydney);
// load(sydney);
 storeUserData.loadLast();
