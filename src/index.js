let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = ("0" + now.getMinutes()).slice(-2);
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let formattedDate = `${day}, ${month} ${date} ${hours}:${minutes}`;

let h1 = document.querySelector("h1");
h1.innerHTML = formattedDate;

function showTemp(response) {
  let currentTemp = document.querySelector("#current-temp");
  let city = document.querySelector("#location");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let feelsLike = document.querySelector("#feels-like");
  let message = document.querySelector("#message");
  let currentCondition = document.querySelector("#current-condition");
  let maxTemp = document.querySelector("#high");
  let minTemp = document.querySelector("#low");
  let apiIcon = response.data.weather[0].icon;
  let icon = document.querySelector("#icon");
  message.innerHTML = `Current Weather`;
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°F`;
  city.innerHTML = response.data.name;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  wind.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} mph`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°F`;
  currentCondition.innerHTML = response.data.weather[0].description;
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°F`;
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°F |`;

  if (apiIcon === "01d") {
    icon.setAttribute("src", `images/sun.png`);
  }

  if (apiIcon === "01n") {
    icon.setAttribute("src", `images/moon.png`);
  }

  if (apiIcon === "02d" || apiIcon === "02n") {
    icon.setAttribute("src", `images/few-clouds.png`);
  }

  if (apiIcon === "03d" || apiIcon === "03n") {
    icon.setAttribute("src", `images/scattered-clouds.png`);
  }

  if (apiIcon === "04d" || apiIcon === "04n") {
    icon.setAttribute("src", `images/broken-clouds.png`);
  }

  if (apiIcon === "09d" || apiIcon === "09n") {
    icon.setAttribute("src", `images/shower-rain.png`);
  }

  if (apiIcon === "10d" || apiIcon === "10n") {
    icon.setAttribute("src", `images/rain.png`);
  }

  if (apiIcon === "11d" || apiIcon === "11n") {
    icon.setAttribute("src", `images/thunderstorm.png`);
  }
  if (apiIcon === "13d" || apiIcon === "13n") {
    icon.setAttribute("src", `images/snow.png`);
  }

  if (apiIcon === "50d" || apiIcon === "50n") {
    icon.setAttribute("src", `images/mist.png`);
  }
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", search);

//

function showTempC(response) {
  let cDegrees = document.querySelector("#current-temp");
  let maxTemp = document.querySelector("#high");
  let minTemp = document.querySelector("#low");
  let feelsLike = document.querySelector("#feels-like");
  let wind = document.querySelector("#wind");
  cDegrees.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°C`;
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°C |`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°C`;
  wind.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} m/s`;
}

function getC(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTempC);
}

let tempToggleC = document.querySelector("#toggletoC");
tempToggleC.addEventListener("click", getC);

//

function showTempF(response) {
  let fDegrees = document.querySelector("#current-temp");
  let maxTemp = document.querySelector("#high");
  let minTemp = document.querySelector("#low");
  let feelsLike = document.querySelector("#feels-like");
  let wind = document.querySelector("#wind");
  fDegrees.innerHTML = `${Math.round(response.data.main.temp)}°F`;
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°F`;
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°F |`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°F`;
  wind.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} mph`;
}

function getF(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTempF);
}

let tempToggleF = document.querySelector("#toggletoF");
tempToggleF.addEventListener("click", getF);

//

function showLocationTemp(response) {
  let searchInput = document.querySelector("#search-input");
  let currentTemp = document.querySelector("#current-temp");
  let city = document.querySelector("#location");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let feelsLike = document.querySelector("#feels-like");
  let message = document.querySelector("#message");
  let currentCondition = document.querySelector("#current-condition");
  let maxTemp = document.querySelector("#high");
  let minTemp = document.querySelector("#low");
  let apiIcon = response.data.weather[0].icon;
  let icon = document.querySelector("#icon");
  message.innerHTML = `Current Weather`;
  currentTemp.innerHTML = `${Math.round(response.data.main.temp)}°F`;
  city.innerHTML = response.data.name;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  wind.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)} mph`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(
    response.data.main.feels_like
  )}°F`;
  currentCondition.innerHTML = response.data.weather[0].description;
  minTemp.innerHTML = `${Math.round(response.data.main.temp_min)}°F`;
  maxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}°F |`;
  searchInput.value = response.data.name;

  if (apiIcon === "01d") {
    icon.setAttribute("src", `images/sun.png`);
  }

  if (apiIcon === "01n") {
    icon.setAttribute("src", `images/moon.png`);
  }

  if (apiIcon === "02d" || apiIcon === "02n") {
    icon.setAttribute("src", `images/few-clouds.png`);
  }

  if (apiIcon === "03d" || apiIcon === "03n") {
    icon.setAttribute("src", `images/scattered-clouds.png`);
  }

  if (apiIcon === "04d" || apiIcon === "04n") {
    icon.setAttribute("src", `images/broken-clouds.png`);
  }

  if (apiIcon === "09d" || apiIcon === "09n") {
    icon.setAttribute("src", `images/shower-rain.png`);
  }

  if (apiIcon === "10d" || apiIcon === "10n") {
    icon.setAttribute("src", `images/rain.png`);
  }

  if (apiIcon === "11d" || apiIcon === "11n") {
    icon.setAttribute("src", `images/thunderstorm.png`);
  }
  if (apiIcon === "13d" || apiIcon === "13n") {
    icon.setAttribute("src", `images/snow.png`);
  }

  if (apiIcon === "50d" || apiIcon === "50n") {
    icon.setAttribute("src", `images/mist.png`);
  }
}

function position(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showLocationTemp);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(position);
}

let button = document.querySelector("#geolocation");
button.addEventListener("click", getCurrentPosition);

//

//
