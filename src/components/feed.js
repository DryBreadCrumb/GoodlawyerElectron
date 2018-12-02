import React from 'react';
import {connect} from 'react-redux';
import {getFeed} from '../actions/feedAction';
import Sidebar from './Sidebar';

class Feed extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // logout(){
    //     this.props.dispatch(logoutUser());
    // }

    handleClick(e) {
      e.preventDefault();
      console.log('Starting GET request for new feed info');
      this.props.dispatch(getFeed())
      .then(result => {
        console.log('Done');
        console.log(result);
      });
    }

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

                    <div>
                      <button
                        onClick={this.handleClick}>
                        Get feed
                        </button>
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

export default connect(mapStateToProps)(Feed);
