import imgPressure from '../assets/pressureAtmosphere.png';
import imgDamp from '../assets/humidity.png';
import imgSpeed from '../assets/windSpeed.png';

function Card({ onRemove, ...props }) {
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
				src={`http://openweathermap.org/img/wn/${props.imgMeteorology}@x.png`}
				alt='temperature icon'
			/>
			<div>
				<img
					src={imgPressure}
					alt='pressureAtmosphere'
				/>
				<h4>{props.pressureAtmosphere}</h4>
			</div>
			<div>
				<img
					src={imgDamp}
					alt='humidity'
				/>
				<h4>{props.humidity}</h4>
			</div>
			<div>
				<img
					src={imgSpeed}
					alt='windSpeed'
				/>
				<h4>{props.windSpeed}</h4>
			</div>
		</article>
	);
}

export default Card;
