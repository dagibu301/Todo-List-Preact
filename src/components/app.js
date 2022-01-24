import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Create from '../routes/create';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Create path="/create" />
		</Router>
	</div>
)

export default App;
