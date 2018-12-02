import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class Sidebar extends React.Component
{
	constructor(props){
		super(props);      
		this.state = {
		};
	}

	render(){
        return (
			<div>
				<div className = "nav-side-container">
					<Link to={'/login'}>log out...</Link>
				</div>	
			</div>

        );
    }
}

const mapStateToProps = state => {
	return {
	};
};

export default withRouter(connect(mapStateToProps)(Sidebar));
