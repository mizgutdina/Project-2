const city = "chicago";

const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI_KEY}&units=imperial`;

d3.json(weather_url).then((data) => {
    var currentTemp = data.main.temp;
    var feelsLike = data.main.feels_like;
    var windSpeed = data.wind.speed;
    var cloudCoverage = data.clouds.all;

    console.log(currentTemp);
    console.log(feelsLike);
    console.log(windSpeed);
    console.log(cloudCoverage);

    d3.select("#weather").append("p").text(`Current Temperature: ${currentTemp}°F`);
    d3.select("#weather").append("p").text(`Feels Like: ${feelsLike}°F`);
    d3.select("#weather").append("p").text(`Wind Speed: ${windSpeed} MPH`);
    d3.select("#weather").append("p").text(`Cloud Coverage: ${cloudCoverage}%`);
})