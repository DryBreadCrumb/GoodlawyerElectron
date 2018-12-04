import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class SettingsMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
            <div>
            <div className='sidebar-general'>
                <Sidebar/>
            </div>

            <div className='main-content'>
				<div id='settings-main'>
				Settings
			</div>
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
