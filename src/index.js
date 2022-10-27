const apiKey = "c335fo1b760e628d848413ebcaatbf0b";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesady",
  "Thursday",
  "Friday",
  "Saturday",
];

const h1 = document.querySelector("h1");
const currentDay = document.querySelector("#day");
const input = document.querySelector("#input");
const form = document.querySelector("form");
const btnSearch = document.querySelector(".btns .btn-search");
const btnCurrent = document.querySelector(".btns .btn-current");
const descriptionElement = document.querySelector(".current #description");
const humidityElement = document.querySelector(".current #humidity");
const windElement = document.querySelector(".current #wind");
const iconElement = document.querySelector(".main-img #icon");

let temperature = 18;
let names;
let currentSelectedCity = "";


btnSearch.addEventListener("click", showNewCity);
btnCurrent.addEventListener("click", showCurrentCity);
input.addEventListener('change', changeCurrentCity);


greetings();
function greetings() {
  names = prompt("Hello! What's your name?");
  if (names === null || names === "") {
    greetings();
  } else {
    showCity();
  }
}

function showCity() {
  h1.innerHTML = `<span>
  ${names},
  <br />
  Welcome to ${currentSelectedCity}
  <br />
  <span id='currentCity'>Enter your city</span>
  <br />
  </span>
  <span id='temp'>
  18
  </span>
  <a href='#' id='celsius'>°C</a>
  / <a href='#' id='fahrenheit'>°F</a>
  `;


}

function getForecast(latitude, longitude) {
  let units = "metric";
  let weatherUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${units}`;
  axios.get(weatherUrl).then(displayForecast);
}

function getTemperature(response) {
  temperature = Math.round(response.data.temperature.current);
  convertToCelsiumOrFahrenheit(temperature, "Celsium");
  let celsiumDegree = document.querySelector("#currentCity");
  celsiumDegree.innerHTML = temperature;
  currentCity.innerHTML = response.data.city;

  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  currentDay.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);

  getForecast(response.data.coordinates.latitude, response.data.coordinates.longitude);
}

function convertToCelsiumOrFahrenheit(temperature, type) {

  const degrees = document.querySelector("#temp");
  const temperatureCelsium = document.querySelector("#celsius")
  const temperatureFahrenheit = document.querySelector("#fahrenheit")

  if(type === "Celsium"){
    degrees.innerHTML = temperature;
    temperatureCelsium.classList.add("active");
    temperatureFahrenheit.classList.remove("active");
  } else if(type === "Fahrenheit"){
    degrees.innerHTML = Math.round((temperature * 9) / 5 + 32);
    temperatureCelsium.classList.remove("active");
    temperatureFahrenheit.classList.add("active");
  }
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let days = ["Thu", "Fri", "Sat", "Sun"];
  let forecastHTML = "";
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<ul>
          <li>
            <p>
              ${formatDay(forecastDay.time)}
              <br />
              <span class="weather-forecast-tempearature-max">${Math.round(
                forecastDay.temperature.maximum
              )}°</span>
              <span class="weather-forecast-tempearature-min">${Math.round(
                forecastDay.temperature.minimum
              )}°</span>
            </p>
            <img class="w-100 weather-emojis" src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
              forecastDay.condition.icon
            }.png" />
          </li>
        </ul>`;
    }
  });

  forecastHTML = forecastHTML;
  forecastElement.innerHTML = forecastHTML;
}

function showNewCity(e) {
  e.preventDefault();
  
  if (currentSelectedCity === "") {
    alert("Write a city please");
  } else {
    currentCity.innerHTML = `
  ${currentSelectedCity}
  `;
    getWeatherByCity(currentSelectedCity);
  }
}

function getWeatherByCity(city) {
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log("Hello1", city)
  axios.get(weatherUrl).then(getTemperature);
}
// function retrievePosition(position) {
//   console.log(position);
//   let units = "metric";
//   let weatherUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coord.longitude}&lat=${position.coord.latitude}&key=${apiKey}&units=${units}`;
//   axios.get(weatherUrl).then(getTemperature);
//   // axios.get(weatherUrl).then(getTemperature);
// }

function formatDate(timestamp) {
  let day = new Date(timestamp);
  let dayOfWeek = daysOfWeek[day.getDay()];

  let hours = day.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = day.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (currentDay.innerHTML = `
   ${dayOfWeek} ${hours}:${minutes}
  `);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function showCurrentCity(e) {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((e) => {
    getForecast(e.coords.latitude, e.coords.longitude)
  }, showError);
}

function changeCurrentCity (e) {
  currentSelectedCity = e.target.value;
}

function showError (err) {
  console.log(err)
  alert("There is an error, check the console log");
}