type Weather = { city: string, country: string, temperature: number, weather: string };
function showWeather(weather: Weather) {
    console.log(`City: ${weather.city}`);
    console.log(`Country: ${weather.country}`);
    console.log(`Temperature: ${weather.temperature}`);
    console.log(`Weather: ${weather.weather}`);

}

