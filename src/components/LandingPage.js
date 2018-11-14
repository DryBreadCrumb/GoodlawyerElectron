import React from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <div> PLEASE WORK</div>
            <Link to={`/test`}>Click me</Link>
            </div>
        )
    }

}

export default LandingPage;