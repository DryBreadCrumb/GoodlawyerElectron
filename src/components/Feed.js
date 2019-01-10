import React from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../actions/feedAction';
import Sidebar from './Sidebar';
import FeedItem from './FeedItem';
import Header from './Header';
import Checkbox from './Checkbox';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.getFeedItems = this.getFeedItems.bind(this);
		this.createRandomShit = this.createRandomShit.bind(this);
	}

	// logout(){
	//     this.props.dispatch(logoutUser());
	// }

	handleClick(e) {
		e.preventDefault();
	}

	getFeedItems() {
		console.log('Starting GET request for new feed info');
		this.props.dispatch(getFeed()).then(result => {
			console.log('Done');
			this.setState(() => {
				return { jobs: result };
			});
		});
	}

	componentDidMount() {
		this.getFeedItems();
	}

	createRandomShit() {
		let objects = [];
		objects.push(<Checkbox />);
		objects.push(<Checkbox />);
		objects.push(<Checkbox />);

		return objects;
	}

	render() {
		return (
			<div>
				<div className="sidebar-general">
					<Sidebar />
				</div>

				<div className="header">
					<Header title="Feed" subtitle="Available Jobs" buttons={this.createRandomShit()}/>
				</div>

				<div className="main-content">
					<span className="login-sub-title">Available Jobs</span>
					<div>
						<FeedItem jobs={this.state.jobs} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Feed);
