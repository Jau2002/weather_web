import axios from 'axios';

async function data(city, setCities) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	await axios
		.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		)
		.then(res => {
			if (res.data) {
				const weatherData = {
					longitud: res.data.coord.lon,
					latitud: res.data.coord.lat,
					imgMeteorology: res.data.weather[0].icon,
					description: res.data.weather[0].description,
					temp: res.data.main.temp,
					temperatureMinimum: Math.round(res.data.main.temp_min),
					temperatureMaximum: Math.round(res.data.main.temp_max),
					pressureAtmosphere: res.data.main.pressure,
					humidity: res.data.main.humidity,
					windSpeed: res.data.wind.speed,
					windDegrees: res.data.wind.deg,
					abbreviation: res.data.sys.country,
					timeZone: res.data.timezone,
					id: res.data.id,
					stateRecognized: res.data.name
				};
				setCities(prevCities =>
					prevCities.some(
						c => c.stateRecognized === weatherData.stateRecognized
					)
						? prevCities
						: [weatherData, ...prevCities]
				);
			}
		})
		.catch(err => {
			const message = err.bold();
			throw new Error(`Your search ${message} did not match any location.`);
		});
}

export default data;
