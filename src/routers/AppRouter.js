import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import QuotesOverview from '../components/QuotesOverview';
import QuotesDetail from '../components/QuotesDetail';

// import Quotes from '../components/Quotes';
// import QuoteDetails from '../components/QuoteDetails';
//
// import Jobs from '../components/Jobs';
// import JobDetails from '../components/JobDetails';
//
// import Message from '../components/Message';
//
// import Fixed from '../components/Fixed';
// import FixedDetails from '../components/FixedDetails';

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


					{/*

					<Route path='/jobs' component={Jobs} exact={true} />
					<Route path='/jobs/:id' component={JobDetails} exact={true} />

					<Route path='/message/:id' component={Message} exact={true} />

					<Route path='/fixed' component={Fixed} exact={true} />
					<Route path='/fixed/:id' component={FixedDetails} exact={true} /> */}

				</Switch>
			</div>
		);
	}
}

export { AppRouter as default };
