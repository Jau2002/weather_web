import '../styles.css';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import data from './data';

function App() {
	const [cities, setCities] = useState([]);

	const onSearch = city => {
		data(city, setCities);
	};

	return (
		<main className='styles'>
			<h1>skeleton template</h1>
			<SearchBar onSearch={onSearch} />
		</main>
	);
}

export default App;
