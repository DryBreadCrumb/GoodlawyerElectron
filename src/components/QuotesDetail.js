// /quotes/:id

import React from 'react';
import {Link} from 'react-router-dom';

class QuotesDetail extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <div> QuotesDetail </div>

            <Link to={'/'}>Back to Landing Page</Link> { /* This is the way to link to other urls. Has to be inside the router itself */ }

            </div>
        );
    }

}

export default QuotesDetail;
