import imgPressure from '../assets/pressureAtmosphere.png';
import imgDamp from '../assets/humidity.png';
import imgSpeed from '../assets/windSpeed.png';

function Card({ onRemove, moreInfo, reverse, ...props }) {
	return (
		<article>
			<div>
				<h3>{props.abbreviation}</h3>
				<button
					onClick={onRemove}
					type='button'
				>
					✘
				</button>
			</div>
			<h2>{props.stateRecognized}</h2>
			<div>
				<h5>Max</h5>
				<h5>{`${props.temperatureMaximum} °C`}</h5>
			</div>
			<div>
				<h5>Min</h5>
				<h5>{`${props.temperatureMinimum} °C`}</h5>
			</div>
			<img
				src={`https://openweathermap.org/img/wn/${props.imgMeteorology}@2x.png`}
				alt={props.description}
			/>
			<div>
				<img
					src={imgPressure}
					alt='pressureAtmosphere'
				/>
				<h4>{`${props.pressureAtmosphere} hPa`}</h4>
			</div>
			<div>
				<img
					src={imgDamp}
					alt='humidity'
				/>
				<h4>{`${props.humidity}%`}</h4>
			</div>
			<div>
				<img
					src={imgSpeed}
					alt='windSpeed'
				/>
				<h4>{`${props.windSpeed} kts`}</h4>
			</div>
			{reverse && (
				<>
					<h5>{`latitud ${props.latitud}°`}</h5>
					<h5>{`longitud ${props.longitud}°`}</h5>
					<h5>{`average temperature ${props.temp} °C`}</h5>
					<h5>{`direction of the wind ${props.windDegrees}`}</h5>
					<h5>{`UTC ${props.timeZone}`}</h5>
				</>
			)}
			<button
				onClick={moreInfo}
				type='button'
			>
				{reverse ? '❯' : '❮'}
			</button>
		</article>
	);
}

export default Card;
