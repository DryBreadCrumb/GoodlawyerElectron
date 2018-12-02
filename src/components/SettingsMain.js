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
			<div className='main-content'>
				<div id='settings-main'>
					these are the settings
				</div>
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
