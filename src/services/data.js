import axios from 'axios';

async function data(city, setCities) {
	try {
		const API_KEY = process.env.REACT_APP_API_KEY;
		const resolve = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		);
		const response = await resolve.data;
		if (response) {
			const weatherData = {
				longitud: response.coord.lon,
				latitud: response.coord.lat,
				imgMeteorology: response.weather[0].icon,
				description: response.weather[0].description,
				temp: response.main.temp,
				temperatureMinimum: Math.round(response.main.temp_min),
				temperatureMaximum: Math.round(response.main.temp_max),
				pressureAtmosphere: response.main.pressure,
				humidity: response.main.humidity,
				windSpeed: response.wind.speed,
				windDegrees: response.wind.deg,
				abbreviation: response.sys.country,
				timeZone: response.timezone,
				id: response.id,
				stateRecognized: response.name
			};
			setCities(prevCities =>
				prevCities.some(c => c.stateRecognized === weatherData.stateRecognized)
					? prevCities
					: [weatherData, ...prevCities]
			);
		}
	} catch (error) {
		const message = error.bold();
		throw new Error(`Your search ${message} did not match any location.`);
	}
}

export default data;
