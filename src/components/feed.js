import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';

class Feed extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

    // logout(){
    //     this.props.dispatch(logoutUser());
    // }

    render() {
        return (
            <div>

                <div className='sidebar-general'>
                    <Sidebar/>
                </div>

                <div className='main-content'>
                    <span className='login-sub-title'>
                    my work here is done
                    </span>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
	};
};

export default connect(mapStateToProps)(Feed);
