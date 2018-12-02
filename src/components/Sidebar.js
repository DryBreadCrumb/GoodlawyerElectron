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
				<div className="nav-side-container">
					<div className='sidebar-links-container'>
						<div className='link-item'>
							<Link to={'/feed'}>Feed</Link>
						</div>
						<div className='link-item'>
							<Link to={'/quotes'}>Quotes - Overview</Link>
						</div>
						<div className='link-item'>
							<Link to={'/quotes/:id'}>Quotes - Detail</Link>
						</div>
						<div className='link-item'>
							<Link to={'/jobs'}>Jobs - Overview</Link>
						</div>
						<div className='link-item'>
							<Link to={'/jobs/:id'}>Jobs - Detail</Link>
						</div>
						<div className='link-item'>
							<Link to={'/message'}>Messages</Link>
						</div>
						<div className='link-item'>
							<Link to={'/settings'}>Settings</Link>
						</div>
						<div className='link-item'>
							<Link to={'/login'}>Logout</Link>
						</div>
					</div>
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
