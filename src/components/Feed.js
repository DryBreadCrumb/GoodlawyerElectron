import React from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../actions/feedAction';
import Sidebar from './Sidebar';
import FeedItem from './FeedItem';
import Header from './Header';
import Checkbox from './Checkbox';
import SlideSection from './SlideSection';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: '',
			isSlideOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.getFeedItems = this.getFeedItems.bind(this);
		this.createRandomShit = this.createRandomShit.bind(this);
		this.toggleSlide = this.toggleSlide.bind(this);

	}

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

	// Todo: this is just a random method to populate the children components for now. Remove when required
	createRandomShit() {
		let objects = [];
		objects.push(<Checkbox key='1'/>);
		objects.push(<Checkbox key='2'/>);
		objects.push(<Checkbox key='3'/>);

		return objects;
	}

	toggleSlide(){
		this.setState(() => {
			return {
				isSlideOpen: !this.state.isSlideOpen
			};
		});
	}

	render() {
		return (
			<div>
				<div className="sidebar-general">
					<Sidebar />
				</div>

				<div className="header">
					<Header title="Feed" subtitle="Available Jobs">{this.createRandomShit()}</Header>
				</div>

				<div className="main-content">
					<div onClick={this.toggleSlide}>
						<FeedItem jobs={this.state.jobs} />
					</div>
					<SlideSection close={this.toggleSlide} open={this.state.isSlideOpen}>shamalamadingdong</SlideSection>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Feed);
