import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

class JobsDetails extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <div className='sidebar-general'>
                <Sidebar/>
            </div>

            <div className='main-content'>
                <span className='login-sub-title'>
                JobDetail                
                </span>
            </div>
        </div>
        );
    }

}

export default JobsDetails;