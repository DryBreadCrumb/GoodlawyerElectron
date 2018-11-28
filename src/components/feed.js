import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Feed extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
				<Link to={'/'}>Click me</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
        
	};
};

export default connect(mapStateToProps)(Feed);
