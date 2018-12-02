import React from 'react';
import { connect } from 'react-redux';


class SettingsMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		
		};
		
	}

	render() {
		return (
			<div id='outerLogin'>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		
	};
};

export default connect(mapStateToProps)(SettingsMain);
