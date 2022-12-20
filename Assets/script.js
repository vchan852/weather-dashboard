// var loadDateTime = setInterval(() => {
//     $("#currentDay").text(dayjs ().format("MMMM D, dddd, ")); //h:mm:ss a

// }, 1000);

function initPage() {
    // my unique API so i can easily call back
    const APIKey = "eb11b651862feb056f1b8461d8892a0a"

    // all functions needed to have the dashboard working
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");

    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");

    const historyEl = document.getElementById("history");

    var fivedayEl = document.getElementById("fiveday-header");

    var todayweatherEl = document.getElementById("today-weather");

    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


                // display current time + weather
                const currentDate = new Date(response.data.dt * 1000);
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();

                nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                let weatherPic = response.data.weather[0].icon;

                currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                currentPicEl.setAttribute("alt", response.data.weather[0].description);

                currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";

initPage();


// var apiKey = "&appid=eb11b651862feb056f1b8461d8892a0a=imperial"
// var currentTime = dayjs().format("MMM D");

// function loadRecent() {
//     // initalize date
//     $("#currentTime").text(currentTime);

//     //fetch api
//     fetch(
//             // "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={eb11b651862feb056f1b8461d8892a0a}"
//             "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=eb11b651862feb056f1b8461d8892a0a=
