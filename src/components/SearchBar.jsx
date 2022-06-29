import { useMemo, useState } from 'react';

function SearchBar({ onSearch }) {
	const [city, setCity] = useState('');

	const onPush = e => {
		e.preventDefault();
		onSearch(city);
		setCity('');
	};

	const handleDisabled = useMemo(() => city.length <= 1, [city]);

	const handleChange = e => {
		setCity(([e.target.name] = e.target.value));
	};

	return (
		<form onSubmit={onPush}>
			<input
				value={city}
				name='city'
				placeholder='Location...'
				onChange={handleChange}
			/>
			<button
				type='submit'
				disabled={handleDisabled}
			>
				Search
			</button>
		</form>
	);
}

export default SearchBar;
