import Card from './Card';

function Cards({ cities, onRemove }) {
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
					/>
				))}
		</section>
	);
}

export default Cards;
