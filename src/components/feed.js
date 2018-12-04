import React from "react";
import { connect } from "react-redux";
import { getFeed } from "../actions/feedAction";
import Sidebar from "./Sidebar";
import FeedItem from "./FeedItem";

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: ""
		};

		this.handleClick = this.handleClick.bind(this);
		this.getFeedItems = this.getFeedItems.bind(this);
	}

	// logout(){
	//     this.props.dispatch(logoutUser());
	// }

	handleClick(e) {
		e.preventDefault();
	}

	getFeedItems() {
		console.log("Starting GET request for new feed info");
		this.props.dispatch(getFeed()).then(result => {
			console.log("Done");
			//console.log(result);
			this.setState(() => {
				return { jobs: result };
			});
		});
	}

	componentDidMount() {
		this.getFeedItems();
	}

	render() {
		return (
			<div>
				<div className="sidebar-general">
					<Sidebar />
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
