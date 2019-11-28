import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LatestPosts from './components/LatestPosts';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/latest" render={(props) => <LatestPosts />} />
				<Redirect exact from="/" to="/latest" />
			</Switch>
		</React.Fragment>
	);
}

export default () => {
	return (
		<App />
	);
};
