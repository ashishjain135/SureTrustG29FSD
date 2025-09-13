const api_key = "4ded145d1df37c52a0aa6c624e24de6a"

const searchBtn = document.getElementById("searchBtn");

const cityInput = document.getElementById("cityInput");

const weatherBox = document.getElementById("weather");

async function fetchWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
     if(!res.ok){
        throw new Error("City not found");
    }



    const data = await res.json();


    weatherBox.innerHTML=`<h2>${data.name}</h2>
    <h3>${(data.main.temp - 273.15).toFixed(2)} °C</h3>
    <h3>${data.weather[0].main}</h3>
    <h3>Humidity: ${data.main.humidity}%</h3>
    <h3>Wind Speed: ${data.wind.speed} m/s</h3>
    `
    console.log(data);
}


searchBtn.addEventListener("click", () => {


    const city = cityInput.value;
    if(city){
    fetchWeather(city);
    cityInput.value="";
}

})


fetchWeather("New York");