import '../styles.css';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import data from './data';
import Cards from '../components/Cards';

function App() {
	const [cities, setCities] = useState([]);

	const onSearch = city => {
		data(city, setCities);
	};

	const onRemove = id => {
		setCities(prevCities => prevCities.filter(c => c.id === id));
	};

	return (
		<main className='styles'>
			<h1>skeleton template</h1>
			<SearchBar onSearch={onSearch} />
			<Cards
				onRemove={onRemove}
				cities={cities}
			/>
		</main>
	);
}

export default App;
