import Card from './Card';

function Cards({ cities, onRemove, moreInfo, reverse }) {
	return (
		<section>
			{cities &&
				cities.map(c => (
					<Card
						key={c.id}
						abbreviation={c.abbreviation}
						onRemove={() => onRemove(c.id)}
						stateRecognized={c.stateRecognized}
						temperatureMaximum={c.temperatureMaximum}
						temperatureMinimum={c.temperatureMinimum}
						imgMeteorology={c.imgMeteorology}
						pressureAtmosphere={c.pressureAtmosphere}
						humidity={c.humidity}
						windSpeed={c.windSpeed}
						moreInfo={() => moreInfo()}
						reverse={reverse}
						description={c.description}
						longitud={c.longitud}
						latitud={c.latitud}
						temp={c.temp}
						windDegrees={c.windDegrees}
						timeZone={c.timeZone}
						clouds={c.clouds}
					/>
				))}
		</section>
	);
}

export default Cards;
