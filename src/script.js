let now = new Date();
let realDate = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
realDate.innerHTML = `${day} ${hour}:${minute}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector("h1");
  if (cityInput.value) {
    city.innerHTML = `${cityInput.value}`;
  } else {
    city.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function showTemp(response) {
  let cityInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = `${cityInput.value}`;
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
}
let city = document.querySelector("#search-city-input.value");
let apiKey = "5354b60afda2b7800186c06153932396";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
}
function displayTemp(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
}
function realPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
function showCurrentTemp() {
  navigator.geolocation.getCurrentPosition(realPosition);
}
let current = document.querySelector("#current");
current.addEventListener("click", showCurrentTemp);
