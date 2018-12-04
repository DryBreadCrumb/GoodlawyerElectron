import React from 'react';

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

export default FeedItem;
