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
            <Link to={'/test'}>Click me</Link> { /* This is the way to link to other urls. Has to be inside the router itself */ }
            </div>
        );
    }

}

export default LandingPage;
