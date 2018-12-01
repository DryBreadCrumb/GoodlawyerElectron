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
                <div>
                    <div className="sidebar-general"></div> 
                    <Sidebar/>
                </div>

                
            # TODO
            <div>
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
