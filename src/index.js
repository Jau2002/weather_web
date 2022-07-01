import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './services/App';

const rootNode = document.getElementById('root');
render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootNode
);
