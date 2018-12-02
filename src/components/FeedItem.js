import React from "react";
import { connect } from "react-redux";

class FeedItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		let jobs = Array.from(this.props.jobs);

		return jobs.map(job => (
			<div key={job._id}>
				<span className="feed-item-title">{job.title}</span>
			</div>
		));
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(FeedItem);
