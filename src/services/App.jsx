import '../styles.css';
import { useState } from 'react';
import data from './data';
import Cards from '../components/Cards';
import Nav from '../components/Nav';

function App() {
	const [cities, setCities] = useState([]);
	const [reverse, setReverse] = useState(false);

	const onSearch = city => {
		data(city, setCities);
	};

	const onRemove = id => {
		setCities(prevCities => prevCities.filter(c => c.id !== id));
	};

	const moreInfo = () => {
		setReverse(prevState => !prevState);
	};

	return (
		<main className='styles'>
			<Nav onSearch={onSearch} />
			<Cards
				onRemove={onRemove}
				cities={cities}
				moreInfo={moreInfo}
				reverse={reverse}
			/>
		</main>
	);
}

export default App;
