const latitude = 36.9741;
const longitude = -122.0308;

const temperatureButton = document.querySelector("#temperature-button");
const conditionButton = document.querySelector("#condition-button");
const weatherResult = document.querySelector("#weather-result");

//when buttons temp. and weather conditio click they run
temperatureButton.addEventListener("click", getTemperature);
conditionButton.addEventListener("click", getWeatherCondition);

// recheck 
function getTemperature() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temperature_2m;

            weatherResult.innerHTML = `
                <h2>Current Temperature</h2>
                <p>${temperature}°F</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = "<p>Sorry, we could not get the temperature.</p>";
            console.error(error);
        });
}

function getWeatherCondition() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherCode = data.current.weather_code;
            const condition = getWeatherDescription(weatherCode);

            weatherResult.innerHTML = `
                <h2>Current Weather</h2>
                <p>${condition}</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = "<p>Sorry, we could not get the weather condition.</p>";
            console.error(error);
        });
}
// explanation: numbers are values defined by open-meteo
function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Clear sky",
        1: "Mostly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        95: "Thunderstorm"
    };

    return weatherCodes[code] || "Unknown weather condition";
}