import React from 'react';
import {Link} from 'react-router-dom';

class JobsOverview extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={'/'}>Back to Landing Page</Link>
                <p>This is a placeholder for JobOverview</p>
            </div>
        );
    }
}

export default JobsOverview;