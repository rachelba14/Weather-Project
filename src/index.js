function currentDate() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = ("0" + now.getMinutes()).slice(-2);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
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
}

function formatDay(timestamp) {
  let forecastTime = new Date(timestamp * 1000);
  let date = forecastTime.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[forecastTime.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[forecastTime.getMonth()];

  return `${day}, ${month} ${date}`;
}

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
  let quote = document.querySelector("#quote");
  let author = document.querySelector("#author");
  let book = document.querySelector("#book");
  message.innerHTML = `Current Weather`;

  fTemp = response.data.main.temp;
  fTempMin = response.data.main.temp_min;
  fTempMax = response.data.main.temp_max;
  fWind = response.data.wind.speed;
  fFeelsLike = response.data.main.feels_like;

  currentTemp.innerHTML = `${Math.round(fTemp)}°F`;
  city.innerHTML = response.data.name;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  wind.innerHTML = `Wind Speed: ${Math.round(wind)} mph`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(feelsLike)}°F`;
  currentCondition.innerHTML = response.data.weather[0].description;
  minTemp.innerHTML = `${Math.round(fTempMin)}°F`;
  maxTemp.innerHTML = `${Math.round(fTempMax)}°F |`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(fFeelsLike)}°F`;
  wind.innerHTML = `Wind Speed: ${Math.round(fWind)} mph`;

  if (apiIcon === "01d") {
    icon.setAttribute("src", `images/01d.png`);
    quote.innerHTML = `On a clear day
Rise and look around you,
And you'll see who you are.
On a clear day
How it will astound you
That the glow of your being
Outshines every star.`;
    author.innerHTML = `Alan Jay Lerner`;
    book.innerHTML = `On a clear day you can see forever: The Musical`;
  }

  if (apiIcon === "01n") {
    icon.setAttribute("src", `images/01n.png`);
    quote.innerHTML = `On a clear day
Rise and look around you,
And you'll see who you are.
On a clear day
How it will astound you
That the glow of your being
Outshines every star.`;
    author.innerHTML = `Alan Jay Lerner`;
    book.innerHTML = `On a clear day you can see forever: The Musical`;
  }

  if (apiIcon === "02d" || apiIcon === "02n") {
    icon.setAttribute("src", `images/02d.png`);
    quote.innerHTML = `This world was made to be cloaked in gray. It wouldn’t feel natural if the sun shone brightly all the time.`;
    author.innerHTML = `Darren Shan`;
    book.innerHTML = `Bec`;
  }

  if (apiIcon === "03d" || apiIcon === "03n") {
    icon.setAttribute("src", `images/03d.png`);
    quote.innerHTML = `Sometimes the clouds in the sky are mistaken. They didn’t come to block the sunlight. They came to embrace it.`;
    author.innerHTML = `Kaylee Stepkoski`;
    book.innerHTML = ``;
  }

  if (apiIcon === "04d" || apiIcon === "04n") {
    icon.setAttribute("src", `images/04d.png`);
    quote.innerHTML = `Life is no different than the weather. Not only is it unpredictable, but it shows us a new perspective of the world every day.`;
    author.innerHTML = `Suzy Kassem`;
    book.innerHTML = `Rise UP and Salute the Sun`;
  }

  if (apiIcon === "09d" || apiIcon === "09n") {
    icon.setAttribute("src", `images/09d.png`);
    quote.innerHTML = `The sky's gray and there's mizzle. It's so soft on my skin--it's nothing like rain. It's even softer than the lightest drizzle! Lift my face up, so it can kiss my skin`;
    author.innerHTML = `Jenn Fagan`;
    book.innerHTML = `The Panopticon`;
  }

  if (apiIcon === "10d" || apiIcon === "10n") {
    icon.setAttribute("src", `images/10d.png`);
    quote.innerHTML = `My mom says that when it rains you never feel like you should be anywhere but home.`;
    author.innerHTML = `Elise Broach`;
    book.innerHTML = `Shakespeare's Secret`;
  }

  if (apiIcon === "11d" || apiIcon === "11n") {
    icon.setAttribute("src", `images/11n.png`);
    quote.innerHTML = `Thunderstorms are as much our friends as the sunshine`;
    author.innerHTML = `Criss Jami`;
    book.innerHTML = `Killosophy`;
  }
  if (apiIcon === "13d" || apiIcon === "13n") {
    icon.setAttribute("src", `images/13d.png`);
    quote.innerHTML = `Storms, hail, floods and all sorts of bad weather will come in life, but you know what, so will sunshine.`;
    author.innerHTML = `Gift Gugu Mona`;
    book.innerHTML = `The Essence of Faith`;
  }

  if (apiIcon === "50d" || apiIcon === "50n") {
    icon.setAttribute("src", `images/50d.png`);
    quote.innerHTML = `The weather was gray, the streets filled with that Sunday morning silence that makes you feel like everybody else is home with people that they love.`;
    author.innerHTML = `Ruth Reichl`;
    book.innerHTML = `Delicious!`;
  }

  getForecast(response.data.coord);

  console.log(response.data);
}

function search(city) {
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  search(searchInput.value);
}

//

function getForecast(coordinates) {
  let apiKey = "2e03d7d5a86e13a466013e0c083b84c1";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);
  console.log(coordinates);
}
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
  let quote = document.querySelector("#quote");
  let author = document.querySelector("#author");
  let book = document.querySelector("#book");

  fTemp = response.data.main.temp;
  fTempMin = response.data.main.temp_min;
  fTempMax = response.data.main.temp_max;
  fWind = response.data.wind.speed;
  fFeelsLike = response.data.main.feels_like;

  message.innerHTML = `Current Weather`;
  currentTemp.innerHTML = `${Math.round(fTemp)}°F`;
  city.innerHTML = response.data.name;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  wind.innerHTML = `Wind Speed: ${Math.round(fWind)} mph`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(fFeelsLike)}°F`;
  currentCondition.innerHTML = response.data.weather[0].description;
  minTemp.innerHTML = `${Math.round(fTempMin)}°F`;
  maxTemp.innerHTML = `${Math.round(fTempMax)}°F |`;
  searchInput.value = response.data.name;

  if (apiIcon === "01d") {
    icon.setAttribute("src", `images/01d.png`);
    quote.innerHTML = `On a clear day,
Rise and look around you
And you'll see who you are.
On a clear day,
How it will astound you
That the glow of your being
Outshines every star`;
    author.innerHTML = `Alan Jay Lerner`;
    book.innerHTML = `On a clear day you can see forever: The Musical`;
  }

  if (apiIcon === "01n") {
    icon.setAttribute("src", `images/01n.png`);
    quote.innerHTML = `On a clear day,
Rise and look around you
And you'll see who you are.
On a clear day,
How it will astound you
That the glow of your being
Outshines every star`;
    author.innerHTML = `Alan Jay Lerner`;
    book.innerHTML = `On a clear day you can see forever: The Musical`;
  }

  if (apiIcon === "02d" || apiIcon === "02n") {
    icon.setAttribute("src", `images/02d.png`);
    quote.innerHTML = `This world was made to be cloaked in gray. It wouldn’t feel natural if the sun shone brightly all the time.`;
    author.innerHTML = `Darren Shan`;
    book.innerHTML = `Bec`;
  }

  if (apiIcon === "03d" || apiIcon === "03n") {
    icon.setAttribute("src", `images/03d.png`);
    quote.innerHTML = `Sometimes the clouds in the sky are mistaken. They didn’t come to block the sunlight. They came to embrace it.`;
    author.innerHTML = `Kaylee Stepkoski`;
    book.innerHTML = ``;
  }

  if (apiIcon === "04d" || apiIcon === "04n") {
    icon.setAttribute("src", `images/04d.png`);
    quote.innerHTML = `Life is no different than the weather. Not only is it unpredictable, but it shows us a new perspective of the world every day.`;
    author.innerHTML = `Suzy Kassem`;
    book.innerHTML = `Rise UP and Salute the Sun`;
  }

  if (apiIcon === "09d" || apiIcon === "09n") {
    icon.setAttribute("src", `images/09d.png`);
    quote.innerHTML = `The sky's gray and there's mizzle. It's so soft on my skin--it's nothing like rain. It's even softer than the lightest drizzle! Lift my face up, so it can kiss my skin`;
    author.innerHTML = `Jenn Fagan`;
    book.innerHTML = `The Panopticon`;
  }

  if (apiIcon === "10d" || apiIcon === "10n") {
    icon.setAttribute("src", `images/10d.png`);
    quote.innerHTML = `My mom says that when it rains you never feel like you should be anywhere but home.`;
    author.innerHTML = `Elise Broach`;
    book.innerHTML = `Shakespeare's Secret`;
  }

  if (apiIcon === "11d" || apiIcon === "11n") {
    icon.setAttribute("src", `images/11d.png`);
    quote.innerHTML = `Thunderstorms are as much our friends as the sunshine`;
    author.innerHTML = `Criss Jami`;
    book.innerHTML = `Killosophy`;
  }
  if (apiIcon === "13d" || apiIcon === "13n") {
    icon.setAttribute("src", `images/13d.png`);
    quote.innerHTML = `Storms, hail, floods and all sorts of bad weather will come in life, but you know what, so will sunshine.`;
    author.innerHTML = `Gift Gugu Mona`;
    book.innerHTML = `The Essence of Faith`;
  }

  if (apiIcon === "50d" || apiIcon === "50n") {
    icon.setAttribute("src", `images/50d.png`);
    quote.innerHTML = `The weather was gray, the streets filled with that Sunday morning silence that makes you feel like everybody else is home with people that they love.`;
    author.innerHTML = `Ruth Reichl`;
    book.innerHTML = `Delicious!`;
  }

  getForecast(response.data.coord);
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

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#weather-forecast");
  let forecastHTML = `<span id ="weather-forecast"><div class=" row row-cols-1 mb-0 row-cols-md-6 g-4 card-design">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        ` <div class="col-sm-2">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title" id = "weather-forecast-date">${formatDay(
          forecastDay.dt
        )}</h5>
        <hr/>
        <p class="card-text forecast" id = "weather-condition-forecast">${
          forecastDay.weather[0].description
        } <br/>
          <img class = "weather-forecast-icon" id = "weather-forecast-icon" src = "images/${
            forecastDay.weather[0].icon
          }.png" />
          <br/> <span id = "weather-condition-high" >${Math.round(
            forecastDay.temp.max
          )}°F | </span><span id = "weather-condition-low">${Math.round(
          forecastDay.temp.min
        )}°F</span>
        </p>
        
      </div>
    </div>
  </div>`;
    }

    console.log(forecastDay.weather[0].icon);
  });

  forecastHTML = forecastHTML + `</span>`;
  forecastElement.innerHTML = forecastHTML;
}

function displayFTemp(event) {
  event.preventDefault();
  tempToggleC.classList.add("active");
  tempToggleF.classList.remove("active");
  let currentTemp = document.querySelector("#current-temp");

  let maxTemp = document.querySelector("#high");
  let minTemp = document.querySelector("#low");
  let currentFeelsLike = document.querySelector("#feels-like");
  let currentWind = document.querySelector("#wind");
  currentTemp.innerHTML = `${Math.round(fTemp)}°F`;

  minTemp.innerHTML = `${Math.round(fTempMin)}°F`;
  maxTemp.innerHTML = `${Math.round(fTempMax)}°F |`;
  currentWind.innerHTML = `Wind Speed: ${Math.round(fWind)}mph`;
  currentFeelsLike.innerHTML = `Feels Like: ${Math.round(fFeelsLike)}°F `;
}

function displayCTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  let currentTempMin = document.querySelector("#low");
  let currentTempMax = document.querySelector("#high");
  let currentFeelsLike = document.querySelector("#feels-like");
  let currentWind = document.querySelector("#wind");

  tempToggleF.classList.add("active");
  tempToggleC.classList.remove("active");
  let cTemp = (fTemp - 32) / 1.8;
  let cTempMin = (fTempMin - 32) / 1.8;
  let cTempMax = (fTempMax - 32) / 1.8;
  let cFeelsLike = (fFeelsLike - 32) / 1.8;
  let cWind = fWind * 1.609;

  currentTemp.innerHTML = `${Math.round(cTemp)}°C`;
  currentTempMin.innerHTML = `${Math.round(cTempMin)}°C`;
  currentTempMax.innerHTML = `${Math.round(cTempMax)}°C |`;
  currentFeelsLike.innerHTML = `Feels Like: ${Math.round(cFeelsLike)}°C`;
  currentWind.innerHTML = `Wind Speed: ${Math.round(cWind)}km/hr`;
}

let fTemp = null;
let fTempMin = null;
let fTempMax = null;
let fWind = null;
let fFeelsLike = null;

let tempToggleF = document.querySelector("#toggletoF");
let tempToggleC = document.querySelector("#toggletoC");

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#toggletoF");
fahrenheitLink.addEventListener("click", displayFTemp);

let celsiusLink = document.querySelector("#toggletoC");
celsiusLink.addEventListener("click", displayCTemp);

currentDate();
search("Panama");
