import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import QuotesOverview from '../components/QuotesOverview';
import QuotesDetail from '../components/QuotesDetail';

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route path='/' component={LandingPage} exact={true} />
					<Route path='/login' component={Login} exact={true} />
					<Route path='/quotes' component={QuotesOverview} exact={true} />
					<Route path='/quotes/:id' component={QuotesDetail} exact={true} />
				</Switch>
			</div>
		);
	}
}

export { AppRouter as default };
