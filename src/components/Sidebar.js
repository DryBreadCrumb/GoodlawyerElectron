import React from 'react';
import {Popover,PopoverBody} from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logoutUser} from './../actions/userAction';
import SideNavSubItem from './SideNavSubItem';
import SideNavSubActive from './SideNavSubActive';
import SideNavSubBid from './SideNavSubBid';
import AccountBlock from './AccountBlock';
import Unread from './Unread';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        
		this.state = {
            visible: 'true'
        };
    }
    
    render(){
        return (
            <div className='sidebar-container'>
                <span className='welcome-message'>Welcome!</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        visible: state.visible
    }
}

export default withRouter(connect(mapStateToProps)(Sidebar));