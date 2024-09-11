const apiKey = "a1b2abbf73904ef1b3481b818a26dcbb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.data == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".result").style.display = "none";

    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


        document.querySelector(".result").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener('click', change)

function change() {
    checkWeather(searchBox.value);
}

