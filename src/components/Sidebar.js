import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import createElectronStore from 'electron-store-webpack-wrapper';

const store = createElectronStore();

class Sidebar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		};

		this.doLogOut = this.doLogOut.bind(this);
	}

	doLogOut(e) {
		
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
							<Link to={'/fixed'}>Fixed Fee Jobs - Overview</Link>
						</div>
						<div className='link-item'>
							<Link to={'/fixed/:id'}>Fixed Fee Jobs - Detail</Link>
						</div>
						<div className='link-item'>
							<Link to={'/message'}>Messages</Link>
						</div>
						<div className='link-item'>
							<Link to={'/settings'}>Settings</Link>
						</div>
						<div className='link-item'>
							<Link to={'/login'} onClick={this.doLogOut}>Logout</Link>
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
